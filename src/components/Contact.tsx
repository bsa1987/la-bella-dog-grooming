import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <p className="font-serif italic text-blush-400 text-base mb-3">Come Find Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-white">Get in Touch</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="tel:07912345678"
              className="flex items-center gap-4 bg-charcoal-900 hover:bg-charcoal-800 rounded-2xl p-5 transition-colors group"
            >
              <div className="w-11 h-11 bg-blush-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-charcoal-400 text-xs uppercase tracking-widest mb-0.5">Call Us</p>
                <p className="text-white font-medium">07912 345678</p>
              </div>
            </a>

            <a
              href="mailto:labelladoggrooming@gmail.com"
              className="flex items-center gap-4 bg-charcoal-900 hover:bg-charcoal-800 rounded-2xl p-5 transition-colors"
            >
              <div className="w-11 h-11 bg-blush-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className="text-charcoal-400 text-xs uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-white text-sm font-medium">labelladoggrooming@gmail.com</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-charcoal-900 rounded-2xl p-5">
              <div className="w-11 h-11 bg-blush-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-white" />
              </div>
              <div>
                <p className="text-charcoal-400 text-xs uppercase tracking-widest mb-2">Hours</p>
                <div className="space-y-1">
                  {[
                    ['Mon – Fri', '9:00am – 5:00pm'],
                    ['Saturday', '9:00am – 2:00pm'],
                    ['Sunday', 'Closed'],
                  ].map(([day, time]) => (
                    <div key={day} className="flex justify-between gap-6 text-sm">
                      <span className="text-charcoal-300">{day}</span>
                      <span className={time === 'Closed' ? 'text-charcoal-500' : 'text-white'}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-charcoal-900 rounded-2xl p-5">
              <div className="w-11 h-11 bg-blush-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="text-charcoal-400 text-xs uppercase tracking-widest mb-0.5">Location</p>
                <p className="text-white font-medium">Swansea, SA2</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-charcoal-900 rounded-2xl p-5">
              <div className="w-11 h-11 bg-charcoal-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Facebook size={18} className="text-white" />
              </div>
              <div className="flex gap-5">
                <a href="https://www.facebook.com/labelladoggrooming" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-blush-400 transition-colors flex items-center gap-1.5 text-sm">
                  <Facebook size={14} /> Facebook
                </a>
                <a href="https://www.instagram.com/labelladoggrooming" target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-blush-400 transition-colors flex items-center gap-1.5 text-sm">
                  <Instagram size={14} /> Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden min-h-[420px]">
            <iframe
              title="La Bella Dog Grooming Swansea location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19810.7591748932!2d-3.9989898!3d51.6205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ef4e30ab21b7f%3A0x6db49e55e3b1ac22!2sSwansea!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CTA bar */}
        <div className="mt-12 bg-gradient-to-r from-blush-600 to-blush-500 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-white mb-1">Ready to book?</h3>
            <p className="text-white/75 text-sm">Call us or request online — we'd love to meet your dog.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:07912345678"
              className="inline-flex items-center justify-center gap-2 bg-white text-blush-600 hover:bg-blush-50 px-7 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call Now
            </a>
            <button
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
