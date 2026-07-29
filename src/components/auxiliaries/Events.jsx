import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import EventCard from "../cards/EventCard";

const events = [1, 2, 3, 4, 5, 6];

export default function Events() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[32px] md:text-[46px] font-normal text-black mb-8 md:mb-10 text-center md:text-left">
          Events
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: "auto",
              spaceBetween: 24,
            },
          }}
          className="!pb-12"
        >
          {events.map((item) => (
            <SwiperSlide key={item} className="w-full md:!w-[483px]">
              <EventCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}