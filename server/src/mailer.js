import nodemailer from 'nodemailer';

let transporter = null;
function getTransporter() {
  if (!process.env.SMTP_HOST) return null;
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 465);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return transporter;
}

export async function notifyNewInquiry(q) {
  const t = getTransporter();
  if (!t) return;
  await t.sendMail({
    from: `"JS Tech Solutions Website" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    replyTo: q.email || undefined,
    subject: `New inquiry: ${q.service} from ${q.name}`,
    text: [
      `Name: ${q.name}`,
      `Phone: ${q.phone}`,
      `Email: ${q.email || '-'}`,
      `Service: ${q.service}`,
      '',
      q.message,
    ].join('\n'),
  });
}
