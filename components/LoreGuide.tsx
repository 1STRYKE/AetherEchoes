
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from "@google/genai";
import { Search, Loader2, Zap } from 'lucide-react';

const LoreGuide: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pulseLevel, setPulseLevel] = useState(0);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setPulseLevel(1);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: "You are the 'Auvra Chronicler'. You speak on behalf of Auvra Studio regarding their game Aether Echoes. Your tone is high-end, mysterious, poetic, and extremely professional. The setting is Neo-Kyoto, 2144. Refer to players as 'Synchronizers'. Provide extremely concise answers. Max 45 words. Never use emojis.",
          temperature: 0.9,
        }
      });
      const text = result.text || "The Aether is momentarily silent.";
      setResponse(text);
      setPulseLevel(2);
    } catch (error) {
      setResponse("Sync fractured. The Aether rejects this query.");
      setPulseLevel(0);
    } finally {
      setLoading(false);
      setTimeout(() => setPulseLevel(0), 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10">
      <div className="relative p-10 sm:p-24 rounded-[3rem] sm:rounded-[5rem] bg-[#050507] border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden group">
        
        {/* Reactive Visual Cues Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              opacity: pulseLevel === 1 ? [0.1, 0.4, 0.1] : pulseLevel === 2 ? 0.3 : 0.05,
              scale: pulseLevel === 1 ? [1, 1.2, 1] : 1
            }}
            transition={{ duration: pulseLevel === 1 ? 1.2 : 2.5, repeat: pulseLevel === 1 ? Infinity : 0, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-orange-400/20 mix-blend-overlay`}
          />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-20 text-center sm:text-left">
            <motion.div 
              animate={{ 
                boxShadow: pulseLevel === 2 ? "0 0 30px rgba(251, 146, 60, 0.4)" : "none"
              }}
              transition={{ duration: 1.2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10"
            >
              <div className={`w-3 h-3 rounded-full ${pulseLevel === 1 ? 'bg-orange-400 animate-ping' : 'bg-slate-700'}`} />
            </motion.div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-cinematic font-bold text-white tracking-tight mb-1">THE CHRONICLER</h2>
              <span className="text-[9px] font-cinematic text-orange-400 tracking-[0.8em] opacity-60">SYNAPTIC ARCHIVE LINK</span>
            </div>
          </div>
          
          <form onSubmit={handleAsk} className="relative mb-12 sm:mb-20">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Seek data from the archive..."
              className="w-full bg-white/[0.02] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] px-8 sm:px-12 py-6 sm:py-10 text-slate-200 focus:outline-none focus:border-orange-400/40 transition-all placeholder:text-slate-700 text-lg sm:text-xl font-light backdrop-blur-md"
            />
            <button
              disabled={loading}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-4 sm:p-6 bg-white text-black rounded-2xl sm:rounded-3xl hover:bg-orange-400 hover:text-white transition-all shadow-xl active:scale-95"
            >
              {loading ? <Loader2 className="animate-spin w-6 h-6 sm:w-8 sm:h-8" /> : <Search size={24} />}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {response && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="relative p-8 sm:p-12 bg-white/[0.03] border border-white/5 rounded-[2.5rem] sm:rounded-[3.5rem] backdrop-blur-3xl overflow-hidden"
              >
                <motion.div 
                   animate={{ opacity: [0.1, 0.3, 0.1] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute top-0 right-0 p-6"
                >
                  <Zap className="text-orange-400/20 w-12 h-12" />
                </motion.div>

                <p className="text-slate-300 text-xl sm:text-2xl leading-relaxed font-light relative z-10">
                  "{response}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                  <span className="text-[9px] font-cinematic text-orange-400 tracking-[0.4em]">TRANSMISSION SUCCESS</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LoreGuide;
