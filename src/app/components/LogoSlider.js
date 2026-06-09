"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// const logos = [
//   "/logo_partner/AGC.png",
//   "/logo_partner/Ajinomoto.png",
//   "/logo_partner/asahi_chemical.png",
//   "/logo_partner/asahi-removebg-preview.png",
//   "/logo_partner/ASC-removebg-preview.png",
//   "/logo_partner/Denka-removebg-preview.png",
//   "/logo_partner/idemitsu-removebg-preview.png",
//   "/logo_partner/JGC-removebg-preview.png",
//   "/logo_partner/KH_neochem-removebg-preview.png",
//   "/logo_partner/kobe_steel-removebg-preview.png",
//   "/logo_partner/kobelco-removebg-preview.png",
//   "/logo_partner/mitsubishi-removebg-preview.png",
//   "/logo_partner/mitsui_chemicals-removebg-preview.png",
//   "/logo_partner/Nippon_Steel-removebg-preview.png",
//   "/logo_partner/sumitomo_Chemical-removebg-preview.png",
//   "/logo_partner/toshiba-removebg-preview.png",
//   "/logo_partner/TPC_Vina-removebg-preview.png",
//   "/logo_partner/TVC-removebg-preview.png",
//   "/logo_partner/VEDAN-removebg-preview.png",
//   "/logo_partner/Vina_corp-removebg-preview.png",
//   "/logo_partner/VREC-removebg-preview.png",
// ];

const companies = [
  "Toshiba Energy Systems & Solutions Corporation",
  "Vietnam Rare Elements Chemical Joint Stock Company (VREC)",
  "Idemitsu Engineering Vietnam Co., Ltd.",
  "Nippon Steel Engineering Co., Ltd.",
  "Kobelco Eco-Solutions Co.,Ltd",
  "Mitsubishi Materials Corporation",
  "KH Neochem Co., Ltd.",
  "Denka Company Limited",
  "PT Asahimas Chemical (Asahimas Chemical)",
  "Mitsui Chemicals, Inc.",
  "AGC Inc.",
  "Ajinomoto Viet Nam Co.,Ltd",
  "CFT Vina Copper Co.,Ltd",
  "Asahi Kasei Corporation",
  "Sumitomo Chemical Co., Ltd.",
  "TTCL Viet Nam Corporation Limited",
  "Kubota Corporation",
  "Asahi Chemicals Co.,Ltd",
  "Kobelco E&M Co., Ltd.",
  "Long Son Petrochemicals Co., Ltd.",
  "Vedan Viet Nam Enterprise Corp.,Ltd",
  "TPC Vina Plastic and Chemical Corporation Limited",
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
        {companies.map((company, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto flex items-center justify-center"
          >
            <p className="font-semibold text-[#0a2f5f] text-2xl">{company}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
