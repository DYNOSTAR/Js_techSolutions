import { process } from '../config/site.js';

export default function Process() {
  return (
    <section id="process" className="bg-brand-mist py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-xl text-4xl text-brand-navy sm:text-5xl">How a project works</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([title, text], i) => (
            <li key={title} className="relative border-t-2 border-brand-blue pt-5">
              <span className="font-display text-sm font-bold text-brand-blue">Step {i + 1}</span>
              <h3 className="mt-1 text-2xl text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
