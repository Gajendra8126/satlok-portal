export default function Hero() {
  return (
    <section
      className="relative h-[500px] md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')", // Replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25 md:bg-black/35" />

      {/* ================= MOBILE ================= */}
      <div className="absolute inset-0 md:hidden flex items-end justify-center px-6 mb-10 ">
        <div className="text-center text-white max-w-sm">
          <h1
            className="text-[28px] font-bold leading-tight drop-shadow-lg"
            style={{ textShadow: "0 3px 8px rgba(0,0,0,.45)" }}
          >
            Path to the freedom
            <br />
            Path to the free
          </h1>

          <p
            className="mt-3 text-[12px] leading-8 text-white/95"
            style={{ textShadow: "0 2px 6px rgba(0,0,0,.4)" }}
          >
            Fostering well-being through breath,
            meditation & yoga programs since
            1981
          </p>

          <button className="mt-10 w-[143px] h-[45.54px] rounded-lg bg-white text-[#244D7D] text-[22px] font-medium shadow-lg">
            Explore
          </button>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-full px-6 justify-center">
        <div className="flex flex-col items-center text-center text-white gap-6">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-[52px] lg:text-[46px] font-bold leading-tight">
              Path to the freedom Path to the free
            </h1>

            <p className="max-w-3xl text-lg lg:text-xl text-white/90">
              Fostering well-being through breath,
              meditation & yoga programs since
              1981
            </p>
          </div>

          <button
            className="
              mt-2
              w-[120px]
              h-[48px]
              bg-white
              text-[#001032]
              text-[17px]
              font-semibold
              rounded-md
              border border-[#E5E7EB]
              shadow-[0_4px_12px_rgba(0,0,0,0.18)]
              hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)]
              transition-all
            "
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}
