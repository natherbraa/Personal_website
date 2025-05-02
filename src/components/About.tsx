import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { t } = useLanguage();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.aboutMe}
        </motion.h2>

        <div className="about-content" ref={ref}>
          <motion.div
            className="about-text"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3>{t.aboutTitle}</h3>
            <p>
              {t.aboutP1}
            </p>
            <p>
              {t.aboutP2}
            </p>
            <p>
              {t.aboutP3}
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-title">{t.yearsExp}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-title">{t.projects}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-title">{t.clients}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-skills"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3>{t.skills}</h3>

            <div className="skill-category">
              <h4>{t.design}</h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">Photoshop</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Premiere Pro</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">After Effects</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4>{t.programming}</h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">HTML/CSS</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Flutter</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">C#</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
