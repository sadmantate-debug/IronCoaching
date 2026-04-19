import { motion } from 'motion/react';
import { Scale, Leaf, Heart, UtensilsCrossed, ChevronRight, BarChart3 } from 'lucide-react';

export default function DietSection() {
  return (
    <section id="diet" className="py-32 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[5/6] overflow-hidden rounded-2xl border border-white/10 group bg-surface">
              <img 
                src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1200&auto=format&fit=crop" 
                alt="High-contrast colorful meal prep containers" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Macros Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-black/95 backdrop-blur-md p-7 border border-white/5 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#3B4214] rounded-lg flex items-center justify-center">
                    <BarChart3 size={16} className="text-[#D4E91C]" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-white tracking-tight">Sample Daily Macros</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-[#D4E91C] mb-1 leading-none tracking-tighter">180<span className="text-xs ml-0.5 opacity-80">g</span></div>
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Protein</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-[#FB923C] mb-1 leading-none tracking-tighter">280<span className="text-xs ml-0.5 opacity-80">g</span></div>
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Carbs</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-[#22D3EE] mb-1 leading-none tracking-tighter">70<span className="text-xs ml-0.5 opacity-80">g</span></div>
                    <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Fats</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Nutrition Programs</span>
              <h2 className="text-[4rem] md:text-[5.5rem] font-black leading-[0.85] mb-8 tracking-tighter uppercase">
                NUTRITION THAT <br />
                <span className="text-white/20">FUELS RESULTS</span>
              </h2>
              <p className="text-base md:text-lg text-white/50 font-medium leading-relaxed max-w-xl">
                You can't out-train a bad diet. Our personalized nutrition plans are built 
                around your goals, lifestyle, and food preferences — no cookie-cutter nonsense. 
                Every plan includes macro targets, meal timing, and flexible food choices so you 
                can actually stick to it.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                { 
                  title: 'Powerlifting Nutrition', 
                  icon: Scale, 
                  iconColor: 'bg-accent/20 text-accent',
                  desc: 'High-calorie, high-protein plans optimized for strength gains and recovery. Bulk or cut — we\'ll dial in your macros.' 
                },
                { 
                  title: 'Bodybuilding Diet', 
                  icon: Leaf, 
                  iconColor: 'bg-orange-500/20 text-orange-500',
                  desc: 'Precision macro tracking, meal timing, and flexible dieting strategies to maximize muscle while minimizing fat.' 
                },
                { 
                  title: 'Cutting & Shredding', 
                  icon: Heart, 
                  iconColor: 'bg-emerald-500/20 text-emerald-500',
                  desc: 'Caloric deficit plans that preserve muscle mass while stripping body fat — get lean without losing your gains.' 
                },
                { 
                  title: 'Meal Prep Guides', 
                  icon: UtensilsCrossed, 
                  iconColor: 'bg-yellow-500/20 text-yellow-500',
                  desc: 'Weekly meal prep templates with shopping lists, recipes, and portion guides. Eat right without spending hours in the kitchen.' 
                }
              ].map((item) => (
                <li key={item.title} className="bg-[#141414] border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.iconColor}`}>
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-heading font-black uppercase text-base mb-3 leading-tight tracking-tight">{item.title}</h4>
                  <p className="text-white/30 text-[11px] font-medium leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ul>

            <a 
              href="#contact"
              className="bg-accent text-bg-dark px-10 py-5 rounded-full font-heading font-black text-xl uppercase tracking-tighter hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 w-fit"
            >
              Explore Meal Plans <ChevronRight size={20} strokeWidth={3} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
