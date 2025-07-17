import enTranslations from "./en.json";
import esTranslations from "./es.json";

type Translations = typeof enTranslations;

const translations: Record<string, Translations> = {
  en: enTranslations,
  es: esTranslations,
};

export function useTranslations(locale: string = "en"): Translations {
  return translations[locale] || translations.en;
}

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang;
  return "en";
}

export function getLocalizedPath(path: string, locale: string): string {
  if (locale === "en") {
    return path;
  }
  return `/${locale}${path === "/" ? "" : path}`;
}

export { translations };
