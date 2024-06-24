import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import arabic from '@/localization/arabic.json'
import english from '@/localization/english.json'
import french from '@/localization/french.json'
import hindi from '@/localization/hindi.json'
import portugese from '@/localization/portugese.json'
import italian from '@/localization/italian.json'
import Russian from '@/localization/russian.json'
import Chinese from '@/localization/chinese.json'
import spanish from '@/localization/spanish.json'


const resources = {
    en: { translation: english},
    fr: { translation: french },
    hi: { translation: hindi },
    es: { translation: spanish },
    ar: { translation: arabic },
    zh: { translation: Chinese },
    pt: { translation: portugese },
    ru: { translation: Russian },
    it: { translation: italian }
  };


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage','navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage','cookie']
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
