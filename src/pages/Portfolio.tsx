import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const categories = ['Semua', 'Billboard', 'Baliho', 'Spanduk', 'Neon Box', 'Street Sign'];

const portfolioItems = [
  {
    image: '/images/portfolio-indosat.jpg',
    client: 'Street Sign Indosat',
    location: 'Jl. Raya Padang Panjang - Bukittinggi, Belakang Balok, Kec. Aur Birugo Tigo Baleh, Kota Bukittinggi',
    category: 'Street Sign',
    tag: 'Featured',
  },
  {
    image: '/images/portfolio-yamaha.jpg',
    client: 'Billboard Yamaha',
    location: 'Jl. Raya Padang Panjang - Bukittinggi 92, Taluak Ampek Suku, Kec. Banuhampu, Kabupaten Agam',
    category: 'Billboard',
    tag: 'Popular',
  },
  {
    image: '/images/portfolio-missglam.jpg',
    client: 'Billboard Miss Glam',
    location: 'Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam',
    category: 'Billboard',
    tag: 'New',
  },
  {
    image: '/images/portfolio-konvermex.jpg',
    client: 'Billboard Konvermex',
    location: 'Jl. Raya Padang Panjang - Bukittinggi, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam',
    category: 'Billboard',
    tag: 'Featured',
  },
  {
    image: '/images/portfolio-oxygen.jpg',
    client: 'Billboard Oxygen',
    location: 'Jl. Raya Padang Panjang - Bukittinggi 90-92, Ladang Laweh, Kec. Banuhampu, Kabupaten Agam',
    category: 'Billboard',
    tag: 'Popular',
  },
  {
    image: '/images/service-billboard.jpg',
    client: 'Billboard Premium',
    location: 'Jl. Raya Padang Panjang - Bukittinggi, Lokasi Strategis',
    category: 'Billboard',
    tag: 'Featured',
  },
  {
    image: '/images/service-neonbox.jpg',
    client: 'Neon Box Retail',
    location: 'Jl. Adinegoro, Bukittinggi',
    category: 'Neon Box',
    tag: 'New',
  },
  {
    image: '/images/about-process.jpg',
    client: 'Baliho Campaign',
    location: 'Jl. Raya Bukittinggi - Padang',
    category: 'Baliho',
    tag: 'Popular',
  },
];

export default function Portfolio() {
  useSEO({
    title: 'Portfolio Hasil Kerja Kami - Jasa Billboard & Baliho',
    description: 'Lihat berbagai proyek periklanan outdoor yang telah kami selesaikan untuk klien ternama seperti Yamaha, Indosat, Miss Glam, dan lainnya di Bukittinggi.',
  });

  const [activeFilter, setActiveFilter] = useState('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'Semua'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const gridRef = useScrollReveal<HTMLDivElement>({
    y: 40,
    stagger: 0.08,
    duration: 0.8,
  });

  const openLightbox = useCallback((index: number) => {
    const actualIndex = portfolioItems.findIndex(
      (item) => item === filteredItems[index]
    );
    setLightboxIndex(actualIndex >= 0 ? actualIndex : index);
  }, [filteredItems]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % portfolioItems.length);
    }
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + portfolioItems.length) % portfolioItems.length
      );
    }
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-brand-primary-dark pt-[72px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-billboard.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary-dark/85" />
          <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto py-12">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold font-body">
            PORTFOLIO
          </span>
          <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-tight uppercase">
            Portfolio Proyek Kami
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-[540px] mx-auto font-body">
            Lihat berbagai proyek periklanan outdoor yang telah kami kerjakan
            untuk klien di Bukittinggi dan sekitarnya.
          </p>
        </div>
      </section>

      {/* Location Ticker Marquee */}
      <div className="bg-brand-accent py-4 overflow-hidden border-y border-brand-accent-dark/20 relative z-10">
        <div className="flex shrink-0 animate-marquee items-center gap-12 whitespace-nowrap">
          {['BUKITTINGGI', 'PADANG PANJANG', 'AGAM REGENCY', 'WEST SUMATRA'].map((loc, i) => (
            <span key={i} className="text-sm font-heading font-black uppercase tracking-[0.2em] text-brand-primary-dark flex items-center gap-4">
              {loc} <span className="text-brand-primary-dark">★</span>
            </span>
          ))}
          {['BUKITTINGGI', 'PADANG PANJANG', 'AGAM REGENCY', 'WEST SUMATRA'].map((loc, i) => (
            <span key={`dup-${i}`} className="text-sm font-heading font-black uppercase tracking-[0.2em] text-brand-primary-dark flex items-center gap-4">
              {loc} <span className="text-brand-primary-dark">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-brand-primary-dark border-b border-white/10 py-4 shadow-navbar">
        <div className="container-main">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-brand-accent text-brand-primary-dark shadow-glow'
                    : 'bg-white/5 border border-white/15 text-white hover:bg-white/15 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="bg-[#F8FAFC] py-16 border-b border-brand-border-gray">
        <div className="container-main">
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <div
                key={`${item.client}-${index}`}
                className="group bg-white border border-brand-border-gray rounded-lg overflow-hidden shadow-card hover:shadow-card-hover hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-primary-dark/10">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {item.tag && (
                      <span className="px-2.5 py-1 bg-brand-primary-dark text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                        {item.tag}
                      </span>
                    )}
                    <span className="px-2.5 py-1 bg-brand-accent text-brand-primary-dark text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/80 via-brand-primary-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-left w-full">
                      <span className="text-xs text-brand-accent font-bold uppercase tracking-wider font-body">
                        Lihat Detail &rarr;
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-left border-t border-brand-border-gray">
                  <h3 className="text-xl font-bold text-brand-text-primary uppercase tracking-wide font-heading">
                    {item.client}
                  </h3>
                  <p className="text-sm text-brand-text-secondary font-body mt-2 leading-relaxed">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row banner */}
      <section className="bg-brand-primary-dark py-14 border-b border-[#0E131F] relative overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        <div className="relative z-10 container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-brand-accent font-heading">500+</span>
              <span className="block mt-2 text-xs font-bold text-white/70 uppercase tracking-widest font-body">Projects Completed</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-brand-accent font-heading">120+</span>
              <span className="block mt-2 text-xs font-bold text-white/70 uppercase tracking-widest font-body">Active Billboards</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-brand-accent font-heading">15</span>
              <span className="block mt-2 text-xs font-bold text-white/70 uppercase tracking-widest font-body">Years Experience</span>
            </div>
            <div>
              <span className="block text-4xl sm:text-5xl font-black text-brand-accent font-heading">100%</span>
              <span className="block mt-2 text-xs font-bold text-white/70 uppercase tracking-widest font-body">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        <div className="relative z-10 container-main text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-wider leading-tight">
            Ingin Proyek Anda Mendominasi Jalanan?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-[640px] mx-auto font-body">
            Konsultasikan kebutuhan periklanan Anda dengan tim kami. Dapatkan analisis titik lokasi terbaik secara gratis.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-brand-primary-dark text-sm font-bold uppercase tracking-[0.05em] rounded hover:bg-brand-accent-dark transition-all duration-300 hover:scale-[1.02] shadow-glow"
            >
              Mulai Konsultasi Sekarang
            </Link>
            <a
              href="#download-pricelist"
              onClick={(e) => {
                e.preventDefault();
                alert('Price list download request received! Kami akan segera mengirimkan daftar harga ke email Anda.');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white text-sm font-bold uppercase tracking-[0.05em] rounded hover:bg-white hover:text-brand-primary transition-all duration-300"
            >
              <Download size={16} />
              Download Price List
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-primary-dark/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-brand-accent transition-colors z-10 p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-brand-accent transition-colors z-10 p-2 bg-brand-primary-dark/50 rounded-sm border border-white/5"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-brand-accent transition-colors z-10 p-2 bg-brand-primary-dark/50 rounded-sm border border-white/5"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="max-w-[90vw] max-h-[90vh] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-brand-primary-dark border border-white/10 p-3 rounded-lg shadow-image max-w-full">
              <img
                src={portfolioItems[lightboxIndex].image}
                alt={portfolioItems[lightboxIndex].client}
                className="max-w-full max-h-[70vh] object-contain rounded-sm"
              />
            </div>
            <div className="text-center mt-6 max-w-[640px] mx-auto px-4">
              <span className="px-2.5 py-1 bg-brand-accent text-brand-primary-dark text-xs font-bold rounded-sm uppercase tracking-wider font-body inline-block">
                {portfolioItems[lightboxIndex].category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading uppercase tracking-wide mt-3">
                {portfolioItems[lightboxIndex].client}
              </h3>
              <p className="text-sm text-white/60 font-body mt-2 leading-relaxed">
                {portfolioItems[lightboxIndex].location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
