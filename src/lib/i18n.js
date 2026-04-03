"use client";
// i18n.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import các file ngôn ngữ bạn vừa tạo
import viTranslation from "../locales/vi.json";
import enTranslation from "../locales/en.json";
import jpTranslation from "../locales/jp.json";

i18next
  .use(initReactI18next) // Bắt buộc: Truyền instance này cho react-i18next
  .init({
    resources: {
      vi: { translation: viTranslation },
      en: { translation: enTranslation },
      jp: { translation: jpTranslation },
    },
    lng: "vi", // Ngôn ngữ mặc định
    fallbackLng: "en", // Nếu không tìm thấy text tiếng Việt, sẽ dùng tiếng Anh
    interpolation: {
      escapeValue: false, // React đã tự động chống lỗi XSS nên không cần escape
    },
  });

export default i18next;
