import HeroSection from '../sections/HeroSection';
import StatsSection from '../sections/StatsSection';
import ClientMarquee from '../sections/ClientMarquee';
import WhyChooseSection from '../sections/WhyChooseSection';
import PortfolioPreview from '../sections/PortfolioPreview';
import ServicesSection from '../sections/ServicesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Solusi Periklanan Outdoor Terbaik Bukittinggi',
    description: 'Kreasi Advertising menyediakan solusi periklanan outdoor terbaik di Bukittinggi - billboard, baliho, spanduk, neon box, dan media promosi strategis.',
  });

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ClientMarquee />
      <WhyChooseSection />
      <PortfolioPreview />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
