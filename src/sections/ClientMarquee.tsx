const clients = [
  'Indosat',
  'Yamaha',
  'Miss Glam',
  'Konvermex',
  'Oxygen',
];

export default function ClientMarquee() {
  return (
    <section className="bg-brand-light-gray py-8 overflow-hidden border-b border-brand-border-gray">
      <p className="text-center text-xs uppercase tracking-[0.15em] font-bold text-brand-medium-gray mb-6">
        Dipercaya oleh Brand Terkemuka
      </p>
      <div className="relative flex overflow-hidden bg-brand-accent py-4 border-y border-brand-accent-dark/20 shadow-sm">
        <div className="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="text-xl sm:text-2xl font-heading font-black uppercase tracking-wider text-brand-primary-dark hover:text-brand-primary transition-colors duration-300 cursor-default select-none"
            >
              {client}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap" aria-hidden="true">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <span
              key={`dup-${i}`}
              className="text-xl sm:text-2xl font-heading font-black uppercase tracking-wider text-brand-primary-dark hover:text-brand-primary transition-colors duration-300 cursor-default select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
