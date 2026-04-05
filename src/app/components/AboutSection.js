import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  const about = [
    t("about_content_1"),
    t("about_content_2"),
    t("about_content_3"),
    t("about_content_4"),
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000"
          alt="Factory Interior"
          className="rounded-3xl shadow-2xl relative z-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -right-6 bg-industrial-blue p-8 rounded-2xl shadow-xl z-20 hidden md:block">
          <div className="flex items-center gap-4 text-white">
            <ShieldCheck className="text-primary w-10 h-10" />
            <div>
              <div className="font-bold text-xl">An Toàn Tuyệt Đối</div>
              <div className="text-white/60 text-sm">
                Kiểm định độc lập 100%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-display text-4xl font-bold mb-8 leading-tight text-gray-100">
          {t('about_title')}
        </h2>
        <div className="space-y-6 ">
          {about.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <CheckCircle2 className="text-primary shrink-0 mt-1" />
              <p className="text-lg text-gray-100">{item}</p>
            </div>
          ))}
        </div>
        {/* <button className="mt-10 px-8 py-4 border-2 border-industrial-blue text-industrial-blue font-bold rounded-xl hover:bg-industrial-blue hover:text-white transition-all">
          Tìm Hiểu Thêm Về Chúng Tôi
        </button> */}
      </div>
    </div>
  );
}
