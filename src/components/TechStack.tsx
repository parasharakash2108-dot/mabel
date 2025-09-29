import { Brain, Shield, Zap, Globe, Database, Cpu, Cloud, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      description: 'Advanced AI models powering natural conversations',
      technologies: [
        {
          name: 'Natural Language Processing',
          description: 'Understanding context and intent in every conversation',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
          features: ['Context awareness', 'Sentiment analysis', 'Multi-language support']
        },
        {
          name: 'Voice Recognition',
          description: 'Crystal-clear voice processing with human-like responses',
          image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
          features: ['Real-time processing', 'Accent adaptation', 'Noise cancellation']
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: <Shield className="w-6 h-6" />,
      description: 'Enterprise-grade security protecting your data',
      technologies: [
        {
          name: 'Data Encryption',
          description: 'End-to-end encryption for all client communications',
          image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
          features: ['256-bit encryption', 'GDPR compliant', 'SOC 2 certified']
        },
        {
          name: 'Access Control',
          description: 'Multi-layered security with role-based permissions',
          image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
          features: ['Multi-factor auth', 'Role management', 'Audit trails']
        }
      ]
    },
    {
      title: 'Integration & APIs',
      icon: <Zap className="w-6 h-6" />,
      description: 'Seamless integration with your existing systems',
      technologies: [
        {
          name: 'CRM Integration',
          description: 'Connect with Salesforce, HubSpot, and 50+ platforms',
          image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=600',
          features: ['Real-time sync', 'Custom fields', 'Workflow automation']
        },
        {
          name: 'Communication Channels',
          description: 'Multi-channel support across all platforms',
          image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
          features: ['Voice calls', 'SMS & WhatsApp', 'Email integration']
        }
      ]
    },
    {
      title: 'Analytics & Insights',
      icon: <Database className="w-6 h-6" />,
      description: 'Advanced analytics for data-driven decisions',
      technologies: [
        {
          name: 'Real-time Dashboard',
          description: 'Live insights into your business performance',
          image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600',
          features: ['Live metrics', 'Custom reports', 'Performance tracking']
        },
        {
          name: 'Predictive Analytics',
          description: 'AI-powered insights for future planning',
          image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
          features: ['Trend analysis', 'Forecasting', 'Optimization suggestions']
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <Cpu className="w-5 h-5 text-gold-600 mr-2" />
            <span className="text-gray-800 font-semibold">Advanced Technology</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by Cutting-Edge AI
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the sophisticated technology stack that makes BA Boutique the most advanced AI solution
          </p>
        </div>

        {/* Tech Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {techCategories[activeTab].title}
            </h3>
            <p className="text-lg text-gray-600">
              {techCategories[activeTab].description}
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {techCategories[activeTab].technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <img 
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.name}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-500 to-gold-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gradient-to-r from-fuchsia-50 to-fuchsia-100 rounded-xl">
            <Cloud className="w-12 h-12 text-fuchsia-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600 font-medium">Uptime</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-gold-50 to-gold-100 rounded-xl">
            <Zap className="w-12 h-12 text-gold-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">&lt;100ms</div>
            <div className="text-gray-600 font-medium">Latency</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl">
            <Lock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">256-bit</div>
            <div className="text-gray-600 font-medium">Encryption</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
            <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;