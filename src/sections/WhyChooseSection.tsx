import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Award, Layers } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Lokasi Strategis',
    description:
      'Billboard dan media promosi kami ditempatkan di titik-titik strategis Bukittinggi dengan traffic tertinggi untuk memaksimalkan exposure brand Anda.',
  },
  {
    icon: Award,
    title: 'Kualitas Premium',
    description:
      'Material berkualitas tinggi dan pencetakan dengan resolusi tinggi memastikan iklan Anda tampil profesional dan tahan lama di segala kondisi cuaca.',
  },
  {
    icon: Layers,
    title: 'Pelayanan Lengkap',
    description:
      'Dari konsep desain, produksi, hingga instalasi — tim kami menangani setiap aspek periklanan outdoor Anda dengan profesionalisme.',
  },
];

export default function WhyChooseSection() {
  const cardsRef = useScrollReveal<HTMLDivElement>({
    y: 40,
    stagger: 0.15,
    duration: 0.8,
  });

  return (
    <section className="bg-brand-light-gray py-20 border-b border-brand-border-gray">
      <div className="container-main">
        <div className="mb-14 text-center md:text-left max-w-[720px]">
          <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
            MENGAPA KAMI
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary leading-tight">
            Solusi Periklanan yang Memberikan Hasil Nyata
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-brand-border-gray rounded p-8 flex flex-col items-start text-left hover:shadow-card-hover hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-brand-light-gray rounded-sm mb-6">
                <reason.icon
                  size={28}
                  className="text-brand-primary"
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-brand-text-primary">
                {reason.title}
              </h3>
              <p className="mt-3 text-base text-brand-text-secondary leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
