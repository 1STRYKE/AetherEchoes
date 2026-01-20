
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, MoveRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Background - Black Abstract Line Art Curve Line Aesthetic */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020203] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" 
          alt="Black Abstract Curved Line Art" 
          className="w-full h-full object-cover filter grayscale contrast-[1.4] opacity-50 scale-110"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 text-center px-6 max-w-full flex flex-col items-center justify-center h-full pt-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-4 sm:mb-8"
        >
          <span className="text-orange-400 font-cinematic text-[8px] sm:text-[10px] font-bold tracking-[0.6em] sm:tracking-[1em] block opacity-80 uppercase">AUVRA STUDIO PRESENTS</span>
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[13rem] font-cinematic font-extrabold text-white leading-[0.85] mb-8 sm:mb-12 tracking-tighter text-center">
          AETHER<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500">ECHOES</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-slate-400 text-sm sm:text-base md:text-xl font-light mb-10 sm:mb-16 max-w-sm sm:max-w-2xl mx-auto tracking-widest leading-relaxed uppercase"
        >
          An ethereal odyssey across the silk-thin divide of consciousness.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full max-w-xs sm:max-w-none">
          <motion.button
            onClick={() => scrollToSection('lore')}
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 sm:px-16 py-4 sm:py-5 bg-transparent border border-white/20 text-white font-cinematic font-bold text-[9px] sm:text-[10px] tracking-[0.4em] rounded-full transition-all backdrop-blur-md"
          >
            <Play size={12} fill="currentColor" />
            ENTER THE STREAM
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ x: 8 }}
            className="flex items-center gap-3 text-white/40 hover:text-orange-400 font-cinematic text-[9px] sm:text-[10px] font-bold tracking-[0.4em] transition-all group"
          >
            THE ODYSSEY
            <MoveRight size={16} className="transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>
      </motion.div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-8 sm:bottom-16 w-full px-10 sm:px-20 flex justify-between items-end z-20 opacity-30 pointer-events-none">
        <div className="flex flex-col gap-2">
          <div className="w-8 h-[1px] bg-white/40" />
          <span className="font-cinematic text-[6px] sm:text-[8px] tracking-[0.8em] text-white">REMNANT V.04</span>
        </div>
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-right"
        >
          <span className="font-cinematic text-[6px] sm:text-[8px] tracking-[0.6em] text-orange-400 uppercase">Synchronizing...</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
