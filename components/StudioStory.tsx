
import React from 'react';
import { motion } from 'framer-motion';

const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.008,
      delayChildren: 0.2,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 5, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      // Fix: Cast easing array to [number, number, number, number] to match BezierDefinition type
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const CharReveal: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.span
      variants={sentenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const events = [
  { year: '2021', title: 'THE GENESIS', desc: 'Auvra was founded in the silence of a Neo-Kyoto winter with one goal: digital transcendence.' },
  { year: '2022', title: 'THE PROTOTYPE', desc: 'Developed the first neural-reactive narrative engine, bridging the gap between player and code.' },
  { year: '2023', title: 'THE EXPANSION', desc: 'Grew into a global collective of artists, poets, and engineers dedicated to the Auvra ethos.' },
  { year: '2024', title: 'THE ECHO', desc: 'Aether Echoes launches. Our first message to the world, sent from the beautiful void.' }
];

const StudioStory: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-10">
      <div className="text-center mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-orange-400 font-cinematic text-[9px] font-bold tracking-[0.6em] block mb-6"
        >
          OUR LINEAGE
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl font-cinematic text-white font-extrabold tracking-tighter"
        >
          AUVRA STUDIO
        </motion.h2>
      </div>

      <div className="relative">
        {/* Timeline Central Line */}
        <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-400/20 to-transparent -translate-x-1/2" />

        <div className="space-y-24">
          {events.map((ev, i) => (
            <motion.div
              key={ev.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className={`p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-sm relative group hover:border-orange-400/20 transition-all duration-500 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black text-white/5 mb-4 block group-hover:text-orange-400/10 transition-colors tracking-tighter"
                  >
                    {ev.year}
                  </motion.span>
                  <h3 className="text-xl font-cinematic text-orange-400/90 mb-6 font-bold tracking-widest uppercase">
                    <CharReveal text={ev.title} />
                  </h3>
                  <div className="text-slate-400 font-light leading-relaxed text-lg overflow-hidden">
                    <CharReveal text={ev.desc} />
                  </div>
                </div>
              </div>
              
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="hidden md:block w-4 h-4 bg-orange-400 rounded-full border-4 border-[#020203] z-10 shadow-[0_0_20px_rgba(251,146,60,0.4)]" 
              />
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioStory;
