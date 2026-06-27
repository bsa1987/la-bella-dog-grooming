export default function PhotoStrip() {
  const images = [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
    https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80,
  ];

  const photos = [...images, ...images];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#faf7f1] py-8"
    >
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

      <div className="mx-auto mt-8 h-px w-[95%] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    </section>
  );
}
