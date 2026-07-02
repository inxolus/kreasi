import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  Monitor,
  Image,
  Flag,
  Lightbulb,
  Signpost,
  MoreHorizontal,
  Check,
  MessageCircle,
  Palette,
  Wrench,
  Truck,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    number: '01',
    title: 'Billboard',
    description:
      'Billboard besar di lokasi strategis dengan visibilitas tinggi untuk brand awareness maksimal. Papan iklan yang kokoh dan tahan lama dengan pencetakan berkualitas tinggi.',
    image: '/images/service-billboard.jpg',
    features: ['Lokasi premium', 'Ukuran fleksibel', 'Desain profesional', 'Perawatan berkala'],
  },
  {
    icon: Image,
    number: '02',
    title: 'Baliho',
    description:
      'Media promosi besar dengan daya tarik visual tinggi. Baliho kami menggunakan struktur kuat dan material tahan cuaca untuk memastikan iklan Anda terlihat jelas dari jauh.',
    image: '/images/hero-billboard.jpg',
    features: ['Struktur kuat', 'Tahan cuaca', 'Cetak HD', 'Instalasi cepat'],
  },
  {
    icon: Flag,
    number: '03',
    title: 'Spanduk & Banner',
    description:
      'Solusi fleksibel untuk campaign jangka pendek. Spanduk kami produksi cepat dengan harga ekonomis, cocok untuk promo, event, dan campaign marketing sementara.',
    image: '/images/hero-fallback.jpg',
    features: ['Harga ekonomis', 'Produksi cepat', 'Mudah dipasang', 'Banyak ukuran'],
  },
  {
    icon: Lightbulb,
    number: '04',
    title: 'Neon Box',
    description:
      'Neon box yang bersinar terang, ideal untuk branding toko dan bisnis Anda 24/7. Menggunakan teknologi LED hemat energi dengan desain kustom sesuai kebutuhan.',
    image: '/images/service-neonbox.jpg',
    features: ['LED hemat energi', 'Desain kustom', 'Tahan lama', 'Perawatan minimal'],
  },
  {
    icon: Signpost,
    number: '05',
    title: 'Street Sign',
    description:
      'Street sign branding yang menarik di lokasi-lokasi premium Bukittinggi. Dengan ijin lengkap dan desain profesional untuk visibilitas maksimal.',
    image: '/images/portfolio-indosat.jpg',
    features: ['Lokasi strategis', 'Ijin lengkap', 'Desain menarik', 'Visibilitas tinggi'],
  },
  {
    icon: MoreHorizontal,
    number: '06',
    title: 'Media Promosi Lainnya',
    description:
      'Konsultasikan kebutuhan advertising kustom Anda dengan tim kami. Kami siap membantu mewujudkan ide-ide kreatif periklanan Anda.',
    image: '/images/about-process.jpg',
    features: ['Konsultasi gratis', 'Desain kustom', 'Budget fleksibel', 'Tim berpengalaman'],
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    number: '1',
    title: 'Konsultasi',
    description: 'Diskusikan kebutuhan dan budget periklanan Anda dengan tim kami.',
  },
  {
    icon: Palette,
    number: '2',
    title: 'Desain',
    description: 'Tim desainer kami membuat konsep visual yang menarik dan efektif.',
  },
  {
    icon: Wrench,
    number: '3',
    title: 'Produksi',
    description: 'Produksi dengan material berkualitas dan teknologi cetak terbaik.',
  },
  {
    icon: Truck,
    number: '4',
    title: 'Instalasi',
    description: 'Instalasi profesional di lokasi strategis pilihan Anda.',
  },
];

export default function Services() {
  useSEO({
    title: 'Layanan Kami - Jasa Pembuatan Billboard, Baliho & Spanduk',
    description: 'Pilihan lengkap layanan periklanan outdoor di Bukittinggi. Mulai dari billboard premium, baliho strategis, spanduk cepat, hingga neon box toko.',
  });

  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const serviceRefs = services.map(() => useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.8 }));
  const processRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.2 });

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-brand-primary-dark pt-[72px]">
        {/* Background Image with Dark Navy Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-billboard.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary-dark/85" />
          <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto py-12">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold font-body">
            LAYANAN KAMI
          </span>
          <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-tight uppercase">
            Solusi Periklanan Lengkap
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-[540px] mx-auto font-body">
            Dari billboard hingga spanduk, kami menyediakan semua kebutuhan
            periklanan outdoor Anda.
          </p>
        </div>
      </section>

      {/* Horizontal Ticker Marquee */}
      <div className="bg-brand-accent py-4 overflow-hidden border-y border-brand-accent-dark/20 relative z-10">
        <div className="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap">
          {['BILLBOARD', 'BALIHO', 'SPANDUK', 'NEON BOX', 'STREET SIGN', 'MEDIA PROMOSI'].map((item, i) => (
            <span key={i} className="text-sm font-heading font-black uppercase tracking-[0.15em] text-brand-primary-dark flex items-center gap-4">
              {item} <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-dark" />
            </span>
          ))}
          {['BILLBOARD', 'BALIHO', 'SPANDUK', 'NEON BOX', 'STREET SIGN', 'MEDIA PROMOSI'].map((item, i) => (
            <span key={`dup-${i}`} className="text-sm font-heading font-black uppercase tracking-[0.15em] text-brand-primary-dark flex items-center gap-4">
              {item} <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-dark" />
            </span>
          ))}
        </div>
      </div>

      {/* Services Detail */}
      <section className="bg-[#F8FAFC] py-20 border-b border-brand-border-gray">
        <div className="container-main">
          <div ref={headerRef} className="text-center md:text-left mb-3 lg:mb-16 max-w-[640px]">
            <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
              DETAIL LAYANAN
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary uppercase leading-tight">
              Pilih Layanan yang Sesuai untuk Brand Anda
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                ref={serviceRefs[index]}
                className={`py-16 ${
                  index < services.length - 1 ? 'border-b border-brand-border-gray' : ''
                }`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="rounded-lg overflow-hidden shadow-image border border-brand-border-gray bg-white p-2">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full aspect-video object-cover rounded-sm"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-5xl lg:text-6xl font-black text-brand-primary/10 font-heading tracking-tight block">
                      {service.number}
                    </span>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="p-2 bg-brand-primary/5 rounded-sm">
                        <service.icon
                          size={24}
                          className="text-brand-primary"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-brand-text-primary uppercase tracking-wide">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-base sm:text-lg text-brand-text-secondary leading-relaxed font-body">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center gap-3 text-sm font-semibold text-brand-text-primary font-body"
                        >
                          <Check
                            size={16}
                            className="text-brand-accent flex-shrink-0"
                            strokeWidth={3}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Action button */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center mt-8 px-7 py-3.5 bg-brand-primary text-white text-sm font-bold uppercase tracking-[0.05em] rounded hover:bg-brand-primary-light transition-all duration-300 shadow-sm"
                    >
                      Pesan Layanan Ini
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-brand-primary-dark py-20 relative border-b border-[#0E131F]">
        <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        <div className="relative z-10 container-main">
          <div className="text-center md:text-left mb-16 max-w-[640px]">
            <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
              PROSES KERJA
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
              Cara Kami Mewujudkan Kampanye Anda
            </h2>
          </div>

          <div ref={processRef} className="relative max-w-[1080px] mx-auto mt-12">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-brand-accent/20" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center lg:text-center relative group">
                  {/* Number Circle */}
                  <div className="relative z-10 w-14 h-14 mx-auto lg:mx-auto rounded-full border-2 border-brand-accent flex items-center justify-center bg-brand-primary-dark group-hover:scale-105 transition-transform duration-300">
                    <span className="text-lg font-black text-brand-accent font-heading">
                      {step.number}
                    </span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-sm inline-block lg:block lg:w-fit lg:mx-auto mt-6 border border-white/5">
                    <step.icon
                      size={24}
                      className="text-brand-accent"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-white uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed font-body lg:max-w-[220px] lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
