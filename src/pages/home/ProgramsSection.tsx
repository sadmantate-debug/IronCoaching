import { motion } from 'motion/react';
import { Trophy, Target, Zap, ChevronRight, Check } from 'lucide-react';

const programs = [
  {
    id: 'powerlifting',
    name: 'Powerlifting',
    subtitle: 'SQUAT. BENCH. DEADLIFT.',
    description: 'Structured periodization programs built around the big three. Whether you\'re a raw beginner or chasing your first meet, we\'ve got you covered.',
    icon: Trophy,
    bgImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    iconBg: 'bg-yellow-500/20 text-yellow-500',
    accentColor: 'text-yellow-500',
    features: [
      'Linear & Block Periodization',
      'Meet Prep Cycles',
      'Technique Coaching',
      'Weekly Check-ins'
    ]
  },
  {
    id: 'bodybuilding',
    name: 'Bodybuilding',
    subtitle: 'BUILD. SCULPT. DOMINATE.',
    description: 'Hypertrophy-focused programs designed to maximize muscle growth, improve symmetry, and get you stage-ready or just looking your absolute best.',
    icon: Target,
    bgImage: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1200&auto=format&fit=crop',
    iconBg: 'bg-orange-600/20 text-orange-600',
    accentColor: 'text-orange-600',
    features: [
      'PPL & Upper/Lower Splits',
      'Muscle Group Specialization',
      'Progressive Overload Plans',
      'Deload Protocols'
    ]
  },
  {
    id: 'hybrid',
    name: 'Hybrid Training',
    subtitle: 'STRONG & AESTHETIC.',
    description: 'The best of both worlds — build serious strength while developing an impressive physique. Perfect for athletes who refuse to choose.',
    icon: Zap,
    bgImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    iconBg: 'bg-teal-500/20 text-teal-500',
    accentColor: 'text-teal-500',
    features: [
      'Strength + Hypertrophy Blend',
      'Flexible Scheduling',
      'Sport-Specific Variants',
      'Progress Tracking'
    ]
  }
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-32 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Programs</span>
          <h2 className="text-[3.5rem] md:text-[5rem] font-black leading-[1] mb-6 tracking-tighter uppercase max-w-2xl">
            Choose Your Path <br />
            <span className="text-white/20">to Greatness</span>
          </h2>
          <p className="text-white/40 max-w-lg font-medium leading-relaxed">
            Customized online programs for every fitness level — from first-timers to competitive athletes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[650px] overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-end p-8"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={program.bgImage} 
                  alt={program.name} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90`} />
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-12 ${program.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                  <program.icon size={24} />
                </div>
                
                <span className={`${program.accentColor} font-black uppercase tracking-[0.2em] text-[10px] block mb-2`}>{program.subtitle}</span>
                <h3 className="text-4xl font-black mb-4 uppercase tracking-tight">{program.name}</h3>
                <p className="text-white/50 mb-8 text-sm leading-relaxed">{program.description}</p>
                
                <ul className="space-y-3 mb-10">
                  {program.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-[11px] font-bold text-white/80 uppercase">
                      <Check size={14} className={program.accentColor} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact"
                  className={`flex items-center gap-2 ${program.accentColor} font-black uppercase tracking-widest text-[10px] group/btn`}
                >
                  View Plans <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
