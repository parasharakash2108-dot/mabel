import { Sparkles, FileText, Phone } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="text-white" size={32} />,
    title: 'Pick Your Personality',
    description: 'Choose the receptionist style that fits your brand — luxe, glam, bold, calm, or cheeky.'
  },
  {
    icon: <FileText className="text-white" size={32} />,
    title: 'We Train the Scripts',
    description: 'Your FAQs, booking rules, and tone get loaded into the system.'
  },
  {
    icon: <Phone className="text-white" size={32} />,
    title: 'They Answer 24/7',
    description: 'Every call, every text, every client — booked without breaks.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-black mb-6">
            From Setup to Bookings in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center p-10 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border border-gray-200 hover:border-[#FF2D96]"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-[#FF2D96] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-['Montserrat'] text-2xl font-bold mb-4 text-black">
                {step.title}
              </h3>
              <p className="text-black font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;