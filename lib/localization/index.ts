import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from './en/translations.json';

export const initi18n = () => {
  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTranslation,
      },
    },
  });
};

export default i18next;
