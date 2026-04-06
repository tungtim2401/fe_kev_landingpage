import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

export default function EmployeesSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-12 -left-8 text-accent-orange/10">
                <svg
                  width="120"
                  height="100"
                  viewBox="0 0 120 100"
                  fill="currentColor"
                >
                  <path d="M30 0C13.4315 0 0 13.4315 0 30V100H50V30C50 13.4315 36.5685 0 30 0ZM100 0C83.4315 0 70 13.4315 70 30V100H120V30C120 13.4315 106.569 0 100 0Z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-industrial-blue mb-4">
                {t("ceo_title_small")}
              </h3>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-industrial-blue mb-8 leading-tight">
                <Trans
                  i18nKey="ceo_title_big"
                  components={{
                    highlight: <span className="text-accent-orange" />,
                  }}
                />
              </h2>
              <p className="text-industrial-gray text-lg leading-relaxed mb-8">
                {t("ceo_desc")}
              </p>
              <div>
                <div className="font-bold text-xl text-industrial-blue">
                  {t("ceo_name")}
                </div>
                <div className="text-industrial-gray font-medium">
                  {t("ceo_position")}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                  alt="CEO IndusPro"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 md:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1000"
                  alt="IndusPro Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-transparent" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-industrial-blue mb-8 leading-tight">
                {t("team_title")}
              </h2>
              <p className="text-industrial-gray text-lg leading-relaxed mb-6">
                {t("team_desc_1")}
              </p>
              <p className="text-industrial-gray text-lg leading-relaxed mb-10">
                {t("team_desc_1")}
              </p>
              {/* <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all shadow-lg shadow-blue-500/10">
                Khám Phá Cơ Hội Nghề Nghiệp
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
