import { site } from '../config/site.js';

// Decorative pixel squares echo the motif in the logo
const pixels = [
  [0, 1, 0.5], [1, 0, 0.9], [2, 0, 0.7], [1, 1, 0.8], [2, 1, 1], [0, 2, 0.4],
  [1, 2, 0.6], [2, 2, 0.9], [3, 1, 0.5], [3, 2, 0.7], [4, 2, 0.35], [2, 3, 0.5],
];

const lines = [
  ['build', 'websites, web apps, online applications'],
  ['maintain', 'systems, updates, backups, security'],
  ['advise', 'IT consultancy for growing businesses'],
  ['repair', 'phones, laptops, printing, scanning'],
];

export default function Hero() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy text-white">
      <svg className="pointer-events-none absolute right-6 top-6 hidden h-40 w-40 md:block" viewBox="0 0 100 100" aria-hidden="true">
        {pixels.map(([x, y, o], i) => (
          <rect key={i} x={x * 20 + 4} y={y * 20 + 4} width="13" height="13" fill="#14C1F5" className="pixel" style={{ '--o': o, animationDelay: `${i * 70}ms` }} />
        ))}
      </svg>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_1fr] md:items-center md:py-28">
        <div>
          <h1 className="text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            We build the website.<br />
            We also fix the laptop it runs on.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {site.legalName} is a technology company in Karatina. Websites, web systems and IT consultancy for businesses, plus hands-on phone and laptop repair, printing and scanning.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="btn-red">Get a free quote</a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline-light">Chat on WhatsApp</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Call {site.phoneDisplay} · {site.location}</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-[#0d1d36] shadow-2xl" role="img" aria-label="Summary of services: build, maintain, advise, repair">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
            <span className="ml-3 font-mono text-xs text-slate-400">js_tech.services</span>
          </div>
          <div className="space-y-3 p-5 font-mono text-sm leading-relaxed">
            {lines.map(([k, v]) => (
              <div key={k} className="flex gap-4">
                <span className="w-20 shrink-0 text-brand-cyan">{k}</span>
                <span className="text-slate-200">{v}</span>
              </div>
            ))}
            <div className="pt-2 text-slate-400">
              <span className="text-brand-red">&gt;</span> ready when you are<span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-brand-cyan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
