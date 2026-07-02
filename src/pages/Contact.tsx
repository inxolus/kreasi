import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
} from 'lucide-react';

export default function Contact() {
  useSEO({
    title: 'Hubungi Kami - Konsultasi Periklanan Gratis',
    description: 'Hubungi tim Kreasi Advertising untuk konsultasi gratis periklanan outdoor Anda. Hubungi via form website, email, telepon, atau chat WhatsApp.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useScrollReveal<HTMLDivElement>({ y: 30 });
  const infoRef = useScrollReveal<HTMLDivElement>({ y: 30 });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-brand-primary-dark pt-[72px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-fallback.jpg"
            alt="Contact Kreasi Advertising"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary-dark/85" />
          <div className="absolute inset-0 bg-hex-pattern opacity-10" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto py-12">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-accent font-bold font-body">
            GET IN TOUCH
          </span>
          <h1 className="mt-4 font-heading text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-tight uppercase">
            Hubungi <span className="text-brand-accent">Kami</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-[540px] mx-auto font-body">
            Siap untuk mulai beriklan? Tim kami siap membantu Anda memilih lokasi terbaik untuk kampanye visual yang tak terlupakan.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="bg-brand-light-gray py-20 border-b border-brand-border-gray">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Contact Detail Card */}
            <div ref={infoRef} className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-brand-primary-dark border border-white/5 rounded-lg p-8 text-white flex-1 flex flex-col justify-between shadow-image text-left relative overflow-hidden">
                <div className="absolute inset-0 bg-hex-pattern opacity-5" />
                
                {/* Header */}
                <div className="relative z-10">
                  <h2 className="font-heading text-2xl font-black uppercase tracking-wider text-brand-accent border-b border-white/10 pb-4 mb-6">
                    Detail Kontak
                  </h2>

                  {/* Info List */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white/5 border border-white/10 rounded-sm mt-0.5">
                        <MapPin size={18} className="text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider font-body block">
                          Alamat Kantor
                        </span>
                        <span className="text-sm sm:text-base text-white/90 block mt-1 font-body leading-relaxed">
                          Jl. Raya Padang Panjang - Bukittinggi, Belakang Balok, Kec. Aur Birugo Tigo Baleh, Kota Bukittinggi, Sumatera Barat 26181.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white/5 border border-white/10 rounded-sm mt-0.5">
                        <Phone size={18} className="text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider font-body block">
                          WhatsApp
                        </span>
                        <a
                          href="https://wa.me/620752700000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base text-brand-accent font-bold hover:underline block mt-1 font-body"
                        >
                          0852-7402-3195
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white/5 border border-white/10 rounded-sm mt-0.5">
                        <Mail size={18} className="text-brand-accent" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider font-body block">
                          Email Resmi
                        </span>
                        <a
                          href="mailto:kontakt@kreasiadvertising.id"
                          className="text-sm sm:text-base text-white/90 hover:text-brand-accent block mt-1 font-body"
                        >
                          kontakt@kreasiadvertising.id
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative image within card bottom */}
                <div className="mt-8 border-t border-white/10 pt-6 relative z-10">
                  <div className="rounded overflow-hidden border border-white/10 aspect-[21/9]">
                    <img
                      src="/images/about-process.jpg"
                      alt="Kreasi Bukittinggi Office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-right text-[9px] font-bold text-white/30 uppercase tracking-widest mt-2 font-body">
                    Kreasi Bukittinggi
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Kirim Pesan Form */}
            <div ref={formRef} className="lg:col-span-7">
              <div className="bg-white border border-brand-border-gray rounded-lg p-8 sm:p-10 shadow-card text-left h-full flex flex-col justify-center">
                <h2 className="font-heading text-2xl font-black uppercase tracking-wide text-brand-primary-dark mb-6">
                  Kirim Pesan
                </h2>

                {submitted ? (
                  <div className="bg-brand-light-gray border border-brand-border-gray rounded-lg p-10 text-center my-auto" id="contact-success-message">
                    <CheckCircle
                      size={48}
                      className="mx-auto text-brand-primary mb-4"
                    />
                    <h3 className="text-2xl font-bold text-brand-text-primary font-heading uppercase">
                      Terima Kasih!
                    </h3>
                    <p className="mt-2 text-brand-text-secondary font-body">
                      Pesan Anda telah terkirim. Tim marketing kami akan menghubungi Anda segera.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold text-brand-text-primary uppercase tracking-wider mb-2 font-body">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          id="contact-name"
                          className="w-full px-4 py-3 bg-[#F8FAFC] border border-brand-border-gray rounded text-sm font-body focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/10 outline-none transition-all"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="block text-xs font-bold text-brand-text-primary uppercase tracking-wider mb-2 font-body">
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          id="contact-company"
                          className="w-full px-4 py-3 bg-[#F8FAFC] border border-brand-border-gray rounded text-sm font-body focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/10 outline-none transition-all"
                          placeholder="Perusahaan (Opsional)"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold text-brand-text-primary uppercase tracking-wider mb-2 font-body">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          required
                          id="contact-phone"
                          className="w-full px-4 py-3 bg-[#F8FAFC] border border-brand-border-gray rounded text-sm font-body focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/10 outline-none transition-all"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-bold text-brand-text-primary uppercase tracking-wider mb-2 font-body">
                          Layanan Yang Diminati
                        </label>
                        <select
                          id="contact-service"
                          className="w-full px-4 py-3 bg-[#F8FAFC] border border-brand-border-gray rounded text-sm font-body focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/10 outline-none transition-all bg-white"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Pilih Layanan...
                          </option>
                          <option value="billboard">Billboard</option>
                          <option value="baliho">Baliho</option>
                          <option value="spanduk">Spanduk</option>
                          <option value="neonbox">Neon Box</option>
                          <option value="streetsign">Street Sign</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold text-brand-text-primary uppercase tracking-wider mb-2 font-body">
                        Pesan Anda
                      </label>
                      <textarea
                        rows={4}
                        required
                        id="contact-message"
                        className="w-full px-4 py-3 bg-[#F8FAFC] border border-brand-border-gray rounded text-sm font-body focus:border-brand-primary focus:ring-[3px] focus:ring-brand-primary/10 outline-none transition-all resize-none"
                        placeholder="Ceritakan kebutuhan iklan Anda..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      id="contact-form-submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-primary text-white text-xs font-bold uppercase tracking-[0.1em] rounded hover:bg-brand-primary-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm font-heading"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            id="contact-spinner-svg"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Mengirim Permintaan...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Kirim Permintaan Konsultasi
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[480px] bg-brand-primary-dark">
        <div className="absolute inset-0 bg-brand-primary-dark/40 z-10 pointer-events-none" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7650876728344!2d100.39342047599295!3d-0.29597203534767524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd5387fc7084d49%3A0x94a4f2a134dfe752!2sKreasi%20Advertising!5e0!3m2!1sid!2sid!4v1782961732017!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(90%) brightness(90%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"                   
          title="Lokasi Kreasi Advertising"
          className="relative z-0"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-brand-primary-dark/95 border border-brand-accent p-6 rounded shadow-image text-center max-w-[340px]">
          <span className="inline-block px-2.5 py-1 bg-brand-accent text-brand-primary-dark text-[9px] font-black uppercase tracking-wider rounded-sm mb-3">
            LOKASI KAMI
          </span>
          <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">
            Kantor Bukittinggi
          </h4>
          <p className="text-xs text-white/60 font-body mt-2 leading-relaxed">
            Jl. Raya Padang Panjang - Bukittinggi, Belakang Balok, Sumatera Barat
          </p>
          <a
            href="https://maps.app.goo.gl/gNdnvuD6ZepKhoZ47"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xs font-bold text-brand-accent hover:underline font-body uppercase tracking-wider"
          >
            Buka di Google Maps &rarr;
          </a>
        </div>
      </section>

      {/* Stats Section (Bottom row from screenshot) */}
      <section className="bg-brand-primary py-12 text-white border-b border-brand-primary-dark">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0">
              <span className="block text-3xl font-black text-brand-accent font-heading">100+</span>
              <span className="block mt-1.5 text-xs font-bold uppercase tracking-wider font-body text-white/70">Lokasi Strategis</span>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-white/10 py-6 sm:py-0">
              <span className="block text-3xl font-black text-brand-accent font-heading">10+ Tahun</span>
              <span className="block mt-1.5 text-xs font-bold uppercase tracking-wider font-body text-white/70">Pengalaman Industri</span>
            </div>
            <div className="pt-6 sm:pt-0">
              <span className="block text-3xl font-black text-brand-accent font-heading">24/7</span>
              <span className="block mt-1.5 text-xs font-bold uppercase tracking-wider font-body text-white/70">Support & Monitoring</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
