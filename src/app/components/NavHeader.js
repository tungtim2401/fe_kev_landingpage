import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState, useTransition } from "react";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const img_flag = {
  vi: "/images/Flag_Vietnam.svg",
  en: "/images/Flag_England.svg",
  jp: "/images/Flag_Japan.svg",
};

export function NavHeader({ setIsMenuOpen, isMenuOpen, scrolled }) {
  const { t, i18n } = useTranslation();

  const items = [
    {
      key: "vi",
      label: (
        <div className="flex gap-4">
          <Image src={img_flag.vi} alt="" width={20} height={20} />
          {t("lang_vi")}
        </div>
      ),
    },
    {
      key: "en",
      label: (
        <div className="flex gap-4">
          <Image src={img_flag.en} alt="" width={20} height={20} />
          {t("lang_en")}
        </div>
      ),
    },
    {
      key: "jp",
      label: (
        <div className="flex gap-4">
          <Image src={img_flag.jp} alt="" width={20} height={20} />
          {t("lang_ja")}
        </div>
      ),
    },
  ];
  const [lang, setLang] = useState("en");

  const onChangeLang = async (e) => {
    i18n.changeLanguage(e.key);
    setLang(e.key);

    // (Tùy chọn) Lưu vào localStorage để lần sau vào trang web vẫn nhớ ngôn ngữ này
    localStorage.setItem("lng", e.key);
  };

  useEffect(() => {
    const lang = localStorage.getItem("lng");
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-cut.png"
              alt="Hero"
              width={100}
              height={50}
            />
          </div>

          {/* Desktop Menu */}
          <div
            className={cn(
              "hidden md:flex items-center gap-8 font-medium",
              scrolled ? "text-industrial-gray" : "text-white/90",
            )}
          >
            <span className="hover:text-primary transition-colors">
              {t("about")}
            </span>
            <span
              href="#services"
              className="hover:text-primary transition-colors"
            >
              {t("services")}
            </span>
            <span className="hover:text-primary transition-colors">
              {t("projects")}
            </span>
            <span className="hover:text-primary transition-colors">
              {t("news")}
            </span>
            <span className="hover:text-primary transition-colors">
              {t("careers")}
            </span>
            <span className="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">
              {t("contact")}
            </span>
          </div>
          <Dropdown menu={{ items, onClick: onChangeLang }} placement="bottom">
            <Button>{t(`${lang}`)}</Button>
          </Dropdown>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 text-xl font-bold md:hidden"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              Về chúng tôi
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Dịch vụ
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              Sản phẩm
            </a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>
              Quy trình
            </a>
            <a
              href="#contact"
              className="text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ ngay
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
