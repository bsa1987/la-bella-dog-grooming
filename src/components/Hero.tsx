import { Phone, CalendarDays } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautifully groomed dog at La Bella Dog Grooming Swansea"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-xl">
          <p className="font-serif italic text-blush-300 text-base mb-4 text-shadow tracking-wide">
            Swansea's boutique dog grooming salon
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] text-shadow mb-6">
            Professional<br />
            <span className="text-blush-300">Dog Grooming</span><br />
            in Swansea
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 text-shadow">
            Caring, professional grooming where every dog is treated like family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('appointment')}
              className="inline-flex items-center justify-center gap-2.5 bg-blush-500 hover:bg-blush-600 text-white px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              <CalendarDays size={17} />
              Request Appointment
            </button>
            <a
              href="tel:07912345678"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/70 text-white hover:bg-white hover:text-charcoal-900 px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300"
            >
              <Phone size={17} />
              07912 345678
            </a>
          </div>
        </div>
      </div>

      {/* Bottom phone strip – mobile only */}
      <a
        href="tel:07912345678"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden flex items-center gap-2.5 bg-blush-500/90 backdrop-blur-sm text-white px-7 py-3.5 rounded-full shadow-2xl text-sm font-medium"
      >
        <Phone size={15} />
        Tap to Call – 07912 345678
      </a>
    </section>
  );
}
