export default function About() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7210527/pexels-photo-7210527.jpeg?auto=compress&cs=tinysrgb&w=900&q=85"
                alt="Bella, professional dog groomer in Swansea"
                className="w-full h-[520px] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-blush-500 text-white rounded-2xl px-6 py-5 shadow-xl">
              <div className="font-serif text-3xl font-semibold leading-none">10+</div>
              <div className="text-white/85 text-xs mt-1">Years in Swansea</div>
            </div>
            <div className="absolute -top-5 -left-5 w-28 h-28 bg-cream-200 rounded-full -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-3">Meet Your Groomer</p>
            <h2 className="section-heading mb-2">Hi, I'm Bella</h2>
            <p className="font-serif italic text-blush-400 text-lg mb-8">Swansea's dedicated dog grooming specialist</p>

            <div className="space-y-5 text-charcoal-600 leading-relaxed">
              <p>
                I've been grooming dogs in Swansea for over ten years, and my passion for animals has only grown stronger. After qualifying with City & Guilds, I founded La Bella to create the kind of calm, boutique grooming experience I always wished existed for my own dogs.
              </p>
              <p>
                Every dog is treated as an individual — I take the time to understand their personality and any sensitivities before we begin. Whether your dog is nervous, boisterous, young or old, you'll always find a patient, caring groomer here.
              </p>
              <p>
                Your dog's comfort and happiness are my first priority. Always.
              </p>
            </div>

            <button
              onClick={() => scrollTo('appointment')}
              className="btn-primary mt-10"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
