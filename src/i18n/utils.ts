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

export function replacePlaceholders(
  text: string,
  replacements: Record<string, { value: string; href?: string }>
): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    const replacement = replacements[key];
    if (!replacement) return match;
    
    if (replacement.href) {
      return `<a href="${replacement.href}" target="_blank" rel="noopener noreferrer" class="text-rose hover:underline">${replacement.value}</a>`;
    }
    return replacement.value;
  });
}

export { translations };
