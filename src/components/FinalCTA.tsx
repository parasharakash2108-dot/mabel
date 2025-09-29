import { useState } from 'react';
import LeadForm from './LeadForm';

const FinalCTA = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const openLeadForm = () => {
    setIsLeadFormOpen(true);
  };

  const closeLeadForm = () => {
    setIsLeadFormOpen(false);
  };

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-black mb-8">
            Ready to fill your calendar day and night?
          </h2>
          
          <p className="text-xl text-black font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
            Your boutique AI receptionists and sales agents are waiting to take over.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
              Hear a Sample
            </button>
          </div>
        </div>
      </section>
      
      <LeadForm isOpen={isLeadFormOpen} onClose={closeLeadForm} />
    </>
  );
};

export default FinalCTA;