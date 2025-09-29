import { Play, Users, TrendingUp, Clock, Shield, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    calls: 0,
    bookings: 0,
    revenue: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            
            let step = 0;
            const interval = setInterval(() => {
              step++;
              const progress = step / steps;
              
              setAnimatedStats({
                calls: Math.floor(10000 * progress),
                bookings: Math.floor(2500 * progress),
                revenue: Math.floor(450000 * progress),
                satisfaction: Math.floor(98.5 * progress * 10) / 10
              });
              
              if (step >= steps) {
                clearInterval(interval);
                setAnimatedStats({
                  calls: 10000,
                  bookings: 2500,
                  revenue: 450000,
                  satisfaction: 98.5
                });
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('feature-showcase');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'AI-Powered Call Handling',
      description: 'Our sophisticated AI receptionists handle every call with personality and professionalism, ensuring no opportunity is ever missed.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: 'Calls Handled', value: '10,000+', icon: <Users className="w-5 h-5" /> },
        { label: 'Response Time', value: '<3s', icon: <Clock className="w-5 h-5" /> }
      ],
      benefits: [
        'Never miss a call again',
        '24/7 availability',
        'Professional greeting every time',
        'Instant appointment booking'
      ]
    },
    {
      title: 'Smart Booking System',
      description: 'Intelligent scheduling that understands your business rules, availability, and client preferences for seamless appointment management.',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: 'Bookings Made', value: '2,500+', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'No-Show Reduction', value: '70%', icon: <Shield className="w-5 h-5" /> }
      ],
      benefits: [
        'Automated scheduling',
        'Smart reminders',
        'Conflict prevention',
        'Calendar integration'
      ]
    },
    {
      title: 'Revenue Optimization',
      description: 'Advanced analytics and follow-up systems that maximize your revenue potential through intelligent lead nurturing and client retention.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: 'Revenue Generated', value: '£450K+', icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'ROI Increase', value: '300%', icon: <Star className="w-5 h-5" /> }
      ],
      benefits: [
        'Automated follow-ups',
        'Lead qualification',
        'Upselling opportunities',
        'Performance tracking'
      ]
    },
    {
      title: 'Client Satisfaction',
      description: 'Personalized interactions that build lasting relationships, ensuring every client feels valued and receives exceptional service.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { label: 'Satisfaction Rate', value: '98.5%', icon: <Star className="w-5 h-5" /> },
        { label: 'Client Retention', value: '95%', icon: <Users className="w-5 h-5" /> }
      ],
      benefits: [
        'Personalized service',
        'Consistent quality',
        'Professional interactions',
        'Brand alignment'
      ]
    }
  ];

  return (
    <section id="feature-showcase" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <Zap className="w-5 h-5 text-gold-600 mr-2" />
            <span className="text-gray-800 font-semibold">AI-Powered Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See BA Boutique in Action
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI transforms every aspect of your business operations
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Feature Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {features[activeFeature].title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {features[activeFeature].description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features[activeFeature].stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-fuchsia-600">
                        {stat.icon}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Navigation */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600' 
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Feature Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-96 object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-600 mb-1">
                  {animatedStats.calls.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Calls Handled</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="bg-gradient-to-r from-fuchsia-50 to-gold-50 rounded-2xl p-12 border border-fuchsia-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Transforming Businesses Worldwide
            </h3>
            <p className="text-lg text-gray-600">
              Real results from real businesses using BA Boutique AI
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-fuchsia-600 mb-2">
                {animatedStats.calls.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Calls Handled</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">
                {animatedStats.bookings.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Bookings Made</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                £{(animatedStats.revenue / 1000).toFixed(0)}K+
              </div>
              <div className="text-gray-600 font-medium">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {animatedStats.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;