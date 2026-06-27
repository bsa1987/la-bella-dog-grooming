import { Phone, CalendarDays } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-dog.jpg"
          alt="Beautifully groomed dog at La Bella Dog Grooming Swansea"
          className="w-full h-full object-cover object-right"
          loading="eager"
        />

        {/* Left dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-lg pt-16">

          {/* Logo */}
          <img
            src="/Labella.png"
            alt="La Bella Dog Grooming"
            className="w-56 md:w-72 mb-8 drop-shadow-2xl select-none"
          />

          <p className="font-serif italic text-blush-300 text-base md:text-lg mb-4">
            Swansea's boutique dog grooming salon
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-2xl">
            Professional
            <br />
            <span className="text-blush-300">Dog Grooming</span>
            <br />
            in Swansea
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            Caring, professional grooming where every dog is treated like
            family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
              onClick={() => scrollTo('appointment')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blush-500 hover:bg-blush-600 px-8 py-4 text-white font-medium shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CalendarDays size={18} />
              Request Appointment
            </button>

            <a
              href="tel:07912345678"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-white hover:bg-white hover:text-charcoal-900 transition-all duration-300"
            >
              <Phone size={18} />
              07912 345678
            </a>

          </div>
        </div>
      </div>

      {/* Mobile Call Button */}
      <a
        href="tel:07912345678"
        className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 rounded-full bg-blush-500 px-6 py-3 text-white shadow-2xl"
      >
        <Phone size={16} />
        Tap to Call
      </a>
    </section>
  );
}
