import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Kreasi Advertising membantu brand Yamaha kami menjangkau audiens yang lebih luas di Bukittinggi. Billboard yang mereka pasang di lokasi strategis memberikan exposure luar biasa.',
    author: 'Ahmad Rizal',
    role: 'Marketing Manager, Yamaha',
  },
  {
    quote:
      'Pelayanan profesional dan hasil yang memuaskan. Tim Kreasi Advertising sangat membantu dari desain hingga instalasi. Highly recommended!',
    author: 'Dewi Sartika',
    role: 'Brand Director, Miss Glam',
  },
  {
    quote:
      'Kami telah bekerja sama dengan Kreasi Advertising selama 3 tahun. Kualitas billboard dan perawatan yang mereka berikan selalu terbaik.',
    author: 'Budi Santoso',
    role: 'Regional Manager, Indosat',
  },
  {
    quote:
      'Harga kompetitif dengan kualitas premium. Billboard Konvermex kami selalu terlihat prima berkat perawatan berkala dari tim Kreasi.',
    author: 'Siti Rahmah',
    role: 'CEO, Konvermex',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const cardRef = useScrollReveal<HTMLDivElement>({ scale: 0.95, y: 30 });

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-brand-light-gray py-20 border-b border-brand-border-gray">
      <div className="container-main">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.15em] text-brand-accent font-bold">
            TESTIMONI
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-extrabold text-brand-text-primary leading-tight uppercase">
            Apa Kata Klien Kami
          </h2>
        </div>

        <div ref={cardRef} className="max-w-[800px] mx-auto">
          <div className="relative bg-white border border-brand-border-gray rounded-lg p-8 sm:p-12 shadow-card text-center">
            <Quote
              size={44}
              className="mx-auto text-brand-accent mb-6"
              strokeWidth={1.5}
            />

            <div className="min-h-[140px] sm:min-h-[120px] flex items-center justify-center">
              <p
                key={active}
                className="text-lg sm:text-xl text-brand-text-primary leading-relaxed italic font-body animate-fade-in-up"
              >
                "{testimonials[active].quote}"
              </p>
            </div>

            <div className="mt-8 border-t border-brand-border-gray pt-6 inline-block">
              <p className="text-base font-bold text-brand-text-primary font-heading uppercase tracking-wide">
                {testimonials[active].author}
              </p>
              <p className="text-sm text-brand-text-secondary font-body mt-1">
                {testimonials[active].role}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === active
                    ? 'bg-brand-accent w-8'
                    : 'bg-brand-border-gray hover:bg-brand-medium-gray'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
