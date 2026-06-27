export default function PhotoStrip() {
  const images = [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&q=80",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=800&q=80",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&q=80",
  ];

  const photos = [...images, ...images];

  return (
    <section className="relative overflow-hidden py-12 bg-[#faf7f1]">

      {/* Gold top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#d9b36b] via-[#f3dfae] to-transparent" />

      {/* Gold bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#d9b36b] via-[#f3dfae] to-transparent" />

      <div className="marquee">

        <div className="marquee-track">

          {photos.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[320px] h-[220px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
