import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-16">
          <p className="font-serif italic text-blush-400 text-base mb-3">
            Come Find Us
          </p>

          <h2 className="font-serif text-3xl md:text-5xl text-white">
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* LEFT COLUMN */}

          <div className="lg:col-span-2 space-y-5">

            {/* Phone */}

            <a
              href="tel:07583528714"
              className="flex items-center gap-5 bg-charcoal-900 hover:bg-charcoal-800 rounded-2xl p-6 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blush-500 flex items-center justify-center">
                <Phone className="text-white" size={20} />
              </div>

              <div>
                <p className="text-charcoal-400 uppercase tracking-widest text-xs">
                  Call Us
                </p>

                <p className="text-white text-xl font-semibold">
                  07583 528714
                </p>
              </div>
            </a>

            {/* Email */}

            <a
              href="mailto:labelladoggrooming@gmail.com"
              className="flex items-center gap-5 bg-charcoal-900 hover:bg-charcoal-800 rounded-2xl p-6 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blush-500 flex items-center justify-center">
                <Mail className="text-white" size={20} />
              </div>

              <div>
                <p className="text-charcoal-400 uppercase tracking-widest text-xs">
                  Email
                </p>

                <p className="text-white font-medium break-all">
                  labelladoggrooming@gmail.com
                </p>
              </div>
            </a>

            {/* Hours */}

            <div className="bg-charcoal-900 rounded-2xl p-6">

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blush-500 flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>

                <div>
                  <p className="text-charcoal-400 uppercase tracking-widest text-xs">
                    Opening Hours
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-charcoal-300">Monday - Friday</span>
                  <span className="text-white">8:30am - 5:00pm</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-charcoal-300">Saturday</span>
                  <span className="text-white">Appointment Only</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-charcoal-300">Sunday</span>
                  <span className="text-charcoal-500">Closed</span>
                </div>

              </div>

            </div>

            {/* Address */}

            <div className="bg-charcoal-900 rounded-2xl p-6">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-blush-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>

                <div>

                  <p className="text-charcoal-400 uppercase tracking-widest text-xs mb-2">
                    Visit Us
                  </p>

                  <p className="text-white font-semibold">
                    La Bella Grooming
                  </p>

                  <p className="text-charcoal-300 mt-1 leading-relaxed">
                    142 Eaton Road
                    <br />
                    Brynhyfryd
                    <br />
                    Swansea
                    <br />
                    SA5 9JU
                  </p>

                  <a
                    href="https://maps.google.com/?q=142+Eaton+Road+Brynhyfryd+Swansea+SA5+9JU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 bg-blush-500 hover:bg-blush-600 text-white px-5 py-3 rounded-full text-sm font-medium transition"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </a>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="bg-charcoal-900 rounded-2xl p-6 flex gap-8">

              <a
                href="https://facebook.com/labelladoggrooming"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-blush-400 transition"
              >
                <Facebook size={18} />
                Facebook
              </a>

              <a
                href="https://instagram.com/labelladoggrooming"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-blush-400 transition"
              >
                <Instagram size={18} />
                Instagram
              </a>

            </div>

          </div>

          {/* MAP */}

          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-2xl border border-white/10">

            <iframe
              title="La Bella Grooming"
              src="https://www.google.com/maps?q=142+Eaton+Road,+Brynhyfryd,+Swansea+SA5+9JU&z=18&output=embed"
              className="w-full h-[700px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

        {/* CTA */}

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blush-600 to-blush-500 p-10 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="font-serif text-3xl text-white mb-2">
              Ready to Book?
            </h3>

            <p className="text-white/80">
              Give us a call or book online today. We can't wait to meet your dog.
            </p>

          </div>

          <div className="flex gap-4">

            <a
              href="tel:07583528714"
              className="bg-white text-blush-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Call Now
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("appointment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blush-600 transition"
            >
              Book Online
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
