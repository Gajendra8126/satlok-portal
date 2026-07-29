import CausesSection from "./CausesSection";

export default function FoundationIntro() {
  return (
    <section className="bg-[#D9D7FF] py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col items-center">
        {/* Card */}
        <div className="relative w-full h-[250px] md:h-[540px] overflow-hidden rounded-2xl border border-[#8D8BE8] bg-[#F7F7FF] shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
          {/* Content */}
          <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 text-center w-full px-4">
            <h2 className="text-[24px] md:text-[40px] font-bold text-[#001032]">
              Path to the freedom
            </h2>

            <p className="mt-2 mx-auto max-w-md md:max-w-xl text-[13px] md:text-[18px] leading-5 md:leading-7 text-[#2F2F2F]">
              Fostering well-being through breath,
              meditation & yoga programs since 1981
            </p>
          </div>
        </div>

        {/* Bottom Indicator / Search Pill */}
        <div className="w-full mt-7 max-w-[1261px] h-[60px] bg-white/80 rounded-full mb-12"></div>

        {/* Causes Section at the end of FoundationIntro */}
        <CausesSection />
      </div>
    </section>
  );
}