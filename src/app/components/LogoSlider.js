"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "/logo_partner/AGS.png",
  "/logo_partner/Ajinomoto.png",
  "/logo_partner/asahi_chemical.png",
  "/logo_partner/asahi-removebg-preview.png",
  "/logo_partner/ASC-removebg-preview.png",
  "/logo_partner/Denka-removebg-preview.png",
  "/logo_partner/idemitsu-removebg-preview.png",
  "/logo_partner/JGC-removebg-preview.png",
  "/logo_partner/KH_neochem-removebg-preview.png",
  "/logo_partner/kobe_steel-removebg-preview.png",
  "/logo_partner/kobelco-removebg-preview.png",
  "/logo_partner/mitsubishi-removebg-preview.png",
  "/logo_partner/mitsui_chemicals-removebg-preview.png",
  "/logo_partner/Nippon_Steel-removebg-preview.png",
  "/logo_partner/sumitomo_Chemical-removebg-preview.png",
  "/logo_partner/toshiba-removebg-preview.png",
  "/logo_partner/TPC_Vina-removebg-preview.png",
  "/logo_partner/TVC-removebg-preview.png",
  "/logo_partner/VEDAN-removebg-preview.png",
  "/logo_partner/Vina_corp-removebg-preview.png",
  "/logo_partner/VREC-removebg-preview.png",
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
              className="h-12 w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
