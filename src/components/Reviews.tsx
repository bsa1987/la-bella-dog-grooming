import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah L.',
    location: 'Sketty, Swansea',
    text: "Bella is absolutely amazing with my dog. He always comes out looking and smelling beautiful — so caring and professional. I wouldn't take him anywhere else.",
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
  },
  {
    name: 'James T.',
    location: 'Mumbles, Swansea',
    text: "The best dog groomer in Swansea. My puppy was nervous but Bella handled her with such patience. She looks incredible every single time. Five stars, every visit.",
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
  },
  {
    name: 'Emma R.',
    location: 'Uplands, Swansea',
    text: "I wouldn't trust anyone else with my dog. A lovely professional salon — Bella is always kind, thorough and gentle. My Cockapoo comes home with a huge smile!",
    avatar: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&w=100&q=80',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="section-heading mb-4">What Our Clients Say</h2>
          <div className="inline-flex items-center gap-2.5 bg-white rounded-full px-5 py-2.5 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-charcoal-700 text-sm font-medium">5.0 · 100+ happy clients</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ name, location, text, avatar }) => (
            <div key={name} className="bg-white rounded-2xl p-8 shadow-sm border border-blush-50 hover:shadow-md transition-shadow duration-300">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-charcoal-600 text-sm leading-relaxed italic mb-7">"{text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blush-100"
                  loading="lazy"
                />
                <div>
                  <p className="text-charcoal-900 font-medium text-sm">{name}</p>
                  <p className="text-charcoal-400 text-xs">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
