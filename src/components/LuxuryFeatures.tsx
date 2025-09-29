import { Shield, Globe, Zap, Crown, Sparkles, Award, Star, Diamond } from 'lucide-react';

const features = [
  {
    icon: <Crown className="w-8 h-8" />,
    title: 'Character-Driven Personalities',
    description: 'Six distinct AI personalities, each meticulously crafted to embody sophistication and charm.',
    gradient: 'from-gold-500 to-gold-600',
    stats: '6 Unique Avatars'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and compliance standards protect every client interaction.',
    gradient: 'from-emerald-500 to-emerald-600',
    stats: '99.9% Uptime'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Multi-Channel Excellence',
    description: 'Seamless integration across calls, SMS, WhatsApp, and email for complete coverage.',
    gradient: 'from-blue-500 to-blue-600',
    stats: '4+ Channels'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Lightning-Fast Response',
    description: 'Sub-3-second response times ensure no client ever feels ignored or undervalued.',
    gradient: 'from-fuchsia-500 to-fuchsia-600',
    stats: '<3s Response'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Intelligent Learning',
    description: 'Advanced AI that learns and adapts to your business nuances and client preferences.',
    gradient: 'from-purple-500 to-purple-600',
    stats: 'Self-Improving'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Premium Support',
    description: 'Dedicated account managers and white-glove onboarding for VIP treatment.',
    gradient: 'from-amber-500 to-amber-600',
    stats: '24/7 Support'
  }
];

const LuxuryFeatures = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-gold-50/20 to-fuchsia-50/10 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-12 border border-gold-200 shadow-xl">
            <Diamond className="w-6 h-6 text-gold-600 mr-3" />
            <span className="text-black font-bold text-lg">Luxury Features</span>
          </div>
          
          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8">
            What Makes BA <span className="font-script text-fuchsia-500">Boutique</span> Different?
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
            Not another bland call bot. Our AI receptionists and sales representatives are 
            <span className="text-gold-600 font-medium"> character-driven, polished, and trained</span> to sound like part of your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 border-2 border-gray-100 hover:border-gold-200 relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full text-sm font-bold text-black shadow-md border border-gold-200">
                      {feature.stats}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 text-black leading-tight group-hover:text-black transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-3xl p-16 max-w-6xl mx-auto border-2 border-gold-200 shadow-2xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-black mb-6">
                Experience the Difference
              </h3>
              <p className="text-xl text-gray-600 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
                Join hundreds of premium businesses already leveraging luxury AI to achieve 
                unprecedented growth and operational efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3">
                  <Star size={24} />
                  Schedule Strategic Consultation
                </button>
                <button className="border-2 border-fuchsia-500/60 text-fuchsia-600 px-12 py-6 rounded-2xl font-semibold text-xl hover:bg-fuchsia-500/10 hover:border-fuchsia-500 hover:scale-105 transition-all duration-300 backdrop-blur-xl flex items-center gap-3 shadow-xl">
                  <Diamond size={20} />
                  View Feature Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryFeatures;