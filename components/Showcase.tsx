
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'NEON DISTRICT', img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop', tag: 'ENVIRONMENT' },
  { id: 2, title: 'BOSS BATTLE', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop', tag: 'COMBAT' },
  { id: 3, title: 'VOID RUNNER', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop', tag: 'CHARACTER' },
  { id: 4, title: 'HIDDEN TEMPLE', img: 'https://images.unsplash.com/photo-1506399558188-daf6f8e4f394?q=80&w=1974&auto=format&fit=crop', tag: 'EXPLORATION' },
  { id: 5, title: 'DATA HEIST', img: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=1968&auto=format&fit=crop', tag: 'MISSION' },
];

const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && sliderRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const sliderWidth = sliderRef.current.scrollWidth;
        setDragConstraints({
          left: -(sliderWidth - containerWidth + 80), // 80 is roughly the padding
          right: 0
        });
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-12 sm:mb-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div>
          <span className="text-orange-400 font-cinematic text-[8px] sm:text-[9px] font-bold tracking-[0.6em] block mb-4 sm:mb-6">ARCHIVE GALLERY</span>
          <h2 className="text-4xl sm:text-5xl font-cinematic font-bold text-white tracking-tight">VISUALIZING THE VOID</h2>
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-[8px] sm:text-[10px] font-cinematic tracking-widest uppercase">
          <div className="w-8 sm:w-12 h-px bg-white/20" />
          DRAG TO EXPLORE
        </div>
      </div>

      <motion.div 
        ref={sliderRef}
        drag="x"
        dragConstraints={dragConstraints}
        className="flex gap-6 sm:gap-10 px-6 sm:px-10 cursor-grab active:cursor-grabbing w-max"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex-shrink-0 w-[280px] sm:w-[450px] md:w-[600px] relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border border-white/5"
          >
            <motion.img 
              src={item.img} 
              alt={item.title}
              className="w-full h-[350px] sm:h-[500px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110 saturate-[0.7] group-hover:saturate-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
              <span className="text-orange-400 text-[8px] sm:text-[10px] font-cinematic tracking-[0.6em] mb-2 sm:mb-4 block font-bold">{item.tag}</span>
              <h3 className="text-2xl sm:text-3xl font-cinematic font-bold text-white mb-2 sm:mb-4 tracking-tighter">{item.title}</h3>
              <div className="w-0 group-hover:w-full h-px bg-white/20 transition-all duration-700" />
            </div>
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-500 rounded-[2rem] sm:rounded-[3rem]" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Showcase;
