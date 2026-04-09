"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "/logo_partner/AGS.png",
  "/logo_partner/Ajinomoto.png",
  "/logo_partner/asahi chemical.png",
  "/logo_partner/asahi.png",
  "/logo_partner/ASC.png",
  "/logo_partner/Denka.png",
  "/logo_partner/idemitsu.png",
  "/logo_partner/JGC.png",
  "/logo_partner/KH neochem.png",
  "/logo_partner/kobe steel.png",
  "/logo_partner/kobelco.png",
  "/logo_partner/mitsubishi.png",
  "/logo_partner/mitsui chemicals.png",
  "/logo_partner/Nippon Steel.png",
  "/logo_partner/sumitomo Chemical.png",
  "/logo_partner/toshiba.png",
  "/logo_partner/TPC Vina.png",
  "/logo_partner/TVC.png",
  "/logo_partner/VEDAN.png",
  "/logo_partner/Vina corp.png",
  "/logo_partner/VREC.png",
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
