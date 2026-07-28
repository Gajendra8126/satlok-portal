import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import EventCard from "../cards/EventCard";

const events = [1, 2, 3, 4, 5, 6];

export default function Events() {
  return (
    <>
      {/* Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-[48px] font-semibold text-[#111827] mb-10">
            Events
          </h2>

          {/* Slider */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {events.map((item) => (
              <SwiperSlide key={item}>
                <EventCard />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Social Impact Heading */}
          <div className="mt-20">
            <h2 className="text-[48px] font-semibold text-[#111827]">
              Social Impact
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}