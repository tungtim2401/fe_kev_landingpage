import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute top-0 right-0 h-full bg-primary/10 skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-5 bg-gray-50">
          <div className="md:col-span-12 bg-gray-50 p-12">
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
                  <div className="font-bold text-lg text-gray-300">
                    (84.251)383-5641
                  </div>
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
                  <div className="font-bold text-lg text-gray-300">
                    info@soltec-ev.com
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm industrial-gray font-medium text-gray-200">
                    {t("contact_address")}
                  </div>
                  <div className="font-bold text-lg text-gray-300">
                    {t("address_detail")}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                  <Globe size={24} />
                </div>
                <div className="flex-1">
                  <div className="text-sm industrial-gray font-medium text-gray-200">
                    {t("contact_branch")}
                  </div>
                  <div className="font-bold text-lg text-gray-300 flex flex-col gap-2">
                    <a
                      href="https://soltec21.co.jp"
                      className="hover:text-primary transition-colors"
                    >
                      https://soltec21.co.jp
                    </a>
                    <a
                      href="https://www.soltecvn.com"
                      className="hover:text-primary transition-colors"
                    >
                      https://www.soltecvn.com
                    </a>
                    <a
                      href="https://soltec-hn.com"
                      className="hover:text-primary transition-colors"
                    >
                      https://soltec-hn.com
                    </a>
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
