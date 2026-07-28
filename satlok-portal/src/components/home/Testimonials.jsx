import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../cards/TestimonialCard";

const testimonials = [
  {
    id: 1,
    review:
      "The best part is, I'm able to achieve more in a short time and do things which I always wanted to do. I can focus on my work and my family better than ever before.",
    name: "Aman K Lohia",
    age: 35,
    profession: "Software Professional",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    review:
      "The best part is, I'm able to achieve more in a short time and do things which I always wanted to do. I can focus on my work and my family better than ever before.",
    name: "Rahul Sharma",
    age: 29,
    profession: "Engineer",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 3,
    review:
      "The best part is, I'm able to achieve more in a short time and do things which I always wanted to do. I can focus on my work and my family better than ever before.",
    name: "Priya Singh",
    age: 31,
    profession: "Teacher",
    image: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 4,
    review:
      "The best part is, I'm able to achieve more in a short time and do things which I always wanted to do. I can focus on my work and my family better than ever before.",
    name: "Mohit Verma",
    age: 40,
    profession: "Doctor",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 5,
    review:
      "The best part is, I'm able to achieve more in a short time and do things which I always wanted to do.",
    name: "Neha",
    age: 27,
    profession: "Designer",
    image: "https://i.pravatar.cc/150?img=45",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6">
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