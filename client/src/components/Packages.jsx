import { packages } from '../config/site.js';

export default function Packages() {
  return (
    <section id="packages" className="bg-brand-mist py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl text-4xl text-brand-navy sm:text-5xl">Packages</h2>
        <p className="mt-4 max-w-xl text-slate-600">
          Every project is quoted after a short conversation, so you only pay for what you need.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-lg p-7 ${p.featured ? 'bg-brand-navy text-white' : 'border border-slate-200 bg-white'}`}
            >
              <h3 className="text-3xl">{p.name}</h3>
              <p className={`mt-1 font-semibold ${p.featured ? 'text-brand-cyan' : 'text-brand-blue'}`}>{p.price}</p>
              <p className={`mt-4 text-sm leading-relaxed ${p.featured ? 'text-slate-300' : 'text-slate-600'}`}>{p.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M7.7 13.3 4.4 10l-1.4 1.4 4.7 4.7L17 6.8l-1.4-1.4z" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 ${p.featured ? 'btn-red' : 'btn-outline'}`}>Ask about {p.name.toLowerCase()}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
