import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Monitor, Image, Flag, Lightbulb, Signpost, MoreHorizontal } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Billboard',
    description:
      'Billboard besar di lokasi strategis dengan visibilitas tinggi untuk brand awareness maksimal.',
  },
  {
    icon: Image,
    title: 'Baliho',
    description:
      'Baliho dengan desain menarik untuk menangkap perhatian pengguna jalan.',
  },
  {
    icon: Flag,
    title: 'Spanduk & Banner',
    description:
      'Spanduk fleksibel untuk promo, event, dan campaign marketing sementara.',
  },
  {
    icon: Lightbulb,
    title: 'Neon Box',
    description:
      'Neon box yang bersinar terang, ideal untuk branding toko dan bisnis Anda.',
  },
  {
    icon: Signpost,
    title: 'Street Sign',
    description:
      'Street sign branding yang menarik di lokasi-lokasi premium Bukittinggi.',
  },
  {
    icon: MoreHorizontal,
    title: 'Media Promosi Lainnya',
    description:
      'Konsultasikan kebutuhan advertising kustom Anda dengan tim kami.',
  },
];

export default function ServicesSection() {
  const cardsRef = useScrollReveal<HTMLDivElement>({
    y: 40,
    stagger: 0.1,
    duration: 0.8,
  });

  return (
    <section className="bg-brand-primary py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hex-pattern opacity-5" />
      <div className="relative z-10 container-main">
        <div className="mb-14 text-left">
          <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
            LAYANAN KAMI
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-white max-w-[640px] leading-tight uppercase">
            Semua yang Anda Butuhkan untuk Periklanan Outdoor
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded p-8 lg:p-10 hover:border-brand-accent/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className="p-3 bg-white/10 rounded-sm mb-6">
                <service.icon
                  size={32}
                  className="text-brand-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="mt-3 text-base text-white/70 leading-relaxed font-body">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand-accent hover:underline transition-all font-body"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
