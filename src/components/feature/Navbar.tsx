import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Programs', href: '#programs' },
  { name: 'Diet Plans', href: '#diet' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-xs flex items-center justify-center">
            <BarChart3 size={20} className="text-bg-dark font-black" />
          </div>
          <span className="font-heading text-2xl font-black tracking-tighter group-hover:text-accent transition-colors flex items-center italic">
            IRON<span className="text-accent not-italic">COACH</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-accent text-bg-dark px-8 py-3 rounded-full font-heading font-black uppercase tracking-tight hover:bg-white transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 text-sm"
          >
            Get Started <ChevronRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-heading font-black uppercase tracking-tighter text-white hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-accent text-bg-dark px-6 py-4 text-center rounded-full font-heading font-black uppercase tracking-tight"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
