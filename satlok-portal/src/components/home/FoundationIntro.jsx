export default function FoundationIntro() {
  return (
    <section className="bg-[#D9D7FF] py-5 md:py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Card */}
        <div className="relative h-[250px] md:h-[540px] overflow-hidden rounded-2xl border border-[#8D8BE8] bg-[#F7F7FF] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
          {/* Content */}
          <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-[24px] md:text-[40px] font-bold text-[#001032]">
              Path to the freedom
            </h2>

            <p className="mt-2 max-w-md md:max-w-xl text-[13px] md:text-[18px] leading-5 md:leading-7 text-[#2F2F2F]">
              Fostering well-being through breath,
              meditation & yoga programs since 1981
            </p>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="mx-auto mt-7 h-5 w-[90%] rounded-full bg-white/80"></div>
      </div>
    </section>
  );
}