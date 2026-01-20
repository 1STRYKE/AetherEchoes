
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CharReveal: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.02,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0.1, 0.3], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-16 md:gap-32 items-center">
      <motion.div
        style={{ rotateY: rotate, opacity }}
        className="perspective-1000"
      >
        <span className="text-orange-400 font-cinematic text-[8px] sm:text-[9px] font-bold tracking-[0.5em] block mb-6 sm:mb-8">
          <CharReveal text="PHILOSOPHY" />
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-cinematic font-extrabold mb-8 sm:mb-12 text-white leading-[0.9]">
          <CharReveal text="BEYOND THE" /><br />
          <CharReveal text="STATIC" delay={0.3} />
        </h2>
        <div className="space-y-6 sm:space-y-10 text-slate-400 text-base sm:text-xl font-light leading-relaxed">
          <p>
            <CharReveal text="At Auvra, we don't just build games; we weave digital tapestries. Aether Echoes represents our obsession with the visceral and the ethereal." delay={0.6} />
          </p>
          <p>
            <CharReveal text="In the ruins of Neo-Kyoto, memory is the only currency left. Explore a world where the laws of physics are merely suggestions from a fractured AI." delay={1} />
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="pt-6 sm:pt-10 flex items-center gap-6 sm:gap-8"
          >
            <div className="h-px w-16 sm:w-24 bg-orange-400/30" />
            <motion.p 
              whileHover={{ x: 10, color: "#fb923c" }}
              className="text-orange-400 font-cinematic text-[9px] sm:text-[10px] font-bold tracking-[0.3em] cursor-pointer"
            >
              CRAFTING PROCESS
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="absolute -inset-10 sm:-inset-20 bg-indigo-500/10 blur-[100px] sm:blur-[150px] rounded-full opacity-30" />
        <div className="relative rounded-[2.5rem] sm:rounded-[4.5rem] overflow-hidden border border-white/5 aspect-[4/5] shadow-2xl max-w-sm mx-auto md:max-w-none">
           <motion.img 
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1974&auto=format&fit=crop" 
            alt="Cinematic Character" 
            className="w-full h-full object-cover transition-all duration-1000 saturate-[0.8] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-80" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 p-6 sm:p-10 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] sm:rounded-[2.5rem]"
          >
            <p className="text-[7px] sm:text-[8px] font-cinematic text-orange-400 tracking-[0.5em] mb-2 sm:mb-4 font-bold uppercase">Archive Entry 001</p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light opacity-80">"We are the architects of the beautiful void."</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
