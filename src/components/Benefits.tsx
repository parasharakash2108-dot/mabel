import { TrendingUp, Clock, Rocket, Shield, Globe, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="text-fuchsia-600" size={40} />,
    title: '24/7 Client Bookings',
    description: 'Never miss a client again. Our luxury AI agents handle your calls, rebook no-shows, and fill your schedule while you sleep — effortlessly.',
    stats: 'Never miss a call',
    gradient: 'from-fuchsia-50 to-fuchsia-100'
  },
  {
    icon: <Clock className="text-gold-600" size={40} />,
    title: 'Save Time & Reduce Overhead',
    description: 'On average, our clients save £2,000+ a month by eliminating missed calls and the need for full-time staff.',
    stats: '£2,000+ saved monthly',
    gradient: 'from-gold-50 to-gold-100'
  },
  {
    icon: <Rocket className="text-black" size={40} />,
    title: 'Grow with Ease & Elegance',
    description: 'Watch your bookings rise by 20–30% in the first 90 days with fewer no-shows, smoother client interactions, and zero payroll stress.',
    stats: '20-30% growth in 90 days',
    gradient: 'from-gray-50 to-gray-100'
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full mb-8 border border-fuchsia-500">
            <span className="text-black font-bold">Luxury Advantages</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-black mb-6">
            Top 3 Benefits of BA <span className="font-script text-fuchsia-500">Boutique</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
          <p className="text-xl text-black max-w-3xl mx-auto font-semibold">
            Experience the transformative power of luxury AI that elevates your business operations 
            through measurable, sustainable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-fuchsia-500 hover:border-fuchsia-500"
            >
              <div>
                <div className="mb-6 text-fuchsia-500">
                  {benefit.icon}
                </div>
                
                <div className="mb-4">
                  <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-bold text-black mb-4 border border-fuchsia-500">
                    {benefit.stats}
                  </div>
                </div>
                
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4 text-black leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-black font-medium leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 max-w-4xl mx-auto border border-fuchsia-500 shadow-lg">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-black mb-4">
              Ready to Transform Your Business Operations?
            </h3>
            <p className="text-black mb-8 font-semibold">
              Join hundreds of premium businesses already leveraging luxury AI to achieve unprecedented growth and efficiency.
            </p>
            <button className="bg-fuchsia-500 text-white px-10 py-4 rounded-xl font-semibold hover:bg-fuchsia-500 transition-all duration-300 shadow-lg">
              Schedule Strategic Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;