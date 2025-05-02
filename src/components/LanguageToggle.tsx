import { motion } from 'framer-motion';
import '../styles/LanguageToggle.css';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();
  const isEnglish = language === 'en';

  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(isEnglish ? 'ar' : 'en');
  };

  return (
    <motion.button
      className="language-toggle"
      onClick={toggleLanguage}
      whileTap={{ scale: 0.9 }}
      title={isEnglish ? t.changeToArabic : t.changeToEnglish}
    >
      <span className="lang-text">{isEnglish ? "AR" : "EN"}</span>
    </motion.button>
  );
};

export default LanguageToggle;
