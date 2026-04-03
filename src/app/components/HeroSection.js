import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowRightCircle, Award, AwardIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  const heroSlides = [
    {
      title: t("title1"),
      desc: t("desc1"),
      image: "/images/preview.png",
      tag: t("tag1"),
    },
    {
      title: t("title2"),
      desc: t("desc2"),
      image: "/images/preview2.png",
      tag: t("tag2"),
    },
    {
      title: t("title3"),
      desc: t("desc3"),
      image: "/images/preview3.jpg",
      tag: t("tag3"),
    },
  ];
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        loop={true}
        className="h-full w-full hero-swiper"
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative h-full w-full">
            <div className="absolute inset-0 z-0">
              <img
                src={slide.image}
                alt={`Industrial Slide ${idx + 1}`}
                className="w-full h-full object-cover opacity-80 scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue via-industrial-blue/60 to-transparent" />
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
              <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
                    <Award size={16} />
                    <span>{slide.tag}</span>
                  </div>
                  <h1
                    className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
                    {slide.desc}
                  </p>
                  {/* <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all flex items-center gap-2 group shadow-xl shadow-orange-500/30">
                     {t(view)}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                      Tư Vấn Kỹ Thuật
                    </button>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 z-20">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </>
  );
}
export default HeroSection;
