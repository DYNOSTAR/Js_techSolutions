import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { site } from '../config/site.js';

const links = [
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

const linkClass = ({ isActive }) =>
  `text-sm font-medium hover:text-brand-blue ${isActive ? 'text-brand-blue' : 'text-slate-600'}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" aria-label={`${site.name} home`} className="flex items-center">
          <img src="/logo.png" alt={site.legalName} className="h-11 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
          ))}
          <Link to="/contact" className="btn-red">Get a free quote</Link>
        </nav>
        <button
          className="rounded-md p-2 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {links.map(([label, to]) => (
              <li key={to}>
                <NavLink to={to} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 font-medium hover:bg-brand-mist">
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-red w-full">Get a free quote</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}