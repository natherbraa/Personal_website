import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // استخدام EmailJS لإرسال الرسائل
    if (formRef.current) {
      emailjs.sendForm(
        'service_63srk5k', // معرف الخدمة
        'template_dmfjw5k', // معرف القالب - يجب تغييره إلى معرف القالب الخاص بك
        formRef.current,
        'KToQJ-jz5-FQTpBpx' // مفتاح API العام - يجب تغييره إلى المفتاح الخاص بك
      )
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          setLoading(false);
          setSuccess(true);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((error) => {
          console.log('FAILED...', error);
          setLoading(false);
          setError(true);
        });
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.contactTitle}
        </motion.h2>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>{t.contactSubtitle}</h3>
            <p>{t.contactText}</p>

            <div className="contact-links">
              <a href="https://t.me/nnco4" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">
                  <i className="fab fa-telegram"></i>
                </div>
                <div className="contact-text">
                  <h4>{t.telegram}</h4>
                  <p>@nnco4</p>
                </div>
              </a>

              <a href="https://www.instagram.com/nnco4/" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="contact-text">
                  <h4>{t.instagram}</h4>
                  <p>@nnco4</p>
                </div>
              </a>

              <a href="https://wa.me/9647736638090" className="contact-link" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-text">
                  <h4>{t.whatsapp}</h4>
                  <p>+9647736638090</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn" disabled={loading}>
                {loading ? t.sending : t.send}
              </button>

              {success && (
                <div className="form-message success">
                  {t.successMessage}
                </div>
              )}

              {error && (
                <div className="form-message error">
                  {t.errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
