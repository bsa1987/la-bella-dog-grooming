import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Naomi Miller',
    location: 'Local Guide • Google Review',
    text: "Dawn and Sam are the ONLY people who could ever cut our Shih Tzu's hair. They are just amazing!!! I can't recommend them enough!",
    avatar: 'https://ui-avatars.com/api/?name=Naomi+Miller&background=ffffff&color=444444',
  },
  {
    name: 'Leanne Bennett',
    location: 'Google Review',
    text: "Amazing ladies at this groomers brilliant with my dog who is not very good when it comes to having her nails done. Will be telling people to come here and we will be back.",
    avatar: 'https://ui-avatars.com/api/?name=Leanne+Bennett&background=ffffff&color=444444',
  },
  {
    name: 'Ashleigh Pyle',
    location: 'Google Review',
    text: "3 puppy grooms and now his first adult groom. Wouldn't go anywhere else. Lovely ladies and service. Lenny loves coming here. Thank you!",
    avatar: 'https://ui-avatars.com/api/?name=Ashleigh+Pyle&background=ffffff&color=444444',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        <div className="text-center mb-16">
          <p className="section-label mb-3">Testimonials</p>

          <h2 className="section-heading mb-5">
            Trusted by Dog Owners Across Swansea
          </h2>

          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <span className="text-charcoal-700 font-medium">
              4.7 • 45 Google Reviews
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-blush-100 hover:shadow-lg transition-all duration-300"
            >

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="italic text-charcoal-700 leading-8 mb-8">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">

                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full ring-2 ring-blush-100"
                />

                <div>
                  <h3 className="font-semibold text-charcoal-900">
                    {review.name}
                  </h3>

                  <p className="text-sm text-charcoal-500">
                    {review.location}
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
