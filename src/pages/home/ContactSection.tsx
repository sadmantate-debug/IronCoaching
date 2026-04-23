import { motion } from 'motion/react';
import { Mail, Instagram, Copy, AlertCircle, Check } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('ironcoaching77@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black tracking-tighter text-white">IRON</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic text-white line-clamp-2">
              READY TO <br />
              <span className="text-accent underline decoration-white/10 underline-offset-[16px]">EVOLVE?</span>
            </h2>
            <p className="text-xl text-white/50 mb-12 font-medium leading-relaxed max-w-md">
              Don't settle for average. Take the first step towards elite performance today. 
              Our team will reach out within 24 hours.
            </p>

            <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                    <a 
                      href="mailto:ironcoaching77@gmail.com" 
                      className="w-16 h-16 border border-white/10 flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-bg-dark outline-none focus:ring-2 focus:ring-accent"
                    >
                        <Mail size={24} />
                    </a>
                    <div className="flex-grow">
                        <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Email Us</div>
                        <a href="mailto:ironcoaching77@gmail.com" className="text-xl font-heading font-black uppercase tracking-tight hover:text-accent transition-colors">IRONCOACHING77@GMAIL.COM</a>
                    </div>
                </div>

                <div className="flex items-center gap-6 group">
                    <a 
                      href="https://www.instagram.com/sadm4xn/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 border border-white/10 flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-bg-dark outline-none focus:ring-2 focus:ring-accent"
                    >
                        <Instagram size={24} />
                    </a>
                    <div className="flex-grow">
                        <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Follow Us</div>
                        <a 
                          href="https://www.instagram.com/sadm4xn/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl font-heading font-black uppercase tracking-tight hover:text-accent transition-colors"
                        >
                          @sadm4xn
                        </a>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Form Side / Instructions Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface p-12 border border-white/5 relative flex flex-col justify-center"
          >
            <div className="p-8 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-accent text-[12px] font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
                    <AlertCircle size={18} /> How to Join
                </p>
                <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed italic">
                    "Please email us your full name, your fitness goals, and the program package you would like to choose."
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <button 
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-3 bg-accent text-bg-dark px-8 py-4 rounded-full font-heading font-black text-xl tracking-tight hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
                  >
                    {copied ? 'Copied!' : 'ironcoaching77@gmail.com'} 
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
            </div>

            <div className="absolute -bottom-px -right-px w-20 h-20 bg-gradient-to-br from-transparent to-accent/10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
