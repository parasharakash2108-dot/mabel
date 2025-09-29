import { Sparkles, FileText, Phone, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="text-white" size={32} />,
    title: 'Pick Your Personality',
    description: 'Choose the ideal receptionist persona that fits your brand\'s tone — Luxe, Glam, Bold, Calm, or Cheeky.',
    gradient: 'from-fuchsia-500 to-fuchsia-600'
  },
  {
    icon: <FileText className="text-white" size={32} />,
    title: 'We Train the Scripts',
    description: 'Our team will ensure your AI is fully integrated with your brand\'s voice, FAQs, booking rules, and client preferences.',
    gradient: 'from-gold-500 to-gold-600'
  },
  {
    icon: <Phone className="text-white" size={32} />,
    title: 'They Answer 24/7',
    description: 'Seamlessly manage every interaction, from booking appointments to re-engaging no-shows, with AI that\'s as diligent as your best employee.',
    gradient: 'from-black to-gray-800'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-gold-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <span className="text-black font-semibold">Luxury Implementation Process</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-black mb-6">
            From Setup to Bookings in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Our streamlined onboarding process ensures rapid deployment with minimal disruption to your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-gold-300 to-fuchsia-300 transform -translate-y-1/2 z-0"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-fuchsia-300 to-gold-300 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative z-10 text-center p-10 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gold-100 group"
            >
              <div className="relative mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gold-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-black">
                {step.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8">
                  <ArrowRight className="text-gold-400" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl cursor-pointer">
            <span>Start Implementation Today</span>
            <ArrowRight className="ml-3" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;