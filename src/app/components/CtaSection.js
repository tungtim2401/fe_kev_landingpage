import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5 bg-gray-50">
          <div className="md:col-span-2 bg-gray-50 p-12">
            <h2 className="font-display text-3xl font-bold mb-8 text-gray-200">
              {t("contact_title")}
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm industrial-gray font-medium text-gray-200">
                    {t("contact_phone")}
                  </div>
                  <div className="font-bold text-lg text-gray-300">+84 123 456 789</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm industrial-gray font-medium text-gray-200">
                    {t("contact_email")}
                  </div>
                  <div className="font-bold text-lg text-gray-300">contact@induspro.vn</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm industrial-gray font-medium text-gray-200">
                    {t("contact_address")}
                  </div>
                  <div className="font-bold text-lg text-gray-300">
                    KCN Hiệp Phước, Nhà Bè, TP. HCM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:col-span-3 p-12">
            <form className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="090..."
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Tên doanh nghiệp
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Công ty TNHH..."
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold mb-2">
                  Nội dung yêu cầu
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32"
                  placeholder="Mô tả sơ lược về nhu cầu của bạn..."
                ></textarea>
              </div>
              <div className="col-span-2">
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                  Gửi Yêu Cầu Tư Vấn
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
}
