import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../cards/TestimonialCard";

const testimonials = [
  {
    id: 1,
    review:
      "“Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash”",
    name: "Aman K Lohia",
    age: 35,
    profession: "Software Professional",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    review:
      "“Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash”",
    name: "Aman K Lohia",
    age: 35,
    profession: "Software Professional",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    review:
      "“Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash”",
    name: "Aman K Lohia",
    age: 35,
    profession: "Software Professional",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    review:
      "“Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash”",
    name: "Aman K Lohia",
    age: 35,
    profession: "Software Professional",
    image: "https://i.pravatar.cc/150?img=12",
  },
];

export default function Testimonials() {
  return (
    <section className="relative mt-24 mb-16">
      {/* Dark Strip */}
      <div 
        className="w-full max-w-[1440px] mx-auto min-h-[402px] rounded-xl flex items-center px-12 pb-24"
        style={{
          background: "linear-gradient(270deg, #000000 39.42%, #323232 67.31%)",
          opacity: 0.8
        }}
      >
        <p className="text-white text-[16px] md:text-[20px] font-medium leading-relaxed max-w-[500px]">
          We’ve been through it — chasing investors, burning capital on ads, trusting agencies that never delivered. We’ve been through it — chasing investors, burning capital on ads, trusting agencies that never delivered.
        </p>
      </div>

      {/* Testimonials Slider */}
      <div className="max-w-[1440px] mx-auto px-6 -mt-32 relative z-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
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
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}