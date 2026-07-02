import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Layanan' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'Tentang Kami' },
  { path: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${scrolled
          ? 'bg-brand-primary-dark/95 backdrop-blur-md shadow-navbar'
          : 'bg-brand-primary-dark/70 backdrop-blur-sm'
          }`}
      >
        <div className="container-main w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" id="navbar-logo-link" className="flex items-center gap-2">
            <img
              src="/images/logo-kreasi.png"
              alt="Kreasi Advertising Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`relative text-sm font-semibold uppercase tracking-[0.05em] transition-colors duration-300 hover:text-brand-accent group ${location.pathname === link.path ? 'text-brand-accent' : 'text-white'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[3px] bg-brand-accent transition-all duration-300 ${location.pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <Link
            to="/contact"
            id="navbar-cta-contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-brand-accent text-brand-primary-dark text-sm font-bold uppercase rounded hover:bg-brand-accent-dark transition-all duration-300 hover:scale-[1.02]"
          >
            Hubungi Kami
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            id="navbar-mobile-hamburger"
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          id="navbar-mobile-overlay"
          className="fixed inset-0 z-[60] bg-brand-primary-dark/60"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="navbar-mobile-drawer"
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-brand-primary-dark z-[70] transform transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-white font-heading font-bold text-lg">
            Menu
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            id="navbar-mobile-close"
            className="text-white p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-6 py-4 text-white text-base font-medium transition-colors hover:bg-white/10 ${location.pathname === link.path
                ? 'text-brand-accent border-l-[3px] border-brand-accent'
                : ''
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-6">
            <Link
              to="/contact"
              id="mobile-nav-cta-contact"
              className="block w-full text-center px-6 py-3 bg-brand-accent text-brand-primary-dark text-sm font-bold rounded hover:bg-brand-accent-dark transition-all"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
