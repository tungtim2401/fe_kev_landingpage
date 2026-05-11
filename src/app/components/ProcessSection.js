import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


export default function ProcessSection() {
  const { t } = useTranslation();

  const processSteps = [
    {
      step: "01",
      title: t("process_1"),
      desc: t("desc_process_1"),
      img: "/images/core/design.png",
    },
    {
      step: "02",
      title: t("process_2"),
      desc: t("desc_process_2"),
      img: "/images/core/đ.png",
    },
    {
      step: "03",
      title: t("process_3"),
      desc: t("desc_process_3"),
      img: "/images/core/QA.png",
    },
    {
      step: "04",
      title: t("process_4"),
      desc: t("desc_process_4"),
      img: "/images/core/16K23 Ajinomoto VN.png",
    },
  ];

  return (
    <div className="max-w-[84%] mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-display text-4xl font-bold mb-6">{t("process")}</h2>
        <p className="text-white/60 text-lg">{t("process_cap")}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
          >
            <p className="text-xl font-bold mb-4 text-primary ">
              {step.title}
            </p>
            <p
              className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: step.desc }}
            ></p>
            <a
              href="#"
              className="text-primary font-bold flex items-center gap-2 group"
            >
            </a>
          </motion.div>
        ))}
      </div>
      <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
        <p className="text-white/60 text-lg">{t("process_end")}</p>
      </div>
    </div>
  );
}
