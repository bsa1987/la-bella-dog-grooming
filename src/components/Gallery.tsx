const pairs = [
  {
    before: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    after: 'https://images.pexels.com/photos/6816814/pexels-photo-6816814.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    breed: 'Cockapoo',
  },
  {
    before: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    after: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    breed: 'Spaniel',
  },
  {
    before: 'https://images.pexels.com/photos/5256195/pexels-photo-5256195.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    after: 'https://images.pexels.com/photos/4587987/pexels-photo-4587987.jpeg?auto=compress&cs=tinysrgb&w=800&q=85',
    breed: 'Doodle Mix',
  },
];

const extras = [
  'https://images.pexels.com/photos/5256201/pexels-photo-5256201.jpeg?auto=compress&cs=tinysrgb&w=700&q=85',
  'https://images.pexels.com/photos/7210564/pexels-photo-7210564.jpeg?auto=compress&cs=tinysrgb&w=700&q=85',
  'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=700&q=85',
  'https://images.pexels.com/photos/4498194/pexels-photo-4498194.jpeg?auto=compress&cs=tinysrgb&w=700&q=85',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Our Work</p>
          <h2 className="section-heading">Before &amp; After</h2>
        </div>

        {/* Before & After grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {pairs.map(({ before, after, breed }) => (
            <div key={breed} className="rounded-2xl overflow-hidden shadow-md bg-white group">
              <div className="relative flex">
                <div className="relative w-1/2">
                  <img
                    src={before}
                    alt={`${breed} before grooming – La Bella Dog Grooming Swansea`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-charcoal-800/75 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative w-1/2">
                  <img
                    src={after}
                    alt={`${breed} after grooming – La Bella Dog Grooming Swansea`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-blush-500/90 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                    After
                  </span>
                </div>
                {/* Divider */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/80 z-10" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-20 flex items-center">
                  <div className="w-7 h-7 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4 6H8M6 4L8 6L6 8" stroke="#c4768a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 border-t border-blush-50">
                <p className="text-center text-sm font-serif text-charcoal-500">{breed}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {extras.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm group">
              <img
                src={src}
                alt="Professional dog grooming Swansea"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
