
// import 'server-only';

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    if (dictionaries[locale]) {
        return dictionaries[locale]();
    }
    // Fallback to English if locale is not found
    return dictionaries['en']();
}
