// import { services } from "@/constants/config";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Settings, ShieldCheck, Thermometer } from "lucide-react";

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("service_1"),
      description: t("desc_service_1"),
      icon: <ShieldCheck className="w-8 h-8 text-accent-orange" />,
    },
    {
      title: t("service_2"),
      description: t("desc_service_2"),
      icon: <Thermometer className="w-8 h-8 text-accent-orange" />,
    },
    {
      title: t("service_3"),
      description: t("desc_service_3"),
      icon: <Settings className="w-8 h-8 text-accent-orange" />,
    },
    {
      title: t("service_4"),
      description: t("desc_service_4"),
      icon: <Factory className="w-8 h-8 text-accent-orange" />,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl font-bold mb-6">
            {t("services")}
          </h2>
          <p className="text-industrial-gray text-lg">{t("serviceContent")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-industrial-gray leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#"
                className="text-primary font-bold flex items-center gap-2 group"
              >
                {/* Chi tiết{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                /> */}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
