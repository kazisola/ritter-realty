"use client";

import { QuoteIcon, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "David & Sharon Eisfelder",
    title: "Home Buyers",
    content:
      "We found that your integrity and honesty are beyond reproach. You always kept your word. It was reassuring to know we could trust you completely.",
    rating: 5,
  },
  {
    name: "Tannie & Tim Girard",
    title: "Sellers & Buyers",
    content:
      "He truly cares about people and has very high ethics. We feel fortunate to have had his expertise in real estate and would send family and friends to Loyal with complete confidence.",
    rating: 5,
  },
  {
    name: "Laurie & Chris",
    title: "Home Buyers",
    content:
      "Loyal respected that we weren't quite ready but still took the time to guide us — and ultimately helped us find our dream home. If you want an honest, down-to-earth realtor, look no further.",
    rating: 5,
  },
  {
    name: "Tannie & Tim Girard",
    title: "Sellers & Buyers",
    content:
      "He truly cares about people and has very high ethics. We feel fortunate to have had his expertise in real estate and would send family and friends to Loyal with complete confidence.",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 container">
      <div className=" mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
          Client Testimonials
        </h2>
        <p className="text-lg text-gray-600">
          Hear what our satisfied clients have to say
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white p-8 rounded-2xl border border-gray-50 h-full flex flex-col justify-between">
              <QuoteIcon
                size={60}
                className="absolute bottom-5 right-5 text-yellow-600 opacity-10"
              />
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-600 fill-yellow-600" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
