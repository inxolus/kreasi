import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    image: '/images/portfolio-indosat.jpg',
    client: 'Street Sign Indosat',
    location: 'Jl. Raya Padang Panjang - Bukittinggi',
    category: 'Street Sign',
  },
  {
    image: '/images/portfolio-yamaha.jpg',
    client: 'Billboard Yamaha',
    location: 'Jl. Raya Padang Panjang - Bukittinggi 92',
    category: 'Billboard',
  },
  {
    image: '/images/portfolio-missglam.jpg',
    client: 'Billboard Miss Glam',
    location: 'Jl. Raya Padang Panjang - Bukittinggi',
    category: 'Billboard',
  },
  {
    image: '/images/portfolio-konvermex.jpg',
    client: 'Billboard Konvermex',
    location: 'Jl. Raya Padang Panjang - Bukittinggi',
    category: 'Billboard',
  },
  {
    image: '/images/portfolio-oxygen.jpg',
    client: 'Billboard Oxygen',
    location: 'Jl. Raya Padang Panjang - Bukittinggi 90-92',
    category: 'Billboard',
  },
  {
    image: '/images/service-billboard.jpg',
    client: 'Billboard Premium',
    location: 'Lokasi Strategis Bukittinggi',
    category: 'Billboard',
  },
];

export default function PortfolioPreview() {
  const headerRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const gridRef = useScrollReveal<HTMLDivElement>({
    y: 60,
    stagger: 0.1,
    duration: 0.8,
  });

  return (
    <section className="bg-brand-primary-dark py-20 relative border-b border-white/5">
      <div className="container-main">
        <div ref={headerRef} className="text-left">
          <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
            PORTFOLIO KAMI
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-white max-w-[640px] leading-tight uppercase">
            Lihat Hasil Kerja Kami di Jalan-jalan Bukittinggi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-[540px] leading-relaxed font-body">
            Dari billboard besar di jalan utama hingga street sign yang
            eye-catching — kami telah membantu puluhan brand menjangkau audiens
            mereka.
          </p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand-accent hover:underline transition-all font-body"
          >
            Lihat Semua Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-image border border-white/5"
            >
              <img
                src={item.image}
                alt={item.client}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark via-brand-primary-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <span className="inline-block px-2.5 py-1 bg-brand-accent text-brand-primary-dark text-xs font-bold rounded-sm mb-3 font-body uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:-translate-y-0.5 transition-transform duration-300 font-heading">
                  {item.client}
                </h3>
                <p className="text-sm text-white/80 font-body mt-1">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
