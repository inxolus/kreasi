import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const billboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    if (labelRef.current) {
      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
    }

    if (lineRef.current) {
      tl.to(
        lineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    if (subRef.current) {
      tl.to(
        subRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    if (descRef.current) {
      tl.to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    if (ctaRef.current) {
      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    if (billboardRef.current) {
      tl.to(
        billboardRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.2)',
        },
        '-=0.8'
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className={cn('relative', 'min-h-[100dvh]', 'flex', 'items-center', 'bg-brand-primary-dark', 'overflow-hidden', 'pt-[72px]')}>
      {/* Background Subtle Hex Pattern & Gradient Overlay */}
      <div className={cn('absolute', 'inset-0', 'bg-hex-pattern', 'opacity-10')} />
      <div className={cn('absolute', 'inset-0', 'bg-gradient-to-tr', 'from-brand-primary-dark', 'via-brand-primary-dark/95', 'to-brand-primary/25')} />

      {/* Main Grid Content */}
      <div className={cn('relative', 'z-10', 'container-main', 'w-full', 'py-12', 'md:py-20')}>
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-12', 'lg:gap-8', 'items-center')}>

          {/* Left Column - Content */}
          <div className={cn('lg:col-span-6', 'flex', 'justify-center', 'md:justify-start', 'flex-col', 'items-start', 'text-left')}>
            {/* Label Badge */}
            <div
              ref={labelRef}
              className={cn('opacity-0', 'translate-y-4', 'mb-6', 'inline-flex', 'items-center', 'gap-2', 'border', 'border-brand-accent', 'px-3.5', 'py-1.5', 'rounded-sm')}
            >
              <span className={cn('w-1.5', 'h-1.5', 'rounded-full', 'bg-brand-accent', 'animate-pulse')} />
              <span className={cn('text-[11px]', 'font-bold', 'uppercase', 'tracking-[0.15em]', 'text-brand-accent', 'font-body')}>
                ADVERTISING OUTDOOR SUMATERA BARAT
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={lineRef}
              className={cn('opacity-0', 'translate-y-4', 'font-heading', 'text-center', 'md:text-left', 'text-4xl', 'sm:', 'sm:text-5xl', 'md:text-6xl', 'font-black', 'text-white', 'leading-[1.1]', 'uppercase')}
            >
              SOLUSI PERIKLANAN<br />
              LUAR RUANG <span className="text-brand-accent">TERBAIK</span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subRef}
              className={cn('opacity-0', 'translate-y-4', 'mt-6', 'text-xl', 'sm:text-2xl', 'font-bold', 'text-white/95', 'uppercase', 'tracking-wide', 'border-l-4', 'border-brand-accent', 'pl-4', 'font-heading')}
            >
              Dilihat Ribuan Orang Setiap Hari
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className={cn('opacity-0', 'translate-y-4', 'mt-5', 'text-base', 'sm:text-lg', 'text-white/70', 'max-w-[540px]', 'leading-relaxed', 'font-body')}
            >
              Kreasi Advertising menyediakan solusi periklanan outdoor terbaik di
              Sumatera Barat. Billboard, spanduk, neon box, dan media promosi
              strategis lainnya.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className={cn('opacity-0', 'translate-y-4', 'mt-8', 'flex', 'flex-col', 'sm:flex-row', 'gap-4', 'w-full', 'sm:w-auto')}
            >
              <Link
                to="/portfolio"
                id="hero-cta-portfolio"
                className={cn('inline-flex', 'items-center', 'justify-center', 'px-8', 'py-4', 'bg-brand-accent', 'text-brand-primary-dark', 'text-sm', 'font-bold', 'uppercase', 'tracking-[0.05em]', 'rounded', 'hover:bg-brand-accent-dark', 'transition-all', 'duration-300', 'hover:scale-[1.02]', 'shadow-glow')}
              >
                Lihat Portfolio
              </Link>
              <Link
                to="/contact"
                id="hero-cta-contact"
                className={cn('inline-flex', 'items-center', 'justify-center', 'px-8', 'py-4', 'border-2', 'border-white', 'text-white', 'text-sm', 'font-bold', 'uppercase', 'tracking-[0.05em]', 'rounded', 'hover:bg-white', 'hover:text-brand-primary', 'transition-all', 'duration-300')}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>

          {/* Right Column - Premium Billboard Mockup */}
          <div className={cn('lg:col-span-5', 'flex', 'justify-center', 'lg:justify-end')}>
            <div
              ref={billboardRef}
              className={cn('opacity-0', 'scale-95', 'w-full', 'max-w-[380px]', 'sm:max-w-[420px]', 'aspect-[3/4]', 'bg-[#0E131F]', 'border', 'border-white/10', 'p-5', 'rounded-lg', 'shadow-image', 'flex', 'flex-col', 'relative')}
            >
              {/* Billboard Poster Area */}
              <div className={cn('flex-1', 'bg-white', 'p-6', 'flex', 'flex-col', 'justify-between', 'border-4', 'border-[#1E293B]', 'relative', 'overflow-hidden', 'group')}>
                {/* Image background in mockup poster to represent billboard */}
                <div className={cn('absolute', 'inset-0', 'opacity-10', 'bg-hex-pattern')} />
                <div className={cn('w-full', 'text-right', 'text-[9px]', 'font-bold', 'text-[#1E293B]/40', 'uppercase', 'tracking-widest', 'font-body')}>
                  Bukittinggi Premium Space
                </div>

                {/* Logo in center */}
                <div className={cn('my-auto', 'py-8', 'flex', 'justify-center', 'items-center')}>
                  <img
                    src="/images/logo-kreasi.png"
                    alt="Kreasi Advertising Logo"
                    className={cn('max-h-[72px]', 'w-auto', 'object-contain', 'transition-transform', 'duration-500', 'group-hover:scale-105')}
                  />
                </div>

                <div className={cn('flex', 'items-end', 'justify-between', 'border-t', 'border-[#1E293B]/20', 'pt-4')}>
                  <span className={cn('text-[10px]', 'font-bold', 'text-brand-primary', 'uppercase', 'tracking-wider')}>
                    Kreasi Advertising
                  </span>
                  <span className={cn('text-[9px]', 'font-medium', 'text-brand-text-secondary')}>
                    24/7 Visibility
                  </span>
                </div>
              </div>

              {/* Billboard Foot / Stand Structure (Brutalist style matching screenshot) */}
              <div className={cn('h-16', 'flex', 'flex-col', 'items-center', 'justify-start', 'mt-[-2px]', 'relative', 'z-0')}>
                {/* Connectors */}
                <div className={cn('flex', 'gap-12')}>
                  <div className={cn('w-2.5', 'h-3', 'bg-[#334155]')} />
                  <div className={cn('w-2.5', 'h-3', 'bg-[#334155]')} />
                </div>
                {/* Pole */}
                <div className={cn('w-6', 'flex-1', 'bg-[#1E293B]', 'border-x', 'border-[#334155]')} />
                {/* Base Plate */}
                <div className={cn('w-24', 'h-2', 'bg-[#0F172A]', 'border', 'border-[#334155]')} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={cn('absolute', 'bottom-8', 'left-1/2', '-translate-x-1/2', 'z-10', 'flex', 'flex-col', 'items-center', 'gap-2')}>
        <span className={cn('text-[10px]', 'uppercase', 'tracking-[0.2em]', 'text-white/50', 'font-bold', 'font-body')}>
          Scroll
        </span>
        <ChevronDown size={18} className={cn('text-white/50', 'animate-bounce-slow')} />
      </div>
    </section>
  );
}
