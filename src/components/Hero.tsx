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
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={scrollToDemo}
              className="group bg-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-fuchsia-600 hover:scale-105 transition-all duration-300 shadow-lg font-heading"
            >
              Book a Personal Demo
            </button>
            <button 
              onClick={scrollToDemo}
              className="border-2 border-fuchsia-500 text-fuchsia-500 px-8 py-4 rounded-full font-bold text-base hover:bg-fuchsia-50 hover:scale-105 transition-all duration-300 font-heading"
            >
              Experience Luxury AI in Action
            </button>
            <button 
              onClick={scrollToTeam}
              className="border-2 border-fuchsia-500 text-fuchsia-500 px-8 py-4 rounded-full font-bold text-base hover:bg-fuchsia-50 hover:scale-105 transition-all duration-300 font-heading"
            >
              Start Your Boutique Journey
            </button>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-fuchsia-200 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-4xl font-bold text-fuchsia-500 mb-3">24/7</div>
              <div className="text-black font-bold text-lg mb-2">Always Available</div>
              <div className="text-gray-700 text-sm">Never miss another opportunity</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-fuchsia-200 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-4xl font-bold text-fuchsia-600 mb-3 drop-shadow-lg">£2K+</div>
              <div className="text-black font-bold text-lg mb-2">Monthly Savings</div>
              <div className="text-gray-700 text-sm">Reduce overhead costs</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-fuchsia-200 transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-4xl font-bold text-black mb-3 drop-shadow-lg">30%</div>
              <div className="text-black font-bold text-lg mb-2">Growth Increase</div>
              <div className="text-gray-700 text-sm">Within 90 days</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;