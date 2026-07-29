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
  {
    id: 5,
    review:
      "“Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash. Breaks down your numbers, shows you how long your runway actually is, and where you’re bleeding cash”",
    name: "Aman K Lohia",
    age: 35,
    profession: "Software Professional",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 6,
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
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        
        {/* Dark Strip (Vision Content Above) */}
        <div 
          className="w-full min-h-[360px] md:min-h-[380px] rounded-2xl p-8 md:p-12 lg:p-16 flex flex-col justify-center mb-12 shadow-md"
          style={{ background: "linear-gradient(270deg, #000000 39.42%, #323232 67.31%)" }}
        >
          <p className="text-white text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-normal max-w-[620px] opacity-95">
            We’ve been through it — chasing investors, burning capital on ads, trusting agencies that never delivered. We’ve been through it — chasing investors, burning capital on ads, trusting agencies that never delivered. We’ve been through it — chasing investors, burning capital on ads, trusting agencies that never delivered. We’ve been through it — chasing investors, burning capital on ads, trusting agencies that never delivered. We’ve been through it — chasing investors, burning capital on ads, trusting agencies that never delivered.
          </p>

          <div className="mt-8">
            <h4 className="text-white text-[16px] md:text-[18px] font-semibold">
              We’ve been through it
            </h4>
            <p className="text-white/80 text-[14px] font-normal mt-1">
              -chasing investors
            </p>
          </div>
        </div>

        {/* Testimonials Infinite Auto-Scroll Slider */}
        <div className="w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
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
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}