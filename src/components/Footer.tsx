import { motion } from 'framer-motion';
import '../styles/Footer.css';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>{language === 'ar' ? 'نذير براء' : 'Nather Baraa'}</h2>
            <p>{t.aboutTitle}</p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="footer-links-column">
              <h3>{t.quickLinks}</h3>
              <ul>
                <li><a href="#hero">{t.home}</a></li>
                <li><a href="#about">{t.about}</a></li>
                <li><a href="#experience">{t.experience}</a></li>
                <li><a href="#contact">{t.contact}</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>{t.contact}</h3>
              <ul>
                <li><a href="https://t.me/nnco4" target="_blank" rel="noopener noreferrer">{t.telegram}</a></li>
                <li><a href="https://www.instagram.com/nnco4/" target="_blank" rel="noopener noreferrer">{t.instagram}</a></li>
                <li><a href="https://wa.me/9647736638090" target="_blank" rel="noopener noreferrer">{t.whatsapp}</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} {language === 'ar' ? 'نذير براء' : 'Nather Baraa'}. {t.allRightsReserved}.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
