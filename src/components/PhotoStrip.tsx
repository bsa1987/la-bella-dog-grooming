export default function PhotoStrip() {
  const images = [
    "https://picsum.photos/seed/dog1/900/600",
    "https://picsum.photos/seed/dog2/900/600",
    "https://picsum.photos/seed/dog3/900/600",
    "https://picsum.photos/seed/dog4/900/600",
    "https://picsum.photos/seed/dog5/900/600",
    "https://picsum.photos/seed/dog6/900/600",
    "https://picsum.photos/seed/dog7/900/600",
    "https://picsum.photos/seed/dog8/900/600",
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
                alt={`Dog ${index + 1}`}
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
