import { site } from '../config/site.js';

export default function Footer() {
  return (
    <footer className="bg-[#07101f] py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-white">{site.legalName}</p>
          <p className="mt-1">{site.tagline}</p>
        </div>
        <div className="sm:text-right">
          <p>{site.location}</p>
          <p className="mt-1">© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
