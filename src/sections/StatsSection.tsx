import { useCountUp } from '../hooks/useScrollReveal';

const stats = [
  { value: 10, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 50, suffix: '+', label: 'Lokasi Strategis' },
  { value: 100, suffix: '+', label: 'Klien Puas' },
  { value: 24, suffix: '/7', label: 'Visibilitas' },
];

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const countRef = useCountUp<HTMLSpanElement>(value, 2, suffix);

  return (
    <div className="text-center relative">
      <span
        ref={countRef}
        className="block text-4xl sm:text-5xl font-bold text-brand-accent leading-tight"
      >
        0{suffix}
      </span>
      <span className="block mt-2 text-sm text-white/70 uppercase tracking-[0.1em]">
        {label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-brand-primary-dark py-12 sm:py-16 border-y border-white/5">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatItem
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
