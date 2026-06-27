import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Naomi Miller",
    location: "Local Guide • Google Review",
    review:
      "Dawn and Sam are the ONLY people who could ever cut our Shih Tzu's hair. They are just amazing!!! I can't recommend them enough!",
  },
  {
    name: "Leanne Bennett",
    location: "Google Review",
    review:
      "Amazing ladies at this groomers, brilliant with my dog who is not very good when it comes to having her nails done. We'll be telling people to come here and we'll definitely be back.",
  },
  {
    name: "Ashleigh Pyle",
    location: "Google Review",
    review:
      "3 puppy grooms and now his first adult groom. Wouldn't go anywhere else. Lovely ladies and fantastic service. Lenny loves coming here. Thank you!",
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
            <span className="text-charcoal-700 text-sm font-medium">4.7 • 45 Google Reviews</span>
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
