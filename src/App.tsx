import FloatingParticles from './components/FloatingParticles';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import InteractiveDemo from './components/InteractiveDemo';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import LuxuryFeatures from './components/LuxuryFeatures';
import WhyChooseSection from './components/WhyChooseSection';
import AnalyticsSection from './components/AnalyticsSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import ProfessionalStats from './components/ProfessionalStats';
import ProcessVisualization from './components/ProcessVisualization';
import FeatureShowcase from './components/FeatureShowcase';
import TechStack from './components/TechStack';
import ComparisonSection from './components/ComparisonSection';
import IndustryShowcase from './components/IndustryShowcase';

function App() {
  return (
    <div className="relative">
      <FloatingParticles />
      <Header />
      <Hero />
      <TeamSection />
      <InteractiveDemo />
      <FeatureShowcase />
      <HowItWorks />
      <Benefits />
      <IndustryShowcase />
      <LuxuryFeatures />
      <TechStack />
      <WhyChooseSection />
      <ComparisonSection />
      <ProfessionalStats />
      <ProcessVisualization />
      <Pricing />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyButton />
    </div>
  );
}

export default App;