import { portfolio } from '../config/site.js';

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl text-4xl text-brand-navy sm:text-5xl">Systems we build</h2>
        <p className="mt-4 max-w-xl text-slate-600">
          A sample of the kind of platforms we deliver, built for Kenyan and wider African markets.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-3">
          {portfolio.map((p) => (
            <article key={p.title} className="flex flex-col bg-white p-7">
              <p className="text-sm font-semibold text-brand-blue">{p.tag}</p>
              <h3 className="mt-2 text-2xl text-brand-navy">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
