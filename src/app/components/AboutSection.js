import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  Factory,
  FlaskConical,
  LayoutList,
  Zap,
  ClipboardCheck,
  Cpu,
  Wrench,
  Droplets,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const { t, i18n } = useTranslation();

  const about = [
    { text: t("about_content_1"), icon: <Factory className="w-5 h-5" /> },
    { text: t("about_content_2"), icon: <FlaskConical className="w-5 h-5" /> },
    { text: t("about_content_3"), icon: <Zap className="w-5 h-5" /> },
    { text: t("about_content_4"), icon: <LayoutList className="w-5 h-5" /> },
    { text: t("about_content_5"), icon: <Cpu className="w-5 h-5" /> },
    { text: t("about_content_6"), icon: <Wrench className="w-5 h-5" /> },
    { text: t("about_content_7"), icon: <Droplets className="w-5 h-5" /> },
    {
      text: t("about_content_8"),
      icon: <ClipboardCheck className="w-5 h-5" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <img
          src="/images/3d-sev.png"
          alt="Factory Interior"
          className="rounded-3xl shadow-2xl relative z-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -right-6 bg-industrial-blue p-6 rounded-2xl shadow-xl z-20 hidden md:block">
          <div className="flex items-center gap-4 text-white">
            <div className="flex flex-col gap-2">
              <div className="font-bold flex gap-4">
                <ShieldCheck className="text-primary w-5 h-5" />
                ISO 9001:2015
              </div>
              <div className="font-bold flex gap-4">
                <ShieldCheck className="text-primary w-5 h-5" />
                ASME U.S.R STAMP
              </div>

              <div className="font-bold flex gap-4">
                <ShieldCheck className="text-primary w-5 h-5" />
                ISO 45001:2018
              </div>

              <div className="font-bold flex gap-4">
                <ShieldCheck className="text-primary w-5 h-5" />
                HTRI（Heat Transfer Research, Inc.）
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display text-4xl font-bold mb-8 leading-tight text-gray-200">
          {t("about_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {about.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm border border-gray-100">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-industrial-gray text-lg leading-relaxed pt-1 group-hover:text-industrial-blue transition-colors">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <a
          href={
            i18n.language === "jp"
              ? "https://heyzine.com/flip-book/b2c95aa0a4.html"
              : "https://heyzine.com/flip-book/6352551b0b.html"
          }
          target="_blank"
        >
          <button className="cursor-pointer mt-10 px-8 py-4 border-2 border-industrial-blue text-industrial-blue bg-transparent font-bold rounded-xl hover:bg-industrial-blue hover:!text-white transition-all">
            {t("about_button")}
          </button>
        </a>
      </div>
    </div>
  );
}
