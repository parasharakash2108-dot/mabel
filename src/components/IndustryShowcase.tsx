import { Sparkles, TrendingUp, Users, Clock, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const IndustryShowcase = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: 'Medical Spas',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Luxury medical spa experiences with AI-powered elegance',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        bookingIncrease: '45%',
        revenue: '£67K',
        satisfaction: '98%',
        timeframe: '3 months'
      },
      features: [
        'Treatment scheduling optimization',
        'Consultation booking automation',
        'Follow-up care reminders',
        'VIP client management'
      ],
      testimonial: {
        quote: "Jessica handles our luxury clients with such grace. We've seen a 45% increase in bookings.",
        author: "Dr. Sophia Hartwell",
        title: "Medical Director, Luxe MedSpa"
      },
      aiPersonality: 'Jessica - The Luxe Concierge'
    },
    {
      name: 'Beauty Salons',
      icon: <Star className="w-5 h-5" />,
      description: 'Glamorous beauty experiences with personality-driven AI',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        bookingIncrease: '40%',
        revenue: '£28K',
        satisfaction: '96%',
        timeframe: '2 months'
      },
      features: [
        'Color consultation booking',
        'Style appointment management',
        'Product recommendation follow-ups',
        'Special event scheduling'
      ],
      testimonial: {
        quote: "Maya rebooked 3 no-shows before I even noticed. Our retention increased by 40%.",
        author: "Isabella Chen",
        title: "Salon Director, Glamour Studios"
      },
      aiPersonality: 'Maya - The Glow Getter'
    },
    {
      name: 'Wellness Centers',
      icon: <Users className="w-5 h-5" />,
      description: 'Serene wellness journeys with calming AI interactions',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        bookingIncrease: '35%',
        revenue: '£35K',
        satisfaction: '99%',
        timeframe: '3 months'
      },
      features: [
        'Holistic treatment scheduling',
        'Wellness program enrollment',
        'Mindfulness session booking',
        'Retreat coordination'
      ],
      testimonial: {
        quote: "Nia creates a sanctuary of peace from the first call. Truly transformative.",
        author: "Lady Victoria Ashworth",
        title: "Wellness Director, Serenity Retreats"
      },
      aiPersonality: 'Nia - The Wellness Oracle'
    },
    {
      name: 'Real Estate',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Premium property services with efficient AI management',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        bookingIncrease: '50%',
        revenue: '£89K',
        satisfaction: '94%',
        timeframe: '4 months'
      },
      features: [
        'Property viewing scheduling',
        'Lead qualification automation',
        'Market update communications',
        'Client relationship management'
      ],
      testimonial: {
        quote: "Luke handles inquiries with incredible efficiency. 45% conversion rate increase.",
        author: "James Morrison",
        title: "Real Estate Director, Morrison Properties"
      },
      aiPersonality: 'Luke - The Efficient Expert'
    },
    {
      name: 'Executive Coaching',
      icon: <Clock className="w-5 h-5" />,
      description: 'High-performance coaching with persuasive AI sales support',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        bookingIncrease: '60%',
        revenue: '£67K',
        satisfaction: '97%',
        timeframe: '4 months'
      },
      features: [
        'Executive session scheduling',
        'Program enrollment automation',
        'Progress check-in coordination',
        'Corporate package sales'
      ],
      testimonial: {
        quote: "Jay booked £7,500 worth of sales calls last month alone. Incredible results.",
        author: "Marcus Wellington",
        title: "Executive Coach, Wellington Coaching"
      },
      aiPersonality: 'Jay - The Charming Closer'
    },
    {
      name: 'Aesthetic Clinics',
      icon: <ArrowRight className="w-5 h-5" />,
      description: 'Premium aesthetic services with behind-the-scenes AI efficiency',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: {
        bookingIncrease: '42%',
        revenue: '£52K',
        satisfaction: '95%',
        timeframe: '4 months'
      },
      features: [
        'Procedure consultation booking',
        'Treatment plan coordination',
        'Recovery follow-up scheduling',
        'Package deal management'
      ],
      testimonial: {
        quote: "Leo organizes everything perfectly. 65% reduction in no-shows.",
        author: "Sarah Thompson",
        title: "Clinic Manager, Elite Aesthetics"
      },
      aiPersonality: 'Leo - The Quiet Genius'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <Sparkles className="w-5 h-5 text-gold-600 mr-2" />
            <span className="text-gray-800 font-semibold">Industry Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored for Your Industry
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how BA Boutique transforms businesses across luxury industries
          </p>
        </div>

        {/* Industry Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveIndustry(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeIndustry === index
                  ? 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-2xl">{industry.icon}</span>
              <span>{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Industry Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={industries[activeIndustry].image}
                alt={industries[activeIndustry].name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-fuchsia-600">
                        {industries[activeIndustry].stats.bookingIncrease}
                      </div>
                      <div className="text-sm text-gray-600">Booking Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold-600">
                        {industries[activeIndustry].stats.revenue}
                      </div>
                      <div className="text-sm text-gray-600">Revenue Generated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Industry Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-fuchsia-500 rounded-xl flex items-center justify-center text-white">
                  {industries[activeIndustry].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {industries[activeIndustry].name}
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {industries[activeIndustry].description}
              </p>
            </div>

            {/* AI Personality */}
            <div className="bg-gradient-to-r from-fuchsia-50 to-gold-50 rounded-xl p-6 border border-fuchsia-200">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-fuchsia-600" />
                <span className="font-semibold text-gray-900">Recommended AI Personality</span>
              </div>
              <div className="text-lg font-bold text-fuchsia-600">
                {industries[activeIndustry].aiPersonality}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
              <div className="space-y-3">
                {industries[activeIndustry].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-500 to-gold-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">
                  {industries[activeIndustry].stats.satisfaction}
                </div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {industries[activeIndustry].stats.timeframe}
                </div>
                <div className="text-sm text-gray-600">Results Timeline</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white border-l-4 border-fuchsia-500 p-6 shadow-lg rounded-r-xl">
              <blockquote className="text-gray-700 italic mb-4">
                "{industries[activeIndustry].testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">
                  {industries[activeIndustry].testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {industries[activeIndustry].testimonial.title}
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
              <span>Get Started with {industries[activeIndustry].name}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;