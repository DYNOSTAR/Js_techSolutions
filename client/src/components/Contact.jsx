import { useState } from 'react';
import { site, formServices } from '../config/site.js';

const empty = { name: '', phone: '', email: '', service: '', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Could not send your request.');
      setStatus('sent');
      setForm(empty);
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-brand-navy py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl sm:text-5xl">Tell us what you need</h2>
          <p className="mt-4 max-w-md leading-relaxed text-slate-300">
            Send the form and we will reply with a clear quote. For anything urgent, message us on WhatsApp.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div><dt className="text-slate-400">WhatsApp and calls</dt><dd className="mt-0.5 text-lg font-semibold"><a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan">{site.phoneDisplay}</a></dd></div>
            <div><dt className="text-slate-400">Email</dt><dd className="mt-0.5 text-lg font-semibold"><a href={`mailto:${site.email}`} className="hover:text-brand-cyan">{site.email}</a></dd></div>
            <div><dt className="text-slate-400">Find us</dt><dd className="mt-0.5">{site.location}</dd></div>
            <div><dt className="text-slate-400">Opening hours</dt><dd className="mt-0.5">{site.hours}</dd></div>
          </dl>
          <iframe
            title={`Map of ${site.location}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            className="mt-8 h-56 w-full rounded-lg border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="rounded-lg bg-white p-6 text-brand-ink sm:p-8">
          {status === 'sent' ? (
            <div role="status" className="py-10 text-center">
              <h3 className="text-3xl text-brand-navy">Request received</h3>
              <p className="mx-auto mt-3 max-w-sm text-slate-600">We will contact you on the phone number you gave us. For a faster reply, message us on WhatsApp.</p>
              <div className="mt-6 flex justify-center gap-3">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-red">Chat on WhatsApp</a>
                <button className="btn-outline" onClick={() => setStatus('idle')}>Send another</button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium">Your name
                  <input className="field mt-1" value={form.name} onChange={set('name')} autoComplete="name" required />
                </label>
                <label className="block text-sm font-medium">Phone or WhatsApp
                  <input className="field mt-1" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="07.. or +254.." required />
                </label>
              </div>
              <label className="block text-sm font-medium">Email (optional)
                <input className="field mt-1" type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              </label>
              <label className="block text-sm font-medium">What do you need?
                <select className="field mt-1" value={form.service} onChange={set('service')} required>
                  <option value="" disabled>Choose a service</option>
                  {formServices.map((s) => <option key={s}>{s}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium">Details
                <textarea className="field mt-1" rows="5" value={form.message} onChange={set('message')} placeholder="Describe the project or the problem, and any deadline." required />
              </label>
              {/* Honeypot: hidden from people, filled by bots */}
              <input type="text" name="website" value={form.website} onChange={set('website')} tabIndex="-1" autoComplete="off" className="hidden" aria-hidden="true" />
              {status === 'error' && <p role="alert" className="text-sm font-medium text-brand-red">{error}</p>}
              <button type="submit" disabled={status === 'sending'} className="btn-red w-full disabled:opacity-60">
                {status === 'sending' ? 'Sending...' : 'Send request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
