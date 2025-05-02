import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import '../styles/Experience.css';
import { useLanguage } from '../contexts/LanguageContext';

interface ExperienceItem {
  id: number;
  title: string;
  period: string;
  description: string;
  skills: string[];
  icon: string;
}

const Experience = () => {
  const { t, language } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });

  const experienceData: ExperienceItem[] = [
    {
      id: 1,
      title: language === 'ar' ? "تصميم الصور والفيديوهات" : t.expTitle1,
      period: language === 'ar' ? "منذ 2019" : t.expPeriod1,
      description: language === 'ar' ? "خبرة في تصميم وتحرير الصور والفيديوهات باستخدام برامج Adobe المتخصصة." : t.expDesc1,
      skills: ["Adobe Photoshop", "Premiere Pro", "After Effects"],
      icon: "🎨"
    },
    {
      id: 2,
      title: language === 'ar' ? "برمجة وتصميم المواقع" : t.expTitle2,
      period: language === 'ar' ? "منذ 2020" : t.expPeriod2,
      description: language === 'ar' ? "تطوير وتصميم مواقع الويب التفاعلية باستخدام أحدث التقنيات." : t.expDesc2,
      skills: ["HTML", "CSS", "JavaScript"],
      icon: "💻"
    },
    {
      id: 3,
      title: language === 'ar' ? "تصميم وبرمجة تطبيقات الجوال" : t.expTitle3,
      period: language === 'ar' ? "منذ 2021" : t.expPeriod3,
      description: language === 'ar' ? "تطوير تطبيقات الهواتف الذكية عبر المنصات المختلفة." : t.expDesc3,
      skills: ["Flutter"],
      icon: "📱"
    },
    {
      id: 4,
      title: language === 'ar' ? "برمجة وتصميم الأنظمة الإلكترونية" : t.expTitle4,
      period: language === 'ar' ? "منذ 2023" : t.expPeriod4,
      description: language === 'ar' ? "تطوير أنظمة إدارية متكاملة مثل نظام إدارة المدارس." : t.expDesc4,
      skills: ["Visual Basic", "C#"],
      icon: "⚙️"
    }
  ];

  useEffect(() => {
    if (isInView && timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');

      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }
  }, [isInView]);

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t.experiences}
        </motion.h2>

        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-track"></div>

          {experienceData.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-skills">
                  {item.skills.map((skill, index) => (
                    <span className="skill-tag" key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#contact" className="btn">{t.contactForProjects}</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
