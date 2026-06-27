import { Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Brand */}

          <div>

            <img
              src="/Labella.png"
              alt="La Bella Dog Grooming"
              className="w-56 mb-5"
            />

            <p className="text-charcoal-400 leading-relaxed text-sm max-w-sm">
              Professional dog grooming in Brynhyfryd, Swansea. Every dog is
              treated with patience, kindness and the highest level of care in a
              calm, welcoming salon.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="https://www.facebook.com/labelladoggrooming"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-charcoal-800 hover:bg-blush-500 flex items-center justify-center transition"
              >
                <Facebook size={18} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/labelladoggrooming"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-charcoal-800 hover:bg-blush-500 flex items-center justify-center transition"
              >
                <Instagram size={18} className="text-white" />
              </a>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="text-white font-serif text-2xl mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4">

              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-charcoal-400 hover:text-blush-400 transition text-base"
                  >
                    {label}
                  </button>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-white font-serif text-2xl mb-6">
              Contact
            </h4>

            <div className="space-y-5 text-sm">

              <a
                href="tel:07583528714"
                className="flex items-center gap-3 text-charcoal-300 hover:text-blush-400 transition"
              >
                <Phone size={16} />
                07583 528714
              </a>

              <a
                href="mailto:labelladoggrooming@gmail.com"
                className="flex items-center gap-3 text-charcoal-300 hover:text-blush-400 transition"
              >
                <Mail size={16} />
                labelladoggrooming@gmail.com
              </a>

              <div className="flex items-start gap-3 text-charcoal-300">

                <MapPin size={16} className="mt-1 flex-shrink-0" />

                <div>
                  142 Eaton Road
                  <br />
                  Brynhyfryd
                  <br />
                  Swansea
                  <br />
                  SA5 9JU
                </div>

              </div>

              <div className="pt-2 text-charcoal-500 leading-7">
                Monday – Friday: 8:30am – 5:00pm
                <br />
                Saturday: Appointment Only
                <br />
                Sunday: Closed
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-charcoal-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-charcoal-500 text-sm">
            © {new Date().getFullYear()} La Bella Dog Grooming. All rights reserved.
          </p>

          <p className="text-charcoal-600 text-sm text-center lg:text-right">
            Professional Dog Grooming • Puppy Grooming • Hand Stripping • Brynhyfryd • Swansea
          </p>

        </div>

      </div>

    </footer>
  );
}
