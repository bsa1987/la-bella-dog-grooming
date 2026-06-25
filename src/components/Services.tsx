import { Scissors, Droplets, Star, Sparkles, Wind, Smile } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Full Groom',
    price: 'From £35',
    desc: 'Bath, blow dry, breed-specific cut, ear clean & nail trim.',
    popular: true,
  },
  {
    icon: Droplets,
    name: 'Bath & Dry',
    price: 'From £20',
    desc: 'Premium shampoo, conditioner, thorough blow dry & brush out.',
    popular: false,
  },
  {
    icon: Star,
    name: 'Puppy Groom',
    price: 'From £25',
    desc: 'A calm, gentle first grooming experience for puppies.',
    popular: false,
  },
  {
    icon: Sparkles,
    name: 'Nail Trim',
    price: 'From £8',
    desc: 'Safe, precise nail clipping and filing.',
    popular: false,
  },
  {
    icon: Wind,
    name: 'Deshedding',
    price: 'From £15',
    desc: 'Specialist treatment to reduce loose coat and shedding.',
    popular: false,
  },
  {
    icon: Smile,
    name: 'Teeth Cleaning',
    price: 'From £10',
    desc: 'Dog-safe dental hygiene for fresh breath and healthy teeth.',
    popular: false,
  },
];

export default function Services() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="section-heading">Grooming Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, name, price, desc, popular }) => (
            <div key={name} className="relative group rounded-2xl border border-blush-100 bg-white p-8 hover:border-blush-200 hover:shadow-lg transition-all duration-300">
              {popular && (
                <span className="absolute -top-3 left-6 bg-blush-500 text-white text-[11px] font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 bg-blush-50 rounded-xl flex items-center justify-center group-hover:bg-blush-100 transition-colors">
                  <Icon size={20} className="text-blush-500" strokeWidth={1.5} />
                </div>
                <span className="font-serif text-brown-600 font-semibold text-lg">{price}</span>
              </div>
              <h3 className="font-serif text-xl text-charcoal-900 mb-2">{name}</h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-charcoal-400 text-sm mt-10">
          Prices vary by breed and coat condition.{' '}
          <button onClick={() => scrollTo('appointment')} className="text-blush-500 hover:text-blush-600 font-medium underline-offset-2 hover:underline transition-colors">
            Request a quote
          </button>
        </p>
      </div>
    </section>
  );
}
