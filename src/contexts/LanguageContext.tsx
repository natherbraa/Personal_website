import React, { createContext, useState, useContext } from 'react';
import { ar } from '../translations/ar';
import { en } from '../translations/en';

type Translations = typeof ar;

interface LanguageContextType {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: Translations;
}

const defaultContext: LanguageContextType = {
  language: 'ar',
  setLanguage: () => {},
  t: ar
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [translations, setTranslations] = useState<Translations>(ar);

  const handleSetLanguage = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    setTranslations(lang === 'ar' ? ar : en);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
