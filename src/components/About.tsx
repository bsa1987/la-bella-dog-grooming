export default function About() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
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
                alt="Professional dog grooming at La Bella Grooming Swansea"
                className="w-full h-[520px] object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Pink Badge */}
            <div className="absolute -bottom-5 -right-5 bg-blush-500 text-white rounded-2xl px-7 py-5 shadow-xl">
              <div className="font-serif text-3xl font-semibold leading-none">
                4.7★
              </div>

              <div className="text-white/90 text-sm mt-1">
                45 Google Reviews
              </div>
            </div>

            <div className="absolute -top-5 -left-5 w-28 h-28 bg-cream-200 rounded-full -z-10" />

          </div>

          {/* Text */}
          <div>

            <p className="section-label mb-3">
              About La Bella Grooming
            </p>

            <h2 className="section-heading mb-3">
              Caring Grooming for Every Dog
            </h2>

            <p className="font-serif italic text-blush-400 text-lg mb-8">
              Professional dog grooming in the heart of Swansea
            </p>

            <div className="space-y-6 text-charcoal-600 leading-relaxed text-lg">

              <p>
                At La Bella Grooming, every dog is treated with patience,
                kindness and genuine care. Based in Brynhyfryd, Swansea,
                we've built a reputation for providing a calm, friendly
                environment where dogs feel relaxed and owners feel confident
                leaving their beloved pets in our hands.
              </p>

              <p>
                Whether it's a full groom, bath and tidy, puppy introduction
                or regular maintenance, we take the time to understand every
                dog's individual needs. Every appointment is tailored to ensure
                your dog enjoys a safe, comfortable and positive experience.
              </p>

              <p>
                Recommended by dog owners across Swansea, we're proud to have
                earned a <strong>4.7-star Google rating</strong> and the trust
                of families who continue to return to us year after year.
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
