import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Choose your battlefield...',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Choose your battlefield...', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
                    <div className="w-16 h-16 border border-white/10 flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-bg-dark">
                        <Mail size={24} />
                    </div>
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

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-surface p-12 border border-white/5 relative"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} className="text-accent" />
                </div>
                <h3 className="text-4xl font-black uppercase italic mb-4">Mission Received</h3>
                <p className="text-white/50 font-medium max-w-xs">Your briefing has been sent. Check your secure comms within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-accent font-black uppercase tracking-[0.2em] text-[10px] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Full Name</label>
                      <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Wick"
                          className="w-full bg-bg-dark/50 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors text-white font-medium"
                      />
                  </div>
                  <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Email Address</label>
                      <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-bg-dark/50 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors text-white font-medium"
                      />
                  </div>
                  <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Primary Goal</label>
                      <select 
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-bg-dark/50 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors text-white/60 font-medium appearance-none"
                      >
                          <option disabled>Choose your battlefield...</option>
                          <option>Absolute Strength</option>
                          <option>Elite Aesthetics</option>
                          <option>Metabolic Fire</option>
                          <option>Tactical Athlete</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Your Message</label>
                      <textarea 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your mission..."
                          className="w-full bg-bg-dark/50 border border-white/10 px-6 py-4 outline-none focus:border-accent transition-colors text-white font-medium resize-none"
                      />
                  </div>
                  
                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-tight">
                      <AlertCircle size={14} /> Failed to transmit briefing. Try again.
                    </div>
                  )}

                  <button 
                    disabled={status === 'loading'}
                    className="w-full bg-accent text-bg-dark font-heading font-black text-2xl uppercase tracking-tighter py-6 flex items-center justify-center gap-3 hover:bg-white transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none"
                  >
                    {status === 'loading' ? (
                      <>Transmitting... <Loader2 size={24} className="animate-spin" /></>
                    ) : (
                      <>Send Mission Briefing <Send size={24} /></>
                    )}
                  </button>
              </form>
            )}

            <div className="absolute -bottom-px -right-px w-20 h-20 bg-gradient-to-br from-transparent to-accent/10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
