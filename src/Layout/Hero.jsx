import logo from "../assets/logo.png";
import { Bell, Menu } from "lucide-react";

export default function Hero({ showCircles = false }) {
  return (
    <section
      className="relative h-[412px] md:h-screen min-h-[412px] md:min-h-[500px] rounded-[12px] md:rounded-none bg-cover bg-center overflow-hidden max-w-[1440px] mx-2 md:mx-auto"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundColor: "rgba(59, 59, 59, 0.3)"
      }}
    >

      {/* Content (Aligned at bottom center with Figma mobile & desktop specs) */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white px-4 md:px-6 pb-6 md:pb-12 lg:pb-[46px] z-10">
        
        {/* 6 Ellipses (Desktop view only for Home page: 113px x 105px, opacity 0.75) */}
        {showCircles && (
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-[77px] mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="w-[80px] lg:w-[113px] h-[75px] lg:h-[105px] bg-white/75 border border-white rounded-full opacity-75 shadow-sm"
              ></div>
            ))}
          </div>
        )}

        {/* Heading: Mobile 24px/30px leading, Desktop 46px/55px leading */}
        <h1 className="text-[24px] md:text-[46px] font-bold leading-[30px] md:leading-[55px] text-white [text-shadow:0px_1.5px_3px_rgba(0,0,0,0.75)] mb-3 md:mb-6 max-w-[258px] sm:max-w-[350px] md:max-w-[949px]">
          Path to the freedom <br className="md:hidden" /> Path to the free
        </h1>

        {/* Subtitle: Mobile 14px/22px leading, Desktop 20px/30px leading */}
        <p className="text-[14px] md:text-[20px] font-normal leading-[22px] md:leading-[30px] text-white [text-shadow:0px_1.5px_3px_rgba(0,0,0,0.75)] max-w-[358px] md:max-w-[831px] mb-5 md:mb-9">
          Fostering well-being through breath, meditation & yoga programs since 1981
        </p>

        {/* Button: Mobile 143px x 45.5px (#12355C text "Explore"), Desktop 216px x 56px (#001032 text "Get Started") */}
        <button
          className="
            w-[143px] md:w-[216px]
            h-[45.54px] md:h-[56px]
            bg-white
            text-[#12355C] md:text-[#001032]
            text-[16px] md:text-[22px]
            font-normal md:font-medium
            leading-[22px] md:leading-[35px]
            rounded-[5px]
            shadow-md hover:shadow-lg hover:bg-gray-50
            transition-all
            flex items-center justify-center
          "
        >
          <span className="md:hidden">Explore</span>
          <span className="hidden md:inline">Get Started</span>
        </button>
      </div>
    </section>
  );
}
