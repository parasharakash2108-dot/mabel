import { Play, Settings, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const ProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Choose Your AI Personality',
      description: 'Select from 6 distinct personalities that match your brand',
      details: [
        'Jessica - The Luxe Concierge for high-end brands',
        'Maya - The Glow Getter for beauty businesses',
        'Nia - The Wellness Oracle for calm environments',
        'Jay - The Charming Closer for sales',
        'Leo - The Quiet Genius for efficiency',
        'Luke - The Expert for professional services'
      ],
      gradient: 'from-fuchsia-500 to-fuchsia-600',
      bgGradient: 'from-fuchsia-50 to-fuchsia-100'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Custom Training & Integration',
      description: 'We train your AI with your specific business requirements',
      details: [
        'Upload your FAQs and business policies',
        'Integrate with your existing CRM system',
        'Configure booking rules and availability',
        'Set up multi-channel communication',
        'Test and refine responses',
        'Quality assurance and approval'
      ],
      gradient: 'from-gold-500 to-gold-600',
      bgGradient: 'from-gold-50 to-gold-100'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Go Live & Start Converting',
      description: 'Your AI starts handling calls, bookings, and follow-ups 24/7',
      details: [
        'Instant call answering and routing',
        'Automated appointment scheduling',
        'Smart follow-up sequences',
        'No-show prevention and rebooking',
        'Lead qualification and nurturing',
        'Real-time reporting and analytics'
      ],
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <Play className="w-5 h-5 text-gold-600 mr-2" />
            <span className="text-gray-800 font-semibold">Implementation Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Setup to Success in 3 Steps
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process gets you up and running quickly with minimal disruption
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-2 ${
                activeStep === index ? 'border-gold-300' : 'border-gray-100 hover:border-gold-200'
              } relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 ${
                  activeStep === index ? 'opacity-30' : 'group-hover:opacity-20'
                } transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-gold-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                    activeStep === index ? 'scale-110' : 'group-hover:scale-105'
                  } transition-transform duration-300`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    activeStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-center mt-8">
                  <ArrowRight className="text-gold-400 w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h3>
            <p className="text-lg text-gray-600">
              Typical deployment schedule for most businesses
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-500 via-fuchsia-500 to-emerald-500 rounded-full"></div>
            
            <div className="space-y-16">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Days 1-3</h4>
                  <p className="text-gray-600">Initial consultation and personality selection</p>
                </div>
                <div className="w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-fuchsia-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Days 4-10</h4>
                  <p className="text-gray-600">Training, integration, and testing phase</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Days 11-14</h4>
                  <p className="text-gray-600">Go live and optimization</p>
                </div>
                <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
            Start Your Implementation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualization;