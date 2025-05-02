import { useEffect } from 'react';
import './styles/globals.css';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  useEffect(() => {
    // Add Font Awesome for icons
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/a076d05399.js';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="app">
        <Background3D />

        <div className="content">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App
