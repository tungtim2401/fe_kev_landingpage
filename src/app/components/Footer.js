import { Factory, Globe, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

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
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center industrial-gray hover:bg-primary hover:text-white transition-all"
              >
                <Globe size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center industrial-gray hover:bg-primary hover:text-white transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Sản Phẩm</h4>
            <ul className="space-y-4 industrial-gray">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bồn chứa LPG
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bình tích áp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Bộ trao đổi nhiệt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Lò hơi công nghiệp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Hỗ Trợ</h4>
            <ul className="space-y-4 industrial-gray">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tư vấn kỹ thuật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách bảo hành
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hồ sơ năng lực
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 IndusPro Manufacturing. All rights reserved.</p>
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
