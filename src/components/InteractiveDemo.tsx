import { Phone, Sparkles, Play } from 'lucide-react';
import { useState } from 'react';
import LeadForm from './LeadForm';

const InteractiveDemo = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const openLeadForm = () => {
    setIsLeadFormOpen(true);
  };

  const closeLeadForm = () => {
    setIsLeadFormOpen(false);
  };

  return (
    <>
      <section id="demo" className="py-24 bg-gradient-to-br from-black via-fuchsia-900/30 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-fuchsia-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-gold-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-16 shadow-3xl border border-gold-500/30 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-fuchsia-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold-500/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold">
                Experience Live AI Interaction
              </h3>
            </div>
            
            <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
              Call Jessica and witness the sophistication of our luxury AI receptionist technology firsthand
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={openLeadForm}
                className="group bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-gold-500 hover:to-gold-600 hover:text-black hover:scale-105 transition-all duration-500 shadow-2xl flex items-center gap-4 border border-fuchsia-400/30"
              >
                <Phone size={24} />
                Call Jessica Now
                <div className="w-3 h-3 bg-white group-hover:bg-black rounded-full group-hover:animate-pulse shadow-lg"></div>
              </button>
              
              <button 
                onClick={openLeadForm}
                className="border-2 border-gold-500/60 text-gold-400 px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-gold-500/10 hover:border-gold-500 hover:scale-105 transition-all duration-500 backdrop-blur-xl flex items-center gap-3 shadow-xl"
              >
                <Play size={20} />
                Hear Sample
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-8 text-base text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <span>Free test call</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Instant connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
      <LeadForm isOpen={isLeadFormOpen} onClose={closeLeadForm} />
    </>
  );
};

export default InteractiveDemo;