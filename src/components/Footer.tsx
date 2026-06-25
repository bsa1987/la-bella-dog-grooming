import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blush-500/20 rounded-full flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C9 2 6.5 4 6.5 4C4.5 5.5 3 8 3 10.5C3 14.5 6 17.5 9 18.5C9 18.5 10 22 12 22C14 22 15 18.5 15 18.5C18 17.5 21 14.5 21 10.5C21 8 19.5 5.5 17.5 4C17.5 4 15 2 12 2Z" fill="#c4768a" fillOpacity="0.9"/>
                  <circle cx="9" cy="9" r="1.5" fill="rgba(255,255,255,0.6)"/>
                  <circle cx="15" cy="9" r="1.5" fill="rgba(255,255,255,0.6)"/>
                  <path d="M9.5 13.5C10.5 14.5 13.5 14.5 14.5 13.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="font-serif text-white font-semibold">La Bella</div>
                <div className="text-[10px] uppercase tracking-widest text-blush-400">Dog Grooming</div>
              </div>
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-5">
              Professional, caring dog grooming in Swansea. Where every dog is treated like family.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/labelladoggrooming" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-charcoal-800 hover:bg-blush-500 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={16} className="text-charcoal-300" />
              </a>
              <a href="https://www.instagram.com/labelladoggrooming" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-charcoal-800 hover:bg-blush-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={16} className="text-charcoal-300" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-charcoal-400 hover:text-blush-400 text-sm transition-colors focus:outline-none"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="tel:07912345678" className="flex items-center gap-2.5 text-charcoal-400 hover:text-blush-400 text-sm transition-colors">
                <Phone size={14} /> 07912 345678
              </a>
              <a href="mailto:labelladoggrooming@gmail.com" className="flex items-center gap-2.5 text-charcoal-400 hover:text-blush-400 text-sm transition-colors">
                <Mail size={14} /> labelladoggrooming@gmail.com
              </a>
              <p className="text-charcoal-500 text-xs mt-4 leading-relaxed">
                Mon–Fri: 9am–5pm<br />Saturday: 9am–2pm<br />Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-charcoal-500 text-xs">
            &copy; {new Date().getFullYear()} La Bella Dog Grooming, Swansea. All rights reserved.
          </p>
          <p className="text-charcoal-600 text-xs">
            Professional Dog Grooming Swansea · Dog Groomer Swansea · Puppy Grooming Swansea
          </p>
        </div>
      </div>
    </footer>
  );
}
