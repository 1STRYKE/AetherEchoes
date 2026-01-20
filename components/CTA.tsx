
import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <div className="relative py-32 sm:py-56 overflow-hidden bg-[#020203]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-orange-400 font-cinematic text-[8px] sm:text-[10px] font-bold tracking-[0.6em] sm:tracking-[0.8em] mb-8 sm:mb-12 block">THE NEXT EVOLUTION</span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-cinematic font-extrabold text-white mb-10 sm:mb-16 tracking-tighter leading-none">
            SYNC YOUR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-indigo-400">SOUL</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-20 sm:mb-32">
            <motion.button
              onClick={() => alert('Invite protocol initialized. Stand by for neural uplink.')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 sm:px-20 py-5 sm:py-7 bg-white text-black font-cinematic font-bold text-[9px] sm:text-[10px] tracking-[0.4em] rounded-full"
            >
              REQUEST INVITE
            </motion.button>

            <motion.button
              onClick={() => window.open('https://store.steampowered.com', '_blank')}
              whileHover={{ scale: 1.05, borderColor: '#fb923c' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 sm:px-20 py-5 sm:py-7 border border-white/10 text-white font-cinematic font-bold text-[9px] sm:text-[10px] tracking-[0.4em] rounded-full backdrop-blur-3xl"
            >
              WISHLIST
            </motion.button>
          </div>
          
          {/* Partnership logos with enhanced visibility */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-20 opacity-60 hover:opacity-100 transition-all duration-1000 px-4">
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" className="h-6 sm:h-10 cursor-pointer" alt="Steam" onClick={() => window.open('https://store.steampowered.com', '_blank')} />
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Epic_Games_logo.svg" className="h-6 sm:h-10 invert cursor-pointer" alt="Epic" onClick={() => window.open('https://store.epicgames.com', '_blank')} />
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg" className="h-6 sm:h-10 invert cursor-pointer" alt="PlayStation" onClick={() => window.open('https://www.playstation.com', '_blank')} />
             <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg" className="h-6 sm:h-10 invert cursor-pointer" alt="Xbox" onClick={() => window.open('https://www.xbox.com', '_blank')} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTA;
