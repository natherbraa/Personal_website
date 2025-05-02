import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import '../styles/Hero.css';
import profileImage from '/profile.jpg';
import { useLanguage } from '../contexts/LanguageContext';

// 3D Model Component
const Model = () => {
  const { language } = useLanguage();
  // كرة خضراء ثلاثية الأبعاد
  return (
    <mesh rotation={[0, language === 'ar' ? 0 : Math.PI, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#1abc9c"
        roughness={0.2}
        metalness={0.8}
        emissive="#1abc9c"
        emissiveIntensity={0.4}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

// Floating Animation Component
const FloatingAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.position, {
        y: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(ref.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  return <group ref={ref}>{children}</group>;
};

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.greeting} <span className="highlight">{language === 'ar' ? 'نذير براء' : 'Nather Baraa'}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t.bio}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#experience" className="btn">{t.viewWorks}</a>
            <a href="#contact" className="btn btn-outline">{t.contactMe}</a>
          </motion.div>
        </div>

        <div className="hero-3d">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1abc9c" />
            <FloatingAnimation>
              <Model />
            </FloatingAnimation>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
            <Environment preset="city" />
          </Canvas>

          <div className="profile-image-container">
            <img src={profileImage} alt="صورة نذير براء" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-text">{t.scrollDown}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
