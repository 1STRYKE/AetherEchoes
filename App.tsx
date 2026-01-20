
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Showcase from './components/Showcase';
import StudioStory from './components/StudioStory';
import LoreGuide from './components/LoreGuide';
import CTA from './components/CTA';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020203] text-slate-200">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020203]"
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 border-t border-orange-400 rounded-full mb-6"
              />
              <span className="font-cinematic text-[9px] tracking-[0.6em] text-orange-400/80">AUVRA STUDIO</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <section id="hero">
              <Hero />
            </section>
            
            <section id="about" className="py-20 sm:py-32">
              <About />
            </section>

            <section id="features" className="py-20 sm:py-32 bg-slate-950/20">
              <Features />
            </section>

            <section id="lore" className="py-20 sm:py-32">
              <LoreGuide />
            </section>

            <section id="showcase" className="py-20 sm:py-32 bg-slate-900/10">
              <Showcase />
            </section>

            <section id="studio" className="py-20 sm:py-32">
              <StudioStory />
            </section>

            <section id="download">
              <CTA />
            </section>
          </main>

          <footer className="py-12 sm:py-16 px-6 border-t border-white/5 text-center text-slate-600 text-[8px] sm:text-[10px] font-cinematic tracking-[0.2em]">
            <p>&copy; 2024 AUVRA STUDIO. ALL RIGHTS RESERVED. CRAFTED IN NEO-KYOTO.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
};

export default App;
