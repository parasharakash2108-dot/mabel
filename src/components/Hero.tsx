import { useState } from 'react';
import LeadForm from './LeadForm';

const Hero = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const openLeadForm = () => {
    setIsLeadFormOpen(true);
  };

  const closeLeadForm = () => {
    setIsLeadFormOpen(false);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-white text-black overflow-hidden pt-24">
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <div className="animate-fade-in-up">
            {/* Main Headlines - 2 Lines Only */}
            <h1 className="font-['Montserrat'] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-black">
              Your <span className="font-script text-[#FF2D96]">Boutique</span> AI Receptionists & Sales Agents
              <br />
              Always On, Always Polished
            </h1>
            
            {/* Semi-bold Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-5xl mx-auto leading-relaxed font-semibold text-black">
              Receptionist Boutique™ installs character-driven AI that answers every call, qualifies leads, books appointments, sends reminders, and reactivates no-shows — all 24/7. Unlike boring bots, our six stunning personalities bring charm and personality to every interaction. Clients never feel ignored, your diary fills while you sleep, and you save £2,000+ a month on staff and missed calls.
            </p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={openLeadForm}
                className="bg-[#FF2D96] text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Book a Demo
              </button>
              
              <button 
                onClick={openLeadForm}
                className="border-2 border-[#FF2D96] text-[#FF2D96] px-12 py-6 rounded-2xl font-bold text-xl hover:bg-[#FF2D96] hover:text-white hover:scale-105 transition-all duration-300"
              >
                See It in Action
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <LeadForm isOpen={isLeadFormOpen} onClose={closeLeadForm} />
    </>
  );
};

export default Hero;