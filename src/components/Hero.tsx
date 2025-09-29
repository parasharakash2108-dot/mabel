import { useState } from 'react';
import LeadForm from './LeadForm';

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTeam = () => {
    const element = document.getElementById('team');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white text-black overflow-hidden pt-24">

      <div className="relative z-10 max-w-9xl mx-auto px-8 lg:px-12 text-center">
        <div className="animate-fade-in-up">
          {/* Main Headlines - 2 Lines Only */}
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-black">
            Your <span className="text-fuchsia-500">Boutique</span> AI Receptionists & Sales Agents
            <br />
            Always On, Always Impeccable
          </h1>
          
          {/* Semi-bold Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-semibold text-black">
            AI-powered receptionists and sales agents that never miss a call, rebook your no-shows, 
            and deliver results with timeless grace — without the overhead.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;