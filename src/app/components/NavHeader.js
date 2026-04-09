"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { useEffect, useState, useTransition } from "react";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";
import Link from "next/link";

const img_flag = {
  vi: "/images/vietnam.png",
  en: "/images/england.png",
  jp: "/images/japan.png",
};

export function NavHeader({
  setIsMenuOpen,
  isMenuOpen,
  scrolled,
  handleScroll,
}) {
  const { t, i18n } = useTranslation();

  const items_lang = [
    {
      key: "vi",
      label: (
        <div className="flex gap-4">
          <Image src={img_flag.vi} alt="" width={22} height={18} />
          {t("lang_vi")}
        </div>
      ),
    },
    {
      key: "en",
      label: (
        <div className="flex gap-4">
          <Image src={img_flag.en} alt="" width={22} height={18} />
          {t("lang_en")}
        </div>
      ),
    },
    {
      key: "jp",
      label: (
        <div className="flex gap-4">
          <Image src={img_flag.jp} alt="" width={22} height={18} />
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
      setLang(lang);
      i18n.changeLanguage(lang);
    }
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 px-8 py-4",
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo_new.png"
              alt="Hero"
              width={300}
              height={50}
            />
          </div>

          {/* Desktop Menu */}
          <div
            className={cn(
              "hidden md:flex items-center gap-8 font-medium",
              scrolled ? "text-gray-200" : "text-white/90",
            )}
          >
            <Link
              className="hover:text-primary transition-colors text-[18px]"
              href="#nav_header_1"
              onClick={() => handleScroll("nav_header_1")}
            >
              {t("nav_header_1")}
            </Link>
            <Link
              className="hover:text-primary transition-colors text-[18px]"
              href="#nav_header_2"
              onClick={() => handleScroll("nav_header_2")}
            >
              {t("nav_header_2")}
            </Link>
            <Link
              className="hover:text-primary transition-colors text-[18px]"
              href="#nav_header_3"
              onClick={() => handleScroll("nav_header_3")}
            >
              {t("nav_header_3")}
            </Link>
            <Link
              className="hover:text-primary transition-colors text-[18px]"
              href="#nav_header_4"
              onClick={() => handleScroll("nav_header_4")}
            >
              {t("nav_header_4")}
            </Link>
            <Link
              className="hover:text-primary transition-colors text-[18px]"
              href="#nav_header_5"
              onClick={() => handleScroll("nav_header_5")}
            >
              {t("nav_header_5")}
            </Link>
            <Link
              href="#nav_header_6_highlight"
              className="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-red-600 transition-all"
              onClick={() => handleScroll("nav_header_6_highlight")}
            >
              {t("nav_header_6_highlight")}
            </Link>
            <Dropdown
              menu={{ items: items_lang, onClick: onChangeLang }}
              placement="bottom"
            >
              <div
                className={cn(
                  "flex gap-2 items-center justify-center hover:text-primary",
                  scrolled ? "industrial-gray" : "text-white/90",
                )}
              >
                <GlobalOutlined />
                {t(`${lang.toLocaleUpperCase()}`)}
              </div>
            </Dropdown>
          </div>

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
              {t("nav_header_1")}
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              {t("nav_header_2")}
            </a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>
              {t("nav_header_3")}
            </a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>
              {t("nav_header_4")}
            </a>
            <a href="#process" onClick={() => setIsMenuOpen(false)}>
              {t("nav_header_5")}
            </a>
            <a
              href="#contact"
              className="text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav_header_6_highlight")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
