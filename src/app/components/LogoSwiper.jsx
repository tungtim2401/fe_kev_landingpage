"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// IMPORT CSS (bắt buộc)
import "swiper/css";
import "swiper/css/free-mode";

const logos = [
  "https://dummyimage.com/200x80/ffffff/000&text=Teakwood",
  "https://dummyimage.com/200x80/ffffff/000&text=Allexa",
  "https://dummyimage.com/200x80/ffffff/000&text=ArchStreet",
  "https://dummyimage.com/200x80/ffffff/000&text=Proud",
  "https://dummyimage.com/200x80/ffffff/000&text=Woodworks",
];

export default function LogoSlider() {
  return (
    <div className="bg-blue-600 py-10">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="logo"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
