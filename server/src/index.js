import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bcrypt from 'bcryptjs';
import { pool, initDb } from './db.js';
import { signToken, requireAdmin } from './auth.js';
import { notifyNewInquiry } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const isProd = process.env.NODE_ENV === 'production';

if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET is missing. Copy server/.env.example to server/.env and fill it in.');
  process.exit(1);
}

app.set('trust proxy', 1);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:'],
        frameSrc: ['https://www.google.com'],
        connectSrc: ["'self'"],
      },
    },
  })
);
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json({ limit: '20kb' }));

const inquiryLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 8, standardHeaders: true, legacyHeaders: false });
const loginLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 10, standardHeaders: true, legacyHeaders: false });

const SERVICES = [
  'Website development',
  'Web app or system',
  'Systems maintenance',
  'IT consultancy',
  'Online applications help',
  'Phone or laptop repair',
  'Printing and scanning',
  'Something else',
];

app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Public: submit a quote request
app.post('/api/inquiries', inquiryLimiter, async (req, res) => {
  const b = req.body || {};
  const name = String(b.name || '').trim().slice(0, 120);
  const phone = String(b.phone || '').trim().slice(0, 30);
  const email = String(b.email || '').trim().slice(0, 160);
  const service = String(b.service || '').trim();
  const message = String(b.message || '').trim().slice(0, 4000);

  if (b.website) return res.json({ ok: true }); // honeypot: bots fill this in
  if (!name) return res.status(400).json({ error: 'Enter your name.' });
  if (!/^[+\d][\d\s-]{7,}$/.test(phone)) return res.status(400).json({ error: 'Enter a valid phone number.' });
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Enter a valid email address.' });
  if (!SERVICES.includes(service)) return res.status(400).json({ error: 'Choose a service.' });
  if (message.length < 10) return res.status(400).json({ error: 'Tell us a little more about what you need.' });

  try {
    const { rows } = await pool.query(
      `INSERT INTO inquiries (name, phone, email, service, message) VALUES ($1,$2,$3,$4,$5) RETURNING id`,
      [name, phone, email || null, service, message]
    );
    notifyNewInquiry({ name, phone, email, service, message }).catch((e) => console.error('Mail failed:', e.message));
    res.status(201).json({ ok: true, id: rows[0].id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Something went wrong. Please try WhatsApp instead.' });
  }
});

// Admin: sign in
app.post('/api/auth/login', loginLimiter, async (req, res) => {
  const email = String(req.body?.email || '').trim().toLowerCase();
  const password = String(req.body?.password || '');
  const { rows } = await pool.query('SELECT * FROM admins WHERE email = $1', [email]);
  const admin = rows[0];
  if (!admin || !(await bcrypt.compare(password, admin.password_hash))) {
    return res.status(401).json({ error: 'Wrong email or password.' });
  }
  res.json({ token: signToken(admin), email: admin.email });
});

// Admin: list and update inquiries
app.get('/api/inquiries', requireAdmin, async (_req, res) => {
  const { rows } = await pool.query('SELECT * FROM inquiries ORDER BY created_at DESC LIMIT 500');
  res.json(rows);
});

app.patch('/api/inquiries/:id', requireAdmin, async (req, res) => {
  const status = req.body?.status;
  if (!['new', 'contacted', 'closed'].includes(status)) return res.status(400).json({ error: 'Invalid status' });
  const { rows } = await pool.query('UPDATE inquiries SET status = $1 WHERE id = $2 RETURNING *', [status, req.params.id]);
  if (!rows[0]) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

app.delete('/api/inquiries/:id', requireAdmin, async (req, res) => {
  await pool.query('DELETE FROM inquiries WHERE id = $1', [req.params.id]);
  res.json({ ok: true });
});

// Production: serve the built React app from the same server
if (isProd) {
  const dist = path.join(__dirname, '../../client/dist');
  app.use(express.static(dist));
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

const port = process.env.PORT || 5000;
initDb()
  .then(() => app.listen(port, () => console.log(`JS Tech server running on http://localhost:${port}`)))
  .catch((e) => {
    console.error('Database connection failed:', e.message);
    process.exit(1);
  });
