import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import EventCard from "../cards/EventCard";

const events = [1, 2, 3, 4, 5, 6];

export default function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-[46px] font-normal text-black mb-10">
          Events
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={"auto"}
          loop
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
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: "auto",
            },
          }}
          className="pb-12"
        >
          {events.map((item) => (
            <SwiperSlide key={item} className="!w-[483px]">
              <EventCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}