export default function PhotoStrip() {
  const images = [
    "https://placedog.net/900/600?id=1",
    "https://placedog.net/900/600?id=2",
    "https://placedog.net/900/600?id=3",
    "https://placedog.net/900/600?id=4",
    "https://placedog.net/900/600?id=5",
    "https://placedog.net/900/600?id=6",
    "https://placedog.net/900/600?id=7",
    "https://placedog.net/900/600?id=8",
  ];

  const photos = [...images, ...images];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#faf7f1] py-8"
    >
      {/* Top gold divider */}
      <div className="mx-auto mb-8 h-px w-[95%] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="marquee overflow-hidden">
        <div className="marquee-track flex gap-6">
          {photos.map((image, index) => (
            <div
              key={index}
              className="w-[320px] h-[220px] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={image}
                alt="Dog grooming"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold divider */}
      <div className="mx-auto mt-8 h-px w-[95%] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </section>
  );
}
