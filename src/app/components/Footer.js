import { Factory, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const project = [
    t("project_experience_list_1"),
    t("project_experience_list_2"),
    t("project_experience_list_3"),
    t("project_experience_list_4"),
  ];

  const support = [
    t("support_2"),
    t("support_3"),
    t("support_4"),
    t("support_5"),
  ];

  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo-cut.png"
                alt=""
                width={100}
                height={50}
              />
            </div>
            <p className="industrial-gray max-w-sm mb-8 leading-relaxed text-gray-200">
              {t("footer_desc")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://soltec21.co.jp/"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center industrial-gray hover:bg-primary hover:text-white transition-all"
              >
                <Globe size={20} />
              </a>
              {/* <a
                href="info@soltec-ev.com"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center industrial-gray hover:bg-primary hover:text-white transition-all"
              >
                <Mail size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t("project_experience_title")}</h4>
            <ul className="space-y-4 industrial-gray">
              {project.map((item) => (
                <li key={item}>
                  <span className="hover:text-primary transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">{t("support_1")}</h4>
            <ul className="space-y-4 industrial-gray">
              {support.map((item) => (
                <li key={item}>
                  <span className="hover:text-primary transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          {/* <p>© 2024 IndusPro Manufacturing. All rights reserved.</p> */}
          {/* <div className="flex gap-8">
            <a href="#" className="hover:text-industrial-blue">
              Điều khoản sử dụng
            </a>
            <a href="#" className="hover:text-industrial-blue">
              Chính sách bảo mật
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
