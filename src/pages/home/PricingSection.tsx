import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const tiers = [
  {
    name: 'STARTER',
    subtitle: 'Perfect for beginners',
    price: '1000',
    features: [
      'Choose 1 Program (PL or BB)',
      '4-Week Training Block',
      'Basic Nutrition Guide',
      'Exercise Video Library',
      'Email Support'
    ],
    notIncluded: ['Custom Diet Chart', 'Weekly Check-ins', 'Form Review'],
    cta: 'Get Starter',
    popular: false
  },
  {
    name: 'PRO ATHLETE',
    subtitle: 'Most popular choice',
    price: '2500',
    features: [
      'All Programs Included',
      '12-Week Periodized Plan',
      'Custom Diet Chart',
      'Macro Tracking Guide',
      'Weekly Check-ins',
      'Form Review (2/month)',
      'Priority Email Support'
    ],
    notIncluded: ['1-on-1 Coaching Calls'],
    cta: 'Get Pro',
    popular: true
  },
  {
    name: 'ELITE',
    subtitle: 'Full coaching experience',
    price: '4000',
    features: [
      'Everything in Pro',
      'Fully Personalized Program',
      'Custom Meal Plan (weekly)',
      'Unlimited Form Reviews',
      'Monthly 1-on-1 Call',
      'WhatsApp Direct Access',
      'Progress Photo Analysis'
    ],
    notIncluded: [],
    cta: 'Get Elite',
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Pricing</span>
          <h2 className="text-[3.5rem] md:text-[5rem] font-black leading-[1] mb-6 tracking-tighter uppercase">
            AFFORDABLE <br />
            <span className="text-white/20">INVESTMENT IN YOU</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto font-medium">
            No hidden fees. Cancel anytime. Real results guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-10 rounded-2xl border ${
                tier.popular 
                ? 'border-accent bg-accent text-bg-dark scale-105 z-20' 
                : 'border-white/5 bg-[#141414]'
              } transition-all duration-500`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bg-dark text-white px-6 py-1.5 rounded-full font-heading font-black uppercase text-[10px] tracking-[0.2em]">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="font-heading text-2xl font-black mb-2 uppercase tracking-tight">{tier.name}</h3>
                <p className={`${tier.popular ? 'text-bg-dark/60' : 'text-white/40'} text-xs font-bold uppercase tracking-tight mb-8`}>
                  {tier.subtitle}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black italic">৳</span>
                  <span className="text-6xl font-black italic">{tier.price}</span>
                  <span className={`${tier.popular ? 'text-bg-dark/60' : 'text-white/40'} font-bold uppercase tracking-widest text-[10px] ml-1`}>/month</span>
                </div>
              </div>

              <div className="flex-grow space-y-5 mb-12">
                <ul className="space-y-4">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-xs font-bold leading-tight">
                      <Check size={14} className={tier.popular ? 'text-bg-dark' : 'text-accent'} />
                      {feature}
                    </li>
                  ))}
                  {tier.notIncluded.map(feature => (
                    <li key={feature} className={`flex items-center gap-3 text-xs font-bold leading-tight ${tier.popular ? 'text-bg-dark/30' : 'text-white/20'}`}>
                      <X size={14} className={tier.popular ? 'text-bg-dark/30' : 'text-white/20'} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-4 rounded-full font-heading font-black text-lg uppercase tracking-tight transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center ${
                  tier.popular 
                  ? 'bg-bg-dark text-white hover:bg-black/80' 
                  : 'bg-accent text-bg-dark hover:bg-white'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
