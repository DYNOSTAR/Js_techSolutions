import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';
import PageHeader from '../components/PageHeader.jsx';
import Img from '../components/Img.jsx';
import { founder, shopPhotos, site } from '../config/site.js';

export default function AboutPage() {
  usePageTitle('About the founder');
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
  return (
    <>
      <PageHeader title="About us">{founder.intro}</PageHeader>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        <div className="md:sticky md:top-28 md:self-start">
          <Img src={founder.photo} alt={`${founder.name}, ${founder.role}`} loading="eager" className="aspect-[4/5] w-full max-w-md rounded-lg object-cover" />
          <h2 className="mt-5 text-3xl text-brand-navy">{founder.name}</h2>
          <p className="text-slate-600">{founder.role}</p>
        </div>

        <div>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-700">
            {founder.bio.map((p) => <p key={p}>{p}</p>)}
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {founder.facts.map(([k, v]) => (
              <div key={k} className="bg-white p-5">
                <dt className="text-sm text-slate-500">{k}</dt>
                <dd className="mt-1 font-semibold text-brand-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-12 text-3xl text-brand-navy">What I work with</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {founder.skills.map((s) => (
              <li key={s} className="flex items-center gap-2 font-medium">
                <span className="h-2 w-2 bg-brand-red" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-red">Get a free quote</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-outline">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-4xl text-brand-navy sm:text-5xl">Inside the shop</h2>
          <p className="mt-3 max-w-xl text-slate-600">Where it all happens in {site.location}. Walk in any time during opening hours.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {shopPhotos.map((p) => (
              <figure key={p.src}>
                <Img src={p.src} alt={p.caption} className="aspect-[4/3] w-full rounded-lg object-cover" />
                <figcaption className="mt-2 text-sm text-slate-600">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}