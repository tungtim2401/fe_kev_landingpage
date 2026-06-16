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
  const [lang, setLang] = useState("vi");

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm"
        : "bg-transparent",
    )}
  >
    <div className="max-w-[88rem] mx-auto px-6 flex justify-between items-center">
      {/* Logo */}
        <Image
          src="/images/logo_new.png"
          alt="Hero"
          width={300}
          height={70}
          className="w-auto h-10 md:h-20 object-contain"
          priority
        />

      {/* Desktop Menu */}
      <div
        className={cn(
          "hidden md:flex items-center gap-8 font-medium transition-colors duration-300",
          scrolled ? "text-industrial-gray" : "text-white/90",
        )}
      >
        <Link
          className="hover:text-primary transition-colors text-[16px]"
          href="#ceo"
          onClick={() => handleScroll("ceo")}
        >
          {t("nav_header_1")}
        </Link>

        <Link
          className="hover:text-primary transition-colors text-[16px]"
          href="#process"
          onClick={() => handleScroll("process")}
        >
          {t("nav_header_2")}
        </Link>

        <Link
          className="hover:text-primary transition-colors text-[16px]"
          href="#services"
          onClick={() => handleScroll("services")}
        >
          {t("nav_header_3")}
        </Link>

        <Link
          className="hover:text-primary transition-colors text-[16px]"
          href="#products"
          onClick={() => handleScroll("products")}
        >
          {t("nav_header_4")}
        </Link>

        <Link
          className="hover:text-primary transition-colors text-[16px]"
          href="#team"
          onClick={() => handleScroll("team")}
        >
          {t("nav_header_5")}
        </Link>

        {/* CTA */}
        <Link
          href="#contact"
          className="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-red-600 transition-all shadow-lg"
          onClick={() => handleScroll("contact")}
        >
          {t("nav_header_6_highlight")}
        </Link>

        {/* Language */}
      </div>
        <Dropdown
          menu={{ items: items_lang, onClick: onChangeLang }}
          placement="bottomRight"
        >
          <div
            className={cn(
              "flex gap-2 items-center justify-center hover:text-primary transition-colors cursor-pointer px-2 py-1 rounded-md border border-transparent hover:border-primary/20",
              scrolled
                ? "text-industrial-gray"
                : "text-white/90",
            )}
          >
            <GlobalOutlined />
            <span className="text-sm font-bold">
              {t(`${lang.toLocaleUpperCase()}`)}
            </span>
          </div>
        </Dropdown>

      {/* Mobile Toggle */}
      <button
        className={cn(
          "md:hidden transition-colors",
          scrolled ? "text-industrial-blue" : "text-white",
        )}
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
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col gap-6 text-xl font-bold md:hidden overflow-y-auto"
      >
        <a
          href="#ceo"
          onClick={() => setIsMenuOpen(false)}
          className="text-industrial-blue hover:text-primary transition-colors"
        >
          {t("nav_header_1")}
        </a>

        <a
          href="#process"
          onClick={() => setIsMenuOpen(false)}
          className="text-industrial-blue hover:text-primary transition-colors"
        >
          {t("nav_header_2")}
        </a>

        <a
          href="#services"
          onClick={() => setIsMenuOpen(false)}
          className="text-industrial-blue hover:text-primary transition-colors"
        >
          {t("nav_header_3")}
        </a>

        <a
          href="#products"
          onClick={() => setIsMenuOpen(false)}
          className="text-industrial-blue hover:text-primary transition-colors"
        >
          {t("nav_header_4")}
        </a>

        <a
          href="#team"
          onClick={() => setIsMenuOpen(false)}
          className="text-industrial-blue hover:text-primary transition-colors"
        >
          {t("nav_header_5")}
        </a>

        <a
          href="#contact"
          className="mt-2 text-primary"
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
