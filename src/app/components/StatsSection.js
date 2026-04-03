import { STARTS } from "@/constants/config";
import { useTranslation } from "react-i18next";

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STARTS.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-industrial-blue mb-2">
              {stat.value}
            </div>
            <div className="text-industrial-gray font-medium">
              {t(`${stat.label}`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
