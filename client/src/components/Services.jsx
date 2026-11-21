import { serviceGroups } from '../config/site.js';

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.6fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="text-4xl text-brand-navy sm:text-5xl">What we do</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-slate-600">
            One team for the software, the devices and the paperwork. You do not need three suppliers.
          </p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {serviceGroups.map((g) => (
            <div key={g.title} className="grid gap-6 py-9 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <h3 className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-3xl text-transparent">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{g.lead}</p>
              </div>
              <dl className="space-y-5">
                {g.items.map(([name, text]) => (
                  <div key={name}>
                    <dt className="font-semibold text-brand-ink">{name}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-600">{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
