import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { useState, type FormEvent } from 'react';

const serviceLinks = [
  { label: 'Billboard', path: '/services' },
  { label: 'Baliho', path: '/services' },
  { label: 'Spanduk', path: '/services' },
  { label: 'Neon Box', path: '/services' },
  { label: 'Street Sign', path: '/services' },
  { label: 'Media Promosi', path: '/services' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-brand-primary-dark" id="main-footer">
      {/* Top Section */}
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link to="/" id="footer-logo-link" className="inline-block">
              <img
                src="/images/logo-kreasi.png"
                alt="Kreasi Advertising"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-[280px]">
              Solusi periklanan outdoor terpercaya di Bukittinggi dan sekitarnya
              sejak 2014.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-instagram"
                className="w-9 h-9 flex items-center justify-center rounded bg-white/10 text-white/70 hover:bg-brand-accent hover:text-brand-primary-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-facebook"
                className="w-9 h-9 flex items-center justify-center rounded bg-white/10 text-white/70 hover:bg-brand-accent hover:text-brand-primary-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-linkedin"
                className="w-9 h-9 flex items-center justify-center rounded bg-white/10 text-white/70 hover:bg-brand-accent hover:text-brand-primary-dark transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.05em] mb-5">
              Layanan
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    id={`footer-link-service-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-white/60 hover:text-brand-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.05em] mb-5">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-accent flex-shrink-0 mt-1" />
                <span className="text-sm text-white/60">
                  Jl. Adinegoro No. 14, Bukittinggi, 26138, Sumatera Barat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-accent flex-shrink-0" />
                <span className="text-sm text-white/60">0752 7000 XX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-accent flex-shrink-0" />
                <span className="text-sm text-white/60">info@kreasiadv.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-brand-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="text-sm text-white/60 block">
                    Senin - Jumat: 08:00 - 17:00
                  </span>
                  <span className="text-sm text-white/40">
                    Sabtu - Minggu: Tutup
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.05em] mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Dapatkan update terbaru tentang layanan dan promo kami.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2" id="footer-newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="footer-newsletter-input"
                className="flex-1 px-3 py-2.5 bg-white/10 border border-white/20 rounded text-sm text-white placeholder:text-white/40 focus:border-brand-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-3 py-2.5 bg-brand-accent text-brand-primary-dark rounded hover:bg-brand-accent-dark transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-brand-accent">
                Terima kasih telah berlangganan!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} Kreasi Advertising. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[13px] text-white/40 cursor-pointer hover:text-white/60 transition-colors">
              Privacy Policy
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[13px] text-white/40 cursor-pointer hover:text-white/60 transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
