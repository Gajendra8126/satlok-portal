export default function Hero() {
  return (
    <section
      className="relative h-[600px] md:h-[833px] bg-cover bg-center rounded-b-3xl overflow-hidden mt-[100px] mx-4 md:mx-auto max-w-[1440px]"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundColor: "rgba(59, 59, 59, 0.5)"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        
        {/* 5 Circles */}
        <div className="flex gap-4 md:gap-8 mb-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-12 h-12 md:w-16 md:h-16 bg-[#D9D9D9] rounded-full opacity-80 shadow-md"></div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-[52px] font-bold leading-tight drop-shadow-lg mb-4 max-w-4xl">
          Path to the freedom Path to the freedom
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-lg text-white/90 max-w-2xl drop-shadow-md mb-8">
          Fostering well-being through breath, meditation & yoga programs since 1982
        </p>

        {/* Button */}
        <button
          className="
            px-8 py-3
            bg-white
            text-[#001032]
            text-base md:text-[18px]
            font-semibold
            rounded-full
            shadow-lg hover:shadow-xl
            transition-all
          "
        >
          Get started
        </button>
      </div>
    </section>
  );
}