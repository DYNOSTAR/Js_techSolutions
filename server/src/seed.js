import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { pool, initDb } from './db.js';

const email = (process.env.ADMIN_EMAIL || '').trim().toLowerCase();
const password = process.env.ADMIN_PASSWORD || '';

if (!email || password.length < 8) {
  console.error('Set ADMIN_EMAIL and an ADMIN_PASSWORD of 8+ characters in server/.env');
  process.exit(1);
}

await initDb();
const hash = await bcrypt.hash(password, 12);
await pool.query(
  `INSERT INTO admins (email, password_hash) VALUES ($1, $2)
   ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
  [email, hash]
);
console.log(`Admin ready: ${email}`);
await pool.end();
