export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-4xl text-brand-navy sm:text-5xl">Built in Karatina, for Kenyan businesses</h2>
        <div className="max-w-2xl space-y-5 leading-relaxed text-slate-700">
          <p>
            JS Tech Solutions Ltd was founded by a Computer Science graduate of Karatina University who also runs a working repair, printing and scanning shop. That daily contact with real customers shapes how we build: practical, fast on mobile data, and easy for your team to use.
          </p>
          <p>
            We are growing from a trusted local shop into a full technology partner. That means websites, custom systems, ongoing maintenance and honest IT advice, delivered by people you can walk in and talk to.
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-2">
            {['Clear quotes before work starts', 'M-Pesa and WhatsApp friendly', 'Local support you can visit', 'Plain language, no jargon'].map((t) => (
              <li key={t} className="flex items-center gap-2 font-medium text-brand-ink">
                <span className="h-2 w-2 bg-brand-red" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
