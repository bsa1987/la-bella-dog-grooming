import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book', href: '#appointment' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="flex items-center gap-3 focus:outline-none">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled ? 'bg-blush-100' : 'bg-white/20'}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9 2 6.5 4 6.5 4C4.5 5.5 3 8 3 10.5C3 14.5 6 17.5 9 18.5C9 18.5 10 22 12 22C14 22 15 18.5 15 18.5C18 17.5 21 14.5 21 10.5C21 8 19.5 5.5 17.5 4C17.5 4 15 2 12 2Z" fill={scrolled ? '#c4768a' : 'white'} fillOpacity="0.9"/>
              <circle cx="9" cy="9" r="1.5" fill={scrolled ? '#7a4e3e' : 'rgba(255,255,255,0.7)'}/>
              <circle cx="15" cy="9" r="1.5" fill={scrolled ? '#7a4e3e' : 'rgba(255,255,255,0.7)'}/>
              <path d="M9.5 13.5C10.5 14.5 13.5 14.5 14.5 13.5" stroke={scrolled ? '#7a4e3e' : 'rgba(255,255,255,0.8)'} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className={`font-serif font-semibold text-lg leading-tight transition-colors ${scrolled ? 'text-charcoal-900' : 'text-white'}`}>
              La Bella
            </div>
            <div className={`text-[10px] uppercase tracking-widest transition-colors ${scrolled ? 'text-blush-500' : 'text-white/80'}`}>
              Dog Grooming
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-blush-500 focus:outline-none ${
                scrolled ? 'text-charcoal-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:07912345678" className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-charcoal-700 hover:text-blush-500' : 'text-white/90 hover:text-white'}`}>
            <Phone size={15} />
            07912 345678
          </a>
          <button
            onClick={() => handleNav('#appointment')}
            className="btn-primary text-xs px-5 py-2.5"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors ${scrolled ? 'text-charcoal-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blush-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 text-charcoal-800 text-sm font-medium hover:bg-blush-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-blush-100 space-y-2">
              <a
                href="tel:07912345678"
                className="flex items-center gap-2 px-4 py-3 text-blush-600 font-medium text-sm"
              >
                <Phone size={15} /> 07912 345678
              </a>
              <button
                onClick={() => handleNav('#appointment')}
                className="btn-primary w-full justify-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
