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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white text-black overflow-hidden pt-24">
      {/* Ultra-Luxurious Background Elements */}
      <div className="absolute inset-0">
        {/* Primary Luxury Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-gold-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] bg-gradient-radial from-gold-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>
        
        {/* Additional Opulent Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-gold-400/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        
        {/* Luxury Texture Overlays */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-fuchsia-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(255,45,150,0.06)_0%,transparent_50%)]"></div>
        </div>

        {/* Floating Luxury Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-9xl mx-auto px-8 lg:px-12 text-center">
        <div className="animate-fade-in-up">
          {/* Premium Brand Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-fuchsia-50 to-gold-50 backdrop-blur-2xl rounded-full border-2 border-gold-500/30 mb-12 shadow-xl">
              <span className="text-black font-bold text-lg tracking-wide font-heading">Where Elegance Meets Innovation</span>
              <div className="ml-4 w-4 h-4 bg-gradient-to-r from-gold-500 to-fuchsia-500 rounded-full animate-pulse shadow-xl"></div>
            </div>
          </div>
          
          {/* Ultra-Luxurious Headlines */}
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight transform-gpu perspective-1000 hover:rotateX-2 transition-all duration-700 drop-shadow-lg">
            Your <span className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 bg-clip-text text-transparent">Boutique</span> AI
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-black">Receptionists &</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 via-gold-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient-x text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
              Sales Agents
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-light text-black">
              — Always On, Always
              <br />
              <span className="font-script text-gold-500 text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">Impeccable</span>
            </span>
          </h1>
          
          {/* Luxurious Subline */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light text-gray-700 drop-shadow-sm">
            Exquisite AI-powered receptionists and sales agents that never miss a call, rebook your no-shows, 
            and deliver results with <span className="text-gold-600 font-medium">timeless grace</span> — without the overhead.
          </p>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={scrollToDemo}
              className="group bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-bold text-base hover:from-fuchsia-500 hover:to-fuchsia-600 hover:scale-105 hover:rotateY-3 transition-all duration-700 shadow-2xl hover:shadow-gold-500/50 font-heading flex items-center gap-3 border-2 border-gold-400/70 transform-gpu perspective-1000"
            >
              Book a Personal Demo
              <div className="w-3 h-3 bg-white group-hover:bg-white rounded-full group-hover:animate-bounce shadow-lg"></div>
            </button>
            <button 
              onClick={scrollToDemo}
              className="border-2 border-gold-500/80 text-gold-600 px-8 py-4 rounded-full font-bold text-base hover:bg-gold-500/20 hover:border-gold-400 hover:scale-105 hover:rotateY-3 transition-all duration-700 backdrop-blur-2xl font-heading shadow-2xl transform-gpu perspective-1000"
            >
              Experience Luxury AI in Action
            </button>
            <button 
              onClick={scrollToTeam}
              className="border-2 border-fuchsia-500/60 text-fuchsia-600 px-8 py-4 rounded-full font-bold text-base hover:bg-fuchsia-500/20 hover:border-fuchsia-500 hover:scale-105 hover:rotateY-3 transition-all duration-700 backdrop-blur-2xl font-heading shadow-2xl transform-gpu perspective-1000"
            >
              Start Your Boutique Journey
            </button>
          </div>
          
          {/* Ultra-Premium Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl rounded-2xl p-8 border border-gold-500/30 hover:border-gold-500/50 transition-all duration-700 hover:scale-105 hover:rotateY-5 shadow-2xl transform-gpu perspective-1000">
              <div className="text-4xl font-bold text-gold-600 mb-3 drop-shadow-lg">24/7</div>
              <div className="text-black font-bold text-lg mb-2">Always Available</div>
              <div className="text-gray-600 text-sm">Never miss another opportunity</div>
            </div>
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl rounded-2xl p-8 border border-fuchsia-500/30 hover:border-fuchsia-500/50 transition-all duration-700 hover:scale-105 hover:rotateY-5 shadow-2xl transform-gpu perspective-1000">
              <div className="text-4xl font-bold text-fuchsia-600 mb-3 drop-shadow-lg">£2K+</div>
              <div className="text-black font-bold text-lg mb-2">Monthly Savings</div>
              <div className="text-gray-600 text-sm">Reduce overhead costs</div>
            </div>
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-2xl rounded-2xl p-8 border border-black/20 hover:border-black/30 transition-all duration-700 hover:scale-105 hover:rotateY-5 shadow-2xl transform-gpu perspective-1000">
              <div className="text-4xl font-bold text-black mb-3 drop-shadow-lg">30%</div>
              <div className="text-black font-bold text-lg mb-2">Growth Increase</div>
              <div className="text-gray-600 text-sm">Within 90 days</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-50 to-fuchsia-50 backdrop-blur-2xl rounded-full border border-gold-500/40 shadow-xl hover:scale-105 transition-all duration-500 transform-gpu">
              <span className="text-black font-medium text-base">Trusted by Premium Businesses Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;