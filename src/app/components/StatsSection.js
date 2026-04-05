import { useTranslation } from "react-i18next";

export default function StatsSection() {
  const { t } = useTranslation();
  const STARTS = [
    { label: t("start_1"), value: "15+" },
    { label: t("start_2"), value: "500+" },
    { label: t("start_3"), value: "50+" },
    { label: t("start_4"), value: "200+" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STARTS.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-gray-200 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-300 font-medium">
              {t(`${stat.label}`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
