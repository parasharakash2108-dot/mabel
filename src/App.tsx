import Header from './components/Header';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-white">
      <Header />
      <Hero />
      <TeamSection />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;