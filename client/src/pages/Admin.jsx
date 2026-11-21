import { useEffect, useState, useCallback } from 'react';

const API = import.meta.env.VITE_API_URL || '';
const STATUSES = ['new', 'contacted', 'closed'];

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem('jst_token') || '');
  const [creds, setCreds] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState('all');

  const authed = useCallback(
    async (path, opts = {}) => {
      const res = await fetch(`${API}${path}`, {
        ...opts,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, ...(opts.headers || {}) },
      });
      if (res.status === 401) {
        localStorage.removeItem('jst_token');
        setToken('');
        throw new Error('Session expired. Sign in again.');
      }
      return res;
    },
    [token]
  );

  const load = useCallback(async () => {
    try {
      const res = await authed('/api/inquiries');
      setRows(await res.json());
    } catch (e) {
      setError(e.message);
    }
  }, [authed]);

  useEffect(() => {
    if (token) load();
  }, [token, load]);

  async function login(e) {
    e.preventDefault();
    setError('');
    const res = await fetch(`${API}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(creds),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return setError(data.error || 'Sign in failed.');
    localStorage.setItem('jst_token', data.token);
    setToken(data.token);
  }

  async function setStatus(id, status) {
    const res = await authed(`/api/inquiries/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
    if (res.ok) {
      const updated = await res.json();
      setRows((r) => r.map((x) => (x.id === id ? updated : x)));
    }
  }

  async function remove(id) {
    if (!confirm('Delete this inquiry? This cannot be undone.')) return;
    const res = await authed(`/api/inquiries/${id}`, { method: 'DELETE' });
    if (res.ok) setRows((r) => r.filter((x) => x.id !== id));
  }

  function logout() {
    localStorage.removeItem('jst_token');
    setToken('');
    setRows([]);
  }

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-mist px-5">
        <form onSubmit={login} className="w-full max-w-sm space-y-4 rounded-lg bg-white p-7 shadow">
          <img src="/logo.png" alt="JS Tech Solutions" className="mx-auto h-14" />
          <h1 className="text-center text-2xl text-brand-navy">Admin sign in</h1>
          <label className="block text-sm font-medium">Email
            <input className="field mt-1" type="email" autoComplete="username" value={creds.email} onChange={(e) => setCreds({ ...creds, email: e.target.value })} required />
          </label>
          <label className="block text-sm font-medium">Password
            <input className="field mt-1" type="password" autoComplete="current-password" value={creds.password} onChange={(e) => setCreds({ ...creds, password: e.target.value })} required />
          </label>
          {error && <p role="alert" className="text-sm font-medium text-brand-red">{error}</p>}
          <button className="btn-red w-full" type="submit">Sign in</button>
        </form>
      </div>
    );
  }

  const shown = filter === 'all' ? rows : rows.filter((r) => r.status === filter);
  const counts = Object.fromEntries(STATUSES.map((s) => [s, rows.filter((r) => r.status === s).length]));

  return (
    <div className="min-h-screen bg-brand-mist">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-10" />
            <span className="font-display text-xl font-bold text-brand-navy">Inquiries</span>
          </div>
          <div className="flex gap-2">
            <button className="btn-outline" onClick={load}>Refresh</button>
            <button className="btn-outline" onClick={logout}>Sign out</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {['all', ...STATUSES].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize ${filter === s ? 'bg-brand-navy text-white' : 'bg-white text-slate-700 hover:bg-slate-100'}`}
            >
              {s} {s === 'all' ? `(${rows.length})` : `(${counts[s]})`}
            </button>
          ))}
        </div>
        {error && <p role="alert" className="mb-4 text-sm font-medium text-brand-red">{error}</p>}
        {shown.length === 0 ? (
          <p className="rounded-lg bg-white p-8 text-center text-slate-500">No inquiries here yet.</p>
        ) : (
          <ul className="space-y-4">
            {shown.map((r) => (
              <li key={r.id} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold">{r.name}</p>
                    <p className="text-sm text-slate-600">
                      <a className="text-brand-blue hover:underline" href={`tel:${r.phone}`}>{r.phone}</a>
                      {' · '}
                      <a className="text-brand-blue hover:underline" href={`https://wa.me/${r.phone.replace(/\D/g, '').replace(/^0/, '254')}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                      {r.email && <> · <a className="text-brand-blue hover:underline" href={`mailto:${r.email}`}>{r.email}</a></>}
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    {new Date(r.created_at).toLocaleString('en-KE')}
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-brand-blue">{r.service}</p>
                <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-slate-700">{r.message}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <label className="text-sm font-medium">Status
                    <select className="field ml-2 inline-block w-auto py-1.5" value={r.status} onChange={(e) => setStatus(r.id, e.target.value)}>
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </label>
                  <button className="text-sm font-medium text-brand-red hover:underline" onClick={() => remove(r.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
