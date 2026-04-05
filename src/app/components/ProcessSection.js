import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ProcessSection() {
  const { t } = useTranslation();

  const processSteps = [
    {
      step: "01",
      title: t("process_1"),
      desc: t("desc_process_1"),
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600",
    },
    {
      step: "02",
      title: t("process_2"),
      desc: t("desc_process_2"),
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
    },
    {
      step: "03",
      title: t("process_3"),
      desc: t("desc_process_3"),
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
    },
    {
      step: "04",
      title: t("process_4"),
      desc: t("desc_process_4"),
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-display text-4xl font-bold mb-6">{t("process")}</h2>
        <p className="text-white/60 text-lg">{t("process_desc")}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {processSteps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-blue to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-5xl font-display font-bold text-primary/30 mb-2">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed px-2">{step.desc}</p>
            {idx < 3 && (
              <div className="hidden lg:block absolute top-1/3 -right-4 z-20">
                <ArrowRight className="text-primary w-8 h-8" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
