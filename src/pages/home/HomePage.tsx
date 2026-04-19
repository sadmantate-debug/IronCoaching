import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './HeroSection';
import ProgramsSection from './ProgramsSection';
import PricingSection from './PricingSection';
import DietSection from './DietSection';
import ContactSection from './ContactSection';

export default function HomePage() {
  return (
    <div className="bg-bg-dark text-white selection:bg-accent selection:text-bg-dark">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramsSection />
        <PricingSection />
        <DietSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
