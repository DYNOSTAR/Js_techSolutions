import { Link } from 'react-router-dom';
import { services, serviceGroupLeads } from '../config/site.js';

export default function Services() {
  const groups = Object.keys(serviceGroupLeads);
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.6fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="text-4xl text-brand-navy sm:text-5xl">What we do</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-slate-600">
            One team for the software, the devices and the paperwork. You do not need three suppliers.
          </p>
          <Link to="/services" className="btn-outline mt-6">See all services</Link>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {groups.map((g) => (
            <div key={g} className="grid gap-6 py-9 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <h3 className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-3xl text-transparent">{g}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{serviceGroupLeads[g]}</p>
              </div>
              <dl className="space-y-5">
                {services.filter((s) => s.group === g).map((s) => (
                  <div key={s.slug}>
                    <dt className="font-semibold text-brand-ink">{s.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-600">{s.summary}</dd>
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