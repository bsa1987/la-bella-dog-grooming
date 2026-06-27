import { Phone, CalendarDays } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1739137594820-6d7e65f058d5?auto=format&fit=crop&w=2200&q=80"
          alt="Beautifully groomed dog at La Bella Dog Grooming Swansea"
          className="w-full h-full object-cover object-right"
          loading="eager"
        />

        {/* Darken left side only */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16">

        <div className="max-w-xl">

          {/* Logo */}
          <img
            src="/Labella.png"
            alt="La Bella Dog Grooming"
            className="w-80 md:w-[420px] mb-8 drop-shadow-2xl"
          />

          <p className="font-serif italic text-blush-300 text-lg mb-5">
            Swansea's boutique dog grooming salon
          </p>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-none text-white drop-shadow-2xl">
            Professional
            <br />

            <span className="text-blush-300">
              Dog Grooming
            </span>

            <br />

            in Swansea
          </h1>

          <p className="mt-8 text-xl text-white/90 leading-relaxed max-w-lg">
            Caring, professional grooming where every dog is treated like family.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <button
              onClick={() => scrollTo('appointment')}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-blush-500 hover:bg-blush-600 px-9 py-4 text-white font-medium shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <CalendarDays size={18} />
              Request Appointment
            </button>

            <a
              href="tel:07912345678"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/70 px-9 py-4 text-white hover:bg-white hover:text-black transition-all duration-300"
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
        className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-blush-500 text-white px-7 py-3 rounded-full shadow-2xl flex items-center gap-2"
      >
        <Phone size={16} />
        Tap to Call
      </a>

    </section>
  );
}
