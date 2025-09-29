import { useState } from 'react';
import { Crown, TrendingUp, Zap, Shield } from 'lucide-react';

interface ModalContent {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  caseStudy: string;
}

const modalData: { [key: string]: ModalContent } = {
  personalities: {
    title: 'Bespoke AI Personalities',
    description: 'Our character-driven AI personalities are meticulously crafted to embody your brand\'s unique voice and values, delivering personalized experiences that resonate with your clients.',
    features: [
      'Six distinct AI personalities (Jessica, Maya, Nia, Jay, Leo, Luke)',
      'Custom voice training and dialect tuning',
      'Brand-specific response patterns',
      'Personality matching algorithms',
      'Emotional intelligence integration',
      'Cultural sensitivity training'
    ],
    benefits: [
      'Consistent brand representation across all interactions',
      'Higher client engagement and satisfaction',
      'Reduced training time for new staff',
      'Scalable personality deployment',
      'Enhanced brand loyalty and recognition'
    ],
    caseStudy: 'A luxury medspa in London saw 45% increase in client retention after implementing Jessica, The Luxe Concierge, who perfectly matched their sophisticated brand voice and elevated every client interaction.'
  },
  roi: {
    title: 'Unrivaled Return on Investment',
    description: 'Experience measurable business growth with our AI solutions that deliver consistent results and significant cost savings while maximizing revenue opportunities.',
    features: [
      '20-30% average booking increase within 90 days',
      '£2,000+ monthly savings on staffing costs',
      '70% reduction in no-shows through smart reminders',
      'Real-time ROI tracking and analytics',
      '24/7 lead capture and conversion',
      'Automated follow-up sequences'
    ],
    benefits: [
      'Immediate cost reduction on hiring and training',
      'Increased revenue through better lead conversion',
      'Improved cash flow with reduced no-shows',
      'Scalable growth without proportional cost increase',
      'Data-driven optimization for continuous improvement'
    ],
    caseStudy: 'A coaching business in Birmingham generated £67,200 in additional revenue within 4 months using Jay, The Charming Closer, while saving £8,000 in staffing costs.'
  },
  integration: {
    title: 'Seamless System Integration',
    description: 'Effortless setup and compatibility with your existing systems, CRM, and workflows for immediate impact without disrupting your current operations.',
    features: [
      'Quick 7-14 day deployment process',
      'CRM integration (Salesforce, HubSpot, etc.)',
      'Multi-channel support (calls, SMS, WhatsApp)',
      'API connectivity for custom systems',
      'Workflow automation setup',
      'Data synchronization across platforms'
    ],
    benefits: [
      'No disruption to existing operations',
      'Unified client data across all systems',
      'Streamlined booking and follow-up processes',
      'Reduced manual data entry and errors',
      'Enhanced operational efficiency'
    ],
    caseStudy: 'A multi-location salon chain integrated BA Boutique across 5 locations in just 10 days, immediately seeing unified booking management and 35% improvement in appointment scheduling efficiency.'
  },
  partnership: {
    title: 'Dedicated Partnership & Support',
    description: 'White-glove onboarding, dedicated account management, and ongoing optimization ensure your success with personalized support every step of the way.',
    features: [
      'Personal dedicated account manager',
      'White-glove onboarding process',
      '24/7 technical support',
      'Monthly performance reviews',
      'Continuous AI optimization',
      'Priority feature requests'
    ],
    benefits: [
      'Guaranteed successful implementation',
      'Ongoing performance optimization',
      'Immediate issue resolution',
      'Strategic business guidance',
      'Long-term partnership growth'
    ],
    caseStudy: 'Lady Victoria Ashworth\'s wellness retreat achieved 40% growth in bookings within 3 months, supported by dedicated account management and continuous AI personality refinement.'
  }
};

const Modal = ({ isOpen, onClose, content }: { isOpen: boolean; onClose: () => void; content: ModalContent | null }) => {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-3xl border border-gold-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg z-10"
        >
          ×
        </button>
        
        <div className="p-12">
          <div className="text-center mb-10">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-black mb-4 drop-shadow-sm">
              {content.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div className="bg-gradient-to-br from-gold-50 to-fuchsia-50 rounded-2xl p-8 border border-gold-200">
              <h3 className="font-bold text-2xl text-black mb-6 flex items-center gap-3">
                <Crown className="w-6 h-6 text-gold-600" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-gold-500 to-fuchsia-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-50 to-gold-50 rounded-2xl p-8 border border-fuchsia-200">
              <h3 className="font-bold text-2xl text-black mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-fuchsia-600" />
                Business Benefits
              </h3>
              <ul className="space-y-3">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-500 to-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 text-white">
            <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-gold-400" />
              Success Story
            </h3>
            <p className="text-gray-200 leading-relaxed text-lg italic">
              "{content.caseStudy}"
            </p>
          </div>

          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const pillars = [
  {
    icon: <Crown className="w-12 h-12" />,
    title: 'Bespoke Personalities',
    description: 'Six distinct, character-driven AI personalities meticulously crafted to embody your brand\'s unique voice and values.',
    gradient: 'from-gold-500 to-gold-600',
    features: ['Custom voice training', 'Brand-specific responses', 'Personality matching']
  },
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: 'Unrivaled ROI',
    description: 'Deliver measurable results with 20-30% booking increases and £2,000+ monthly savings through intelligent automation.',
    gradient: 'from-fuchsia-500 to-fuchsia-600',
    features: ['Proven growth metrics', 'Cost reduction analysis', 'Performance tracking']
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Seamless Integration',
    description: 'Effortless setup and compatibility with your existing systems, CRM, and workflows for immediate impact.',
    gradient: 'from-emerald-500 to-emerald-600',
    features: ['Quick deployment', 'CRM compatibility', 'Workflow automation']
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Dedicated Partnership',
    description: 'White-glove onboarding, dedicated account management, and ongoing optimization for sustained success.',
    gradient: 'from-purple-500 to-purple-600',
    features: ['Personal account manager', '24/7 support', 'Continuous optimization']
  }
];

const WhyChooseSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<string | null>(null);

  const openModal = (modalKey: string) => {
    setSelectedModal(modalKey);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedModal(null);
  };

  return (
    <>
    <section className="py-40 bg-gradient-to-br from-white via-gold-50/30 to-fuchsia-50/20 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-gold-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-gold-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-9xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-32">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-12 border border-gold-200 shadow-xl hover:scale-105 transition-all duration-500 transform-gpu">
            <Crown className="w-6 h-6 text-gold-600 mr-3" />
            <span className="text-black font-bold text-lg">The BA Boutique Difference</span>
          </div>
          
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 drop-shadow-lg transform-gpu hover:rotateX-2 transition-all duration-700">
            Where AI Meets
            <br />
            <span className="font-script text-fuchsia-500 text-5xl md:text-7xl lg:text-8xl drop-shadow-xl">Elegance</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Beyond technology, we deliver a partnership built on 
            <span className="text-gold-600 font-medium"> sophistication, performance, and unwavering support</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 hover:rotateY-5 border border-gray-100 hover:border-gold-200 relative overflow-hidden backdrop-blur-sm transform-gpu perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-transparent to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotateY-12 transition-all duration-500 transform-gpu`}>
                    <div className="text-white">
                      {pillar.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full text-sm font-bold text-black shadow-md border border-gold-200">
                      Premium
                    </div>
                  </div>
                </div>
                
                <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-6 text-black leading-tight group-hover:text-black transition-colors duration-300 drop-shadow-sm">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  {pillar.description}
                </p>

                <div className="space-y-4">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-gold-500 to-fuchsia-500 rounded-full shadow-md"></div>
                      <span className="text-gray-700 font-medium text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => openModal(index === 0 ? 'personalities' : index === 1 ? 'roi' : index === 2 ? 'integration' : 'partnership')}
                  className={`mt-8 w-full bg-gradient-to-r ${pillar.gradient} text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:rotateX-3 transition-all duration-500 shadow-xl transform-gpu`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-2xl p-12 max-w-5xl mx-auto border border-gold-200 shadow-2xl relative overflow-hidden hover:scale-105 transition-all duration-700 transform-gpu">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-fuchsia-500/15 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gold-500/15 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-black mb-6 drop-shadow-sm">
                Experience the Difference
              </h3>
              <p className="text-lg text-gray-600 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
                Join hundreds of premium businesses already leveraging luxury AI to achieve 
                unprecedented growth and operational excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:rotateY-3 transition-all duration-500 shadow-2xl flex items-center gap-3 transform-gpu">
                  <Crown size={20} />
                  Schedule Strategic Consultation
                </button>
                <button className="border-2 border-fuchsia-500/70 text-fuchsia-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-fuchsia-500/15 hover:border-fuchsia-500 hover:scale-105 hover:rotateY-3 transition-all duration-500 backdrop-blur-xl flex items-center gap-3 shadow-xl transform-gpu">
                  <Zap size={18} />
                  View Feature Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Modal 
      isOpen={modalOpen} 
      onClose={closeModal} 
      content={selectedModal ? modalData[selectedModal] : null} 
    />
    </>
  );
};

export default WhyChooseSection;