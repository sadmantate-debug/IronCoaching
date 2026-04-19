import { motion } from 'motion/react';
import { ChevronRight, Zap, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Image / Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
          alt="Intense Powerlifter training" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-1" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-4 py-1.5 rounded-full mb-8">
              <Zap size={14} className="text-accent fill-accent" />
              <span className="text-accent font-black text-[10px] uppercase tracking-[0.2em]">
                Affordable Online Coaching
              </span>
            </div>
            
            <h1 className="text-7xl md:text-[8rem] font-black leading-[0.85] mb-10 tracking-tight flex flex-col uppercase">
              <span className="text-white">TRANSFORM</span>
              <span className="text-white">YOUR <span className="text-accent">STRENGTH</span></span>
              <span className="text-white">& PHYSIQUE</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-12 font-medium max-w-xl leading-relaxed">
              Expert-designed powerlifting, bodybuilding & nutrition programs — all at prices 
              that won't break the bank. Start your journey today.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 mb-20"
          >
            <a
              href="#contact"
              className="bg-accent text-bg-dark px-10 py-5 rounded-full font-heading font-black text-xl uppercase tracking-tight flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Start Your Journey <ChevronRight size={22} strokeWidth={3} />
            </a>
            <a
              href="#programs"
              className="group border border-white/20 text-white px-10 py-5 rounded-full font-heading font-black text-xl uppercase tracking-tight flex items-center gap-3 hover:bg-white/5 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              View Programs <ChevronRight size={22} className="opacity-50" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center gap-16"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200&auto=format&fit=crop" 
                  alt="Elite Results" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-[9px] text-accent font-black uppercase tracking-[0.2em]">Elite Standards</div>
            </div>
            <div className="flex flex-col">
              <div className="text-accent font-heading text-4xl md:text-5xl font-black">95%</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mt-1">Success Rate</div>
            </div>
            <div className="flex flex-col">
              <div className="text-white font-heading text-4xl md:text-5xl font-black">৳1000</div>
              <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mt-1">Starting Price</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 select-none">
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
