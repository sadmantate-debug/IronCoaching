import { BarChart3, Instagram, Youtube, MessageCircle, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-sm">
                <BarChart3 size={18} className="text-bg-dark" strokeWidth={3} />
              </div>
              <span className="font-heading text-2xl font-black tracking-tight text-white uppercase italic">
                IRONCOACH
              </span>
            </div>
            
            <p className="text-white/40 text-sm font-medium leading-relaxed mb-10 max-w-[240px]">
              Affordable online coaching for powerlifters, bodybuilders, and everyone in between.
            </p>

            <div className="flex gap-4">
              <a href="https://instagram.com/sadm4xn" className="w-10 h-10 bg-[#FF4D00]/10 text-[#FF4D00] flex items-center justify-center rounded-full hover:bg-[#FF4D00] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center rounded-full hover:bg-accent hover:text-bg-dark transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#35A1F1]/10 text-[#35A1F1] flex items-center justify-center rounded-full hover:bg-[#35A1F1] hover:text-white transition-all">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:col-span-4 gap-12">
            <div>
              <h4 className="text-white font-black text-sm mb-8 uppercase tracking-[0.2em] border-b border-white/5 pb-4">Programs</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Powerlifting</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Bodybuilding</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Hybrid Training</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Beginner Plans</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-sm mb-8 uppercase tracking-[0.2em] border-b border-white/5 pb-4">Nutrition</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Bulking Diet</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Cutting Diet</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Maintenance</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Meal Prep Guides</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-sm mb-8 uppercase tracking-[0.2em] border-b border-white/5 pb-4">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">About Us</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Pricing</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Contact</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-sm mb-8 uppercase tracking-[0.2em] border-b border-white/5 pb-4">Connect</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Instagram</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">YouTube</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">WhatsApp</a></li>
                <li><a href="#" className="text-white/30 hover:text-accent transition-colors text-xs font-bold uppercase tracking-tight">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Slogan */}
        <div className="py-20 border-t border-white/5 select-none pointer-events-none">
          <h2 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black leading-none uppercase tracking-tighter flex flex-wrap gap-x-8">
            <span className="text-white/5">LIFT HEAVY.</span>
            <span className="text-accent/20">EAT SMART.</span>
          </h2>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div>
            © {new Date().getFullYear()} IronCoach. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
