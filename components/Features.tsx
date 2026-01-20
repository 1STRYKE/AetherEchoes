
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Fingerprint, Eye, Wind, Layers } from 'lucide-react';

const features = [
  {
    title: "Neural Weaving",
    desc: "Experience storytelling that adapts to your subconscious playstyle and ethical leanings.",
    icon: <Fingerprint className="w-5 h-5 text-orange-400" />,
    color: "group-hover:border-orange-500/30"
  },
  {
    title: "Prism View",
    desc: "Switch between the physical ruins and the Aether stream to uncover hidden paths.",
    icon: <Eye className="w-5 h-5 text-indigo-400" />,
    color: "group-hover:border-indigo-500/30"
  },
  {
    title: "Liquid Flow",
    desc: "A traversal system designed for momentum, blending parkour with digital teleportation.",
    icon: <Wind className="w-5 h-5 text-slate-400" />,
    color: "group-hover:border-slate-500/30"
  },
  {
    title: "Multi-State",
    desc: "Engage enemies in dual-realities simultaneously, doubling the tactical depth.",
    icon: <Layers className="w-5 h-5 text-rose-400" />,
    color: "group-hover:border-rose-500/30"
  }
];

const Features: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax1 = useTransform(scrollYProgress, [0.3, 0.6], [0, -100]);
  const yParallax2 = useTransform(scrollYProgress, [0.3, 0.6], [0, 150]);
  const rotateParallax = useTransform(scrollYProgress, [0.3, 0.6], [0, 45]);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 relative overflow-visible">
      {/* Dynamic Layered Parallax Background */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block">
        <motion.div 
          style={{ y: yParallax1, rotate: rotateParallax }}
          className="absolute -top-60 -right-40 w-[600px] h-[600px] border border-white/[0.03] rounded-full"
        />
        <motion.div 
          style={{ y: yParallax2 }}
          className="absolute top-40 -left-60 w-[800px] h-[800px] border border-orange-400/[0.02] rounded-full"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-32 gap-8 sm:gap-10">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-orange-400 font-cinematic text-[8px] sm:text-[9px] font-bold tracking-[0.5em] block mb-4 sm:mb-6"
          >
            TECHNOLOGY
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl font-cinematic font-bold text-white tracking-tighter"
          >
            MECHANICS OF THE STREAM
          </motion.h2>
        </div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-40 h-px bg-white/10 hidden md:block origin-left" 
        />
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: i * 0.1, 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`group relative p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-700 overflow-hidden ${f.color}`}
          >
            <div className="mb-6 sm:mb-10 p-4 sm:p-5 w-fit bg-white/[0.03] rounded-2xl sm:rounded-3xl border border-white/5 group-hover:bg-white/10 group-hover:rotate-12 transition-all duration-500">
              {f.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-cinematic font-bold text-white mb-4 sm:mb-6 tracking-tight">{f.title}</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed group-hover:text-slate-300 transition-colors">{f.desc}</p>
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
