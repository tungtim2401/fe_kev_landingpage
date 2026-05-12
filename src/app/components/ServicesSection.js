// import { services } from "@/constants/config";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Factory,
  Settings,
  ShieldCheck,
  Thermometer,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  const { t } = useTranslation();

  const services = [
    {
      title: t("service_title_1"),
      
      icon: (
        <Image
          src="/images/service/icon nhà máy dầu khí.png"
          alt=""
          width={50}
          height={50}
        />
      ),
      items: [
        t("service_item_1_1"),
        t("service_item_1_2"),
        t("service_item_1_3"),
        t("service_item_1_4"),
        t("service_item_1_5"),
        t("service_item_1_6"),
        t("service_item_1_7"),
        t("service_item_1_8"),
        t("service_item_1_9"),
        t("service_item_1_10"),
        t("service_item_1_11"),
        t("service_item_1_12"),
        t("service_item_1_13"),
        t("service_item_1_14"),
      ]
    },
    {
      title: t("service_title_2"),
      icon: (
        <Image
          src="/images/service/icon nhà máy điện.png"
          alt=""
          width={50}
          height={50}
        />
      ),
      items: [
        t("service_item_2_1"),
        t("service_item_2_2"),
        t("service_item_2_3"),
        t("service_item_2_4"),
        t("service_item_2_5"),
        t("service_item_2_6"),
        t("service_item_2_7"),
        t("service_item_2_8"),
        t("service_item_2_9"),
      ]
    },
    {
      title: t("service_title_3"),
      icon: (
        <Image
          src="/images/service/nhà máy hóa chất.png"
          alt=""
          width={50}
          height={50}
        />
      ),
      items: [
        t("service_item_3_1"),
        t("service_item_3_2"),
        t("service_item_3_3"),
        t("service_item_3_4"),
        t("service_item_3_5"),
        t("service_item_3_6"),
        t("service_item_3_7"),
        t("service_item_3_8"),
        t("service_item_3_9"),
        t("service_item_3_10"),
        t("service_item_3_11"),
      ]
    },
    {
      title: t("service_title_4"),
      icon: (
        <Image
          src="/images/service/nhà máy chế biến thực phẩm.png"
          alt=""
          width={50}
          height={50}
        />
      ),
      items: [
        t("service_item_4_1"),
        t("service_item_4_2"),
        t("service_item_4_3"),
        t("service_item_4_4"),
        t("service_item_4_5"),
        t("service_item_4_6"),
        t("service_item_4_7"),
        t("service_item_4_8"),
        t("service_item_4_9"),
      ]
    },
      {
      title: t("service_title_5"),
      icon: (
        <Image
          src="/images/service/nhà máy vật chịu lửa.png"
          alt=""
          width={50}
          height={50}
        />
      ),
      items: [
        t("service_item_5_1"),
        t("service_item_5_2"),
        t("service_item_5_3"),
        t("service_item_5_4"),
      ]
    },
      {
      title: t("service_title_6"),
      icon: (
        <Image
          src="/images/service/nhà máy khí hóa lỏng.png"
          alt=""
          width={50}
          height={50}
        />
      ),
      items: [
        t("service_item_6_1"),
        t("service_item_6_2"),
        t("service_item_6_3"),
        t("service_item_6_4"),
        t("service_item_6_5"),
        t("service_item_6_6"),
      ]
    },
  ];

  return (
    <section
      id="expertise"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl font-bold mb-6 text-primary">
            {t("process_title")}
          </h2>
          <p className="text-gray-300 text-lg">{t("serviceContent")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setActiveService(idx)}
              className="group bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer relative overflow-hidden"
            >
              {/* Decorative Pattern Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

              {/* Icon & Title */}
              <div className="flex flex-col gap-6 mb-8 relative z-10">
                <div className="w-16 h-16 bg-gray-50 text-primary rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-industrial-blue group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  {/* <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {service.items?.length}
                  </div> */}
                </div>
              </div>

              {/* Preview Content */}
              <div className="flex flex-col flex-grow relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.items?.slice(0, 4).map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gray-50 text-industrial-gray text-[11px] font-bold rounded-lg border border-gray-100 group-hover:border-primary/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                  {service.items?.length > 4 && (
                    <span className="px-3 py-1.5 bg-primary/5 text-primary text-[11px] font-bold rounded-lg border border-primary/10">
                      + {service.items.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-industrial-blue uppercase tracking-widest">
                      ASME Standards
                    </span> */}
                  </div>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    {t("detail")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industry Detail Modal */}
      <AnimatePresence>
        {activeService !== null && activeService !== -1 && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(-1)}
              className="absolute inset-0 bg-industrial-blue/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* <div className="md:w-1/3 relative h-48 md:h-auto">
                <img
                  src={services[activeService].img}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue md:from-transparent md:bg-gradient-to-r md:via-transparent to-transparent opacity-60 top-[50%]" />
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl mb-4">
                    {services[activeService].icon}
                  </div>
                </div>
              </div> */}

              <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-industrial-blue mb-2">
                      {services[activeService].title}
                    </h3>
                    <p className="text-primary font-bold text-sm tracking-widest uppercase">
                      {t("service_equipment_category")}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveService(-1)}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-industrial-blue hover:bg-primary hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services[activeService].items?.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 group hover:border-primary/30 transition-colors"
                    >
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform shrink-0" />
                      <span className="text-industrial-blue font-medium leading-tight group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Award className="text-primary w-5 h-5" />
                      <span className="text-xs font-bold text-industrial-blue uppercase">
                        ASME U/S/R
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      <span className="text-xs font-bold text-industrial-blue uppercase">
                        ISO 9001:2015
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveService(-1)}
                    className="px-8 py-3 bg-industrial-blue !text-white font-bold rounded-xl hover:bg-industrial-blue/90 transition-all text-sm"
                  >
                    {t("close")}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
