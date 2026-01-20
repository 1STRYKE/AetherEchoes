
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'features', 'lore', 'showcase', 'studio'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const sectionId = id.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'STORY', href: '#about', id: 'about' },
    { name: 'MECHANICS', href: '#features', id: 'features' },
    { name: 'ARCHIVE', href: '#lore', id: 'lore' },
    { name: 'GALLERY', href: '#showcase', id: 'showcase' },
    { name: 'STUDIO', href: '#studio', id: 'studio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-black/90 backdrop-blur-3xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-cinematic text-2xl font-extrabold tracking-tighter text-white">AUVRA</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`relative text-[10px] font-cinematic font-bold tracking-[0.3em] transition-all duration-300 ${
                activeSection === link.id ? 'text-orange-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-orange-400"
                  initial={false}
                />
              )}
            </motion.button>
          ))}
          <motion.button
            onClick={() => window.open('https://store.steampowered.com', '_blank')}
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/20 text-white font-cinematic text-[9px] font-bold tracking-[0.3em] rounded-full transition-all bg-white/5 backdrop-blur-md"
          >
            PLAY NOW
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} className="text-orange-400" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/98 backdrop-blur-3xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 py-16">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-cinematic text-xl font-bold tracking-[0.4em] transition-all ${
                    activeSection === link.id ? 'text-orange-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                 onClick={() => window.open('https://store.steampowered.com', '_blank')}
                 className="mt-4 px-12 py-4 border border-white/10 text-white font-cinematic text-[10px] font-bold tracking-[0.4em] rounded-full bg-white/5"
              >
                PLAY NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
