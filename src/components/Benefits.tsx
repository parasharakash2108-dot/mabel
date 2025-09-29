import { TrendingUp, Clock, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="text-[#FF2D96]" size={40} />,
    title: 'Book More Clients — 24/7',
    description: 'Never miss a call again. Our AI receptionists and sales agents qualify leads, rebook no-shows, and keep your diary full — day and night.'
  },
  {
    icon: <Clock className="text-[#FF2D96]" size={40} />,
    title: 'Save Time & Cut Costs',
    description: 'On average, clinics and agencies save £2,000+ per month by replacing missed calls and staff overhead with always-on AI agents.'
  },
  {
    icon: <Rocket className="text-[#FF2D96]" size={40} />,
    title: 'Grow Faster With Less Stress',
    description: 'Clients see a 20–30% uplift in bookings within 90 days, with fewer no-shows and smoother client journeys — all without payroll headaches.'
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-black mb-6">
            How Can We Assist You?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#FF2D96]"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              
              <h3 className="font-['Montserrat'] text-xl font-bold mb-4 text-black leading-tight">
                {benefit.title}
              </h3>
              <p className="text-black font-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-gray-50 rounded-xl p-10 border border-gray-200">
          <h3 className="font-['Montserrat'] text-3xl font-bold text-black mb-8 text-center">
            Feature Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF2D96] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black font-medium">Personalities that fit your brand — Choose from Jessica the Luxe Concierge, Maya the Glow-Getter, or four other unique avatars.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF2D96] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black font-medium">Inbound & Outbound Coverage — Answer every call, re-engage no-shows, and even chase lapsed leads.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF2D96] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black font-medium">Multi-Channel Magic — Calls, SMS, WhatsApp — your clients get answered where they are.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF2D96] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black font-medium">Smarter Bookings — Instant scheduling + automated reminders cut no-shows by up to 70%.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF2D96] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black font-medium">Sales Follow-Up — Polite but persistent reactivation flows keep your diary full without extra staff.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF2D96] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black font-medium">Live Reporting — Track leads, bookings, and ROI from one clean dashboard.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#FF2D96] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-black font-medium">Safe & Compliant — Scripts tuned to your industry, with sensitive calls escalated to humans.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;