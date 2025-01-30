// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import plTranslation from "./locales/pl.json";

const resources = {
  en: { translation: enTranslation },
  pl: { translation: plTranslation },
};
if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("language") || "pl",
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
