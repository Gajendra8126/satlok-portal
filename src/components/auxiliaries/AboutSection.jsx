import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function AboutSection() {
  const cards = [
    {
      id: 1,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on",
      color: "#8A744A",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on",
      color: "#CAC9FF",
      textColor: "text-[#001032]",
    },
    {
      id: 3,
      title: "Naam Diksha",
      description:
        "The process felt human, even though it's AI-driven. The brief understanding was spot-on",
      color: "#002B31",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-[32px] md:text-[46px] font-normal text-black mb-8 md:mb-10 text-center md:text-left">
          Diksha, Direction & Sadhna
        </h2>

        {/* ================= MOBILE VIEW (Swiper Auto-Scroll Slider) ================= */}
        <div className="md:hidden flex flex-col items-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            className="w-full max-w-[340px] !pb-12"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div
                  className={`w-[320px] h-[330px] rounded-[24px] p-6 mx-auto flex flex-col justify-between shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${card.textColor}`}
                  style={{ background: card.color }}
                >
                  <h3 className="text-[20px] font-normal tracking-wide">
                    {card.title}
                  </h3>

                  <p className="text-[12px] leading-[18px] opacity-95 max-w-[250px]">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Button */}
          <button className="mt-4 px-8 py-2.5 border border-[#001032] rounded-[6px] text-[15px] font-medium text-[#001032] transition hover:bg-gray-50">
            Get started
          </button>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block border border-black rounded-[20px] p-10 lg:p-14 bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-start">

            {/* Left Card */}
            <div className="flex flex-col">
              <h3 className="text-xl font-normal text-black">
                {cards[0].title}
              </h3>
              <p className="mt-3 text-[12px] leading-[22px] text-[#001032] max-w-[273px]">
                {cards[0].description}. {cards[0].description}
              </p>
              <div
                className="mt-6 w-full h-[359px] rounded-[20px] shadow-[0_0_12px_rgba(0,0,0,0.75)] opacity-80"
                style={{ background: cards[0].color }}
              ></div>
            </div>

            {/* Center Card */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-xl font-normal text-black self-start">
                {cards[1].title}
              </h3>
              <p className="mt-3 text-[12px] leading-[22px] text-[#001032] max-w-[273px] self-start">
                {cards[1].description}. {cards[1].description}
              </p>
              <div
                className="mt-6 w-full h-[258px] rounded-[20px] shadow-[0_0_12px_rgba(0,0,0,0.75)] opacity-80"
                style={{ background: cards[1].color }}
              ></div>
              <button className="mt-12 px-6 py-2 border border-[#001032] rounded-[5px] text-[16px] text-[#001032] transition hover:bg-gray-50 self-start lg:self-center">
                Get started
              </button>
            </div>

            {/* Right Card */}
            <div className="flex flex-col">
              <h3 className="text-xl font-normal text-black">
                {cards[2].title}
              </h3>
              <p className="mt-3 text-[12px] leading-[22px] text-[#001032] max-w-[273px]">
                {cards[2].description}. {cards[2].description}
              </p>
              <div
                className="mt-6 w-full h-[359px] rounded-[20px] shadow-[0_0_12px_rgba(0,0,0,0.75)]"
                style={{ background: cards[2].color }}
              ></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}