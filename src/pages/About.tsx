import { useScrollReveal } from '../hooks/useScrollReveal';
import { Shield, Lightbulb, Award, Heart, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Kami selalu jujur dan transparan dalam setiap transaksi dan komunikasi dengan klien.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Kami terus mencari cara baru dan kreatif untuk membuat iklan Anda menonjol.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Kami tidak puas dengan yang biasa-biasa saja. Setiap proyek harus menjadi yang terbaik.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    description:
      'Kami memperlakukan kesuksesan bisnis Anda sebagai kesuksesan kami juga.',
  },
];

const milestones = [
  {
    year: '2014',
    title: 'Pendirian Kreasi Advertising',
    description:
      'Dimulai sebagai penyedia jasa spanduk dan banner lokal di Bukittinggi.',
  },
  {
    year: '2016',
    title: 'Ekspansi ke Billboard',
    description: 'Menambahkan layanan billboard sebagai produk unggulan.',
  },
  {
    year: '2018',
    title: 'Portfolio 50+ Lokasi',
    description:
      'Mengelola lebih dari 50 lokasi billboard dan media promosi di Sumatera Barat.',
  },
  {
    year: '2020',
    title: 'Tim Profesional',
    description: 'Membangun tim desainer dan instalator profesional internal.',
  },
  {
    year: '2024',
    title: '100+ Klien',
    description: 'Melayani lebih dari 100 klien dari berbagai industri.',
  },
];

const team = [
  {
    name: 'Andi Wijaya',
    role: 'Founder & CEO',
    bio: 'Pendiri Kreasi Advertising dengan visi membantu bisnis lokal tumbuh melalui periklanan outdoor.',
    image: '/images/about-company.jpg',
  },
  {
    name: 'Rina Susanti',
    role: 'Creative Director',
    bio: 'Bertanggung jawab atas konsep desain kreatif yang menarik dan efektif untuk setiap proyek.',
    image: '/images/service-billboard.jpg',
  },
  {
    name: 'Budi Pratama',
    role: 'Operations Manager',
    bio: 'Mengawasi produksi dan instalasi untuk memastikan kualitas dan ketepatan waktu.',
    image: '/images/about-process.jpg',
  },
];

export default function About() {
  useSEO({
    title: 'Tentang Kami - Profil & Tim Kreasi',
    description: 'Pelajari profil Kreasi Advertising, visi misi, nilai-nilai perusahaan, milestone perjalanan dari tahun 2014, dan tim ahli di balik kesuksesan kami.',
  });

  const storyRef = useScrollReveal<HTMLDivElement>({ y: 40 });
  const imageRef = useScrollReveal<HTMLDivElement>({ x: -40, y: 0, duration: 1 });
  const valuesRef = useScrollReveal<HTMLDivElement>({ y: 40, stagger: 0.15 });
  const milestonesRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.2 });
  const teamRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.15 });

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-brand-primary-dark pt-[72px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fallback.jpg"
            alt="About Kreasi Advertising"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary-dark/85" />
          <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-[840px] mx-auto py-12">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold font-body">
            KREASI ADVERTISING
          </span>
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-[52px] font-black text-white leading-tight uppercase tracking-wide">
            Partner Pertumbuhan Bisnis Anda
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-[540px] mx-auto font-body">
            Membantu brand Anda mendominasi jalan-jalan di Bukittinggi dan Sumatera Barat dengan media luar ruang terbaik.
          </p>
        </div>
      </section>

      {/* Hero Stats Boxes (As shown in screenshot) */}
      <div className="bg-brand-primary-dark py-4 border-y border-white/10 relative z-10">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="px-6 py-3.5 bg-white/5 border border-white/10 rounded flex items-center gap-3">
              <span className="text-xl font-black text-brand-accent font-heading">50+</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-body">Klien Aktif</span>
            </div>
            <div className="px-6 py-3.5 bg-white/5 border border-white/10 rounded flex items-center gap-3">
              <span className="text-xl font-black text-brand-accent font-heading">100+</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-body">Proyek Selesai</span>
            </div>
            <div className="px-6 py-3.5 bg-white/5 border border-white/10 rounded flex items-center gap-3">
              <span className="text-xl font-black text-brand-accent font-heading">TOP</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-body">di Bukittinggi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <section className="bg-white py-20 border-b border-brand-border-gray">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image (Left on desktop) */}
            <div ref={imageRef} className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden shadow-image border border-brand-border-gray bg-brand-light-gray p-2">
                <img
                  src="/images/about-company.jpg"
                  alt="Kreasi Advertising Office"
                  className="w-full aspect-[4/5] object-cover rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text (Right on desktop) */}
            <div ref={storyRef} className="lg:col-span-7 text-left">
              <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
                TENTANG KAMI
              </span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary leading-tight uppercase">
                Mengapa Kami Ada
              </h2>
              <div className="mt-6 space-y-5 text-base sm:text-lg text-brand-text-secondary leading-relaxed font-body">
                <p>
                  Kreasi Advertising didirikan dengan satu misi sederhana:
                  membantu bisnis lokal di Bukittinggi dan sekitarnya tumbuh
                  melalui periklanan outdoor yang efektif dan terjangkau.
                </p>
                <p>
                  Dengan pengalaman lebih dari 10 tahun di industri advertising,
                  kami memahami betul pasar lokal dan lokasi-lokasi strategis
                  yang memberikan exposure terbaik untuk brand Anda.
                </p>
                <p>
                  Kami percaya bahwa setiap bisnis, besar maupun kecil, berhak
                  mendapatkan perhatian. Itulah mengapa kami berkomitmen
                  memberikan layanan berkualitas dengan harga yang kompetitif.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Misi Kami & Creative Strategy (Bento style grid per screenshot) */}
      <section className="bg-brand-light-gray py-20 border-b border-brand-border-gray">
        <div className="container-main">
          <div className="text-left mb-12 max-w-[640px]">
            <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
              MISI KAMI
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary leading-tight uppercase">
              Fokus Utama Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Box 1 - Solusi Promosi */}
            <div className="lg:col-span-7 bg-brand-primary-dark border border-white/5 rounded-lg p-8 sm:p-12 flex flex-col justify-between text-left relative overflow-hidden shadow-image text-white">
              <div className="absolute inset-0 bg-hex-pattern opacity-5" />
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold font-body">
                  KREATIF & EFISIEN
                </span>
                <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-extrabold uppercase leading-tight">
                  Solusi Promosi Efektif & Kreatif
                </h3>
                <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed font-body">
                  Memberikan solusi promosi efektif dengan desain kreatif, kualitas terbaik, dan harga bersahabat. Kami tidak hanya memasang, tapi ikut menjaga kehadiran brand Anda di ruang publik.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-5xl font-black text-white/10 font-heading">01</span>
                <span className="text-xs font-bold text-brand-accent uppercase tracking-wider font-body">Quality Sign Engineering</span>
              </div>
            </div>

            {/* Box 2 - Creative Strategy */}
            <div className="lg:col-span-5 bg-white border border-brand-border-gray rounded-lg p-8 sm:p-12 flex flex-col justify-between text-left shadow-card hover:shadow-card-hover transition-all duration-300">
              <div>
                <div className="p-3 bg-brand-primary/5 rounded-sm inline-block">
                  <Lightbulb size={24} className="text-brand-primary" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-extrabold text-brand-text-primary uppercase tracking-wide">
                  Creative Strategy
                </h3>
                <p className="mt-3 text-sm sm:text-base text-brand-text-secondary leading-relaxed font-body">
                  Penempatan desain yang tepat sesuai target market agar kampanye visual Anda menjadi investasi yang menguntungkan.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-brand-border-gray flex items-center justify-between">
                <span className="text-5xl font-black text-brand-primary/5 font-heading">02</span>
                <Link to="/portfolio" id="about-misi-portfolio-link" className="text-sm font-bold text-brand-primary hover:text-brand-primary-light flex items-center gap-1 font-body">
                  Lihat Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Info Ticker Marquee */}
      <div className="bg-brand-accent py-4 overflow-hidden border-y border-brand-accent-dark/20 relative z-10">
        <div className="flex shrink-0 animate-marquee items-center gap-12 whitespace-nowrap">
          {['HIGH STANDARDS', 'PROFESSIONAL MANAGEMENT', 'DATA ACCURACY', 'GUARANTEED VISIBILITY'].map((item, i) => (
            <span key={i} className="text-sm font-heading font-black uppercase tracking-[0.2em] text-brand-primary-dark flex items-center gap-4">
              {item} <span className="text-brand-primary-dark">★</span>
            </span>
          ))}
          {['HIGH STANDARDS', 'PROFESSIONAL MANAGEMENT', 'DATA ACCURACY', 'GUARANTEED VISIBILITY'].map((item, i) => (
            <span key={`dup-${i}`} className="text-sm font-heading font-black uppercase tracking-[0.2em] text-brand-primary-dark flex items-center gap-4">
              {item} <span className="text-brand-primary-dark">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <section className="bg-white py-20 border-b border-brand-border-gray">
        <div className="container-main">
          <div className="text-left mb-16 max-w-[640px]">
            <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
              NILAI KAMI
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary leading-tight uppercase">
              Apa yang Kami Pegang Teguh
            </h2>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[960px] mx-auto"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-brand-border-gray rounded p-8 sm:p-10 hover:border-brand-primary/20 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
              >
                <div className="p-3 bg-white border border-brand-border-gray rounded-sm mb-6 shadow-xs">
                  <value.icon
                    size={28}
                    className="text-brand-primary"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-text-primary uppercase tracking-wide">
                  {value.title}
                </h3>
                <p className="mt-3 text-base text-brand-text-secondary leading-relaxed font-body">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-brand-light-gray py-20 border-b border-brand-border-gray">
        <div className="container-main">
          <div className="text-left mb-16 max-w-[640px]">
            <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
              PERJALANAN KAMI
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary leading-tight uppercase">
              Milestone Kreasi Advertising
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-brand-primary/20 lg:-translate-x-px" />

            <div ref={milestonesRef} className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-brand-accent border-[3px] border-white shadow-card z-10 -translate-x-1/2 mt-1.5" />

                  {/* Content */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-[45%] text-left ${
                      index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'
                    }`}
                  >
                    <span className="px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-sm uppercase tracking-wider font-body inline-block">
                      {milestone.year}
                    </span>
                    <h3 className="mt-3 font-heading text-xl font-bold text-brand-text-primary uppercase tracking-wide">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-base text-brand-text-secondary font-body leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20 border-b border-brand-border-gray">
        <div className="container-main">
          <div className="text-left mb-16 max-w-[640px]">
            <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
              TIM KAMI
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary leading-tight uppercase">
              Orang-orang di Balik Layanan Terbaik Kami
            </h2>
          </div>

          <div
            ref={teamRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[960px] mx-auto"
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-brand-border-gray rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-light-gray p-2 border-b border-brand-border-gray">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest block font-body">
                      {member.role}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-brand-text-primary uppercase tracking-wide mt-2">
                      {member.name}
                    </h3>
                    <p className="mt-3 text-sm text-brand-text-secondary leading-relaxed font-body">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        <div className="relative z-10 container-main text-center text-white">
          <h2 className="font-heading text-3xl sm:text-4xl font-black uppercase tracking-wider leading-tight">
            Siap Mendominasi Market Anda?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-[640px] mx-auto font-body">
            Hubungi tim ahli kami untuk konsultasi penempatan media outdoor strategis di Bukittinggi dan sekitarnya.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              id="about-cta-contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-brand-primary-dark text-sm font-bold uppercase tracking-[0.05em] rounded hover:bg-brand-accent-dark transition-all duration-300 hover:scale-[1.02] shadow-glow"
            >
              Konsultasi Gratis
            </Link>
            <Link
              to="/portfolio"
              id="about-cta-portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-sm font-bold uppercase tracking-[0.05em] rounded hover:bg-white hover:text-brand-primary transition-all duration-300 font-body"
            >
              Lihat Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
