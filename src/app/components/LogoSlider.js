"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

const logos = [
  "/images/logo.jpg",
  "/images/logo.jpg",
  "/images/logo.jpg",
  "/images/logo.jpg",
  "/images/logo.jpg",
  "/images/logo.jpg",
];

export default function LogoSlider() {
  return (
    <div className="w-full py-8 bg-white">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={60}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        cssMode={false}
      >
        {logos.concat(logos).map((logo, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
