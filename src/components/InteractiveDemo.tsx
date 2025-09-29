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
      </div>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-white backdrop-blur-xl rounded-3xl p-16 shadow-3xl border border-fuchsia-500 relative overflow-hidden">
          {/* Background Effects */}
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-fuchsia-500 rounded-2xl flex items-center justify-center mr-6 shadow-xl">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-black">
                Experience Live AI Interaction
              </h3>
            </div>
            
            <p className="text-2xl text-black mb-12 max-w-3xl mx-auto font-light">
              Call Jessica and witness the sophistication of our luxury AI receptionist technology firsthand
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={openLeadForm}
                className="group bg-fuchsia-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-500 shadow-2xl flex items-center gap-4 border border-fuchsia-500"
              >
                <Phone size={24} />
                Call Jessica Now
                <div className="w-3 h-3 bg-white rounded-full group-hover:animate-pulse shadow-lg"></div>
              </button>
              
              <button 
                onClick={openLeadForm}
                className="border-2 border-fuchsia-500 text-fuchsia-500 px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-white hover:border-fuchsia-500 hover:scale-105 transition-all duration-500 backdrop-blur-xl flex items-center gap-3 shadow-xl"
              >
                <Play size={20} />
                Hear Sample
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-8 text-base text-black">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                <span>Free test call</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
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