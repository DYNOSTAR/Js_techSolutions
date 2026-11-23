import { Link } from 'react-router-dom';
import { site } from '../config/site.js';

export default function Footer() {
  return (
    <footer className="bg-[#07101f] py-10 text-sm text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold text-white">{site.legalName}</p>
          <p className="mt-1">{site.tagline}</p>
          <p className="mt-4">© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2">
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-white">About the founder</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <p>{site.location}</p>
          <p className="mt-2"><a className="hover:text-white" href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></p>
          <p className="mt-2"><a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
    </footer>
  );
}