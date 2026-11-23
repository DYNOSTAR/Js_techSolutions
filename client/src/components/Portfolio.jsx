import { Link } from 'react-router-dom';
import { projects } from '../config/site.js';
import Img from './Img.jsx';

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="max-w-xl text-4xl text-brand-navy sm:text-5xl">Our work</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Websites, systems and repairs we have delivered, built for Kenyan and wider African markets.
            </p>
          </div>
          <Link to="/portfolio" className="btn-outline">View all work</Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} to={`/portfolio?project=${p.slug}`} className="group block">
              <div className="overflow-hidden rounded-lg bg-slate-100">
                <Img src={p.images[0]} alt={p.title} className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-sm font-semibold text-brand-blue">{p.category}</p>
              <h3 className="mt-1 text-2xl text-brand-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}