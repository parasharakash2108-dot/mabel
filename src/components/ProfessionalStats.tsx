import { TrendingUp, Users, Clock, Target, BarChart3, Zap, Shield, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProfessionalStats = () => {
  const [animatedValues, setAnimatedValues] = useState({
    callsAnswered: 0,
    bookingIncrease: 0,
    costSavings: 0,
    clientSatisfaction: 0,
    responseTime: 0,
    uptime: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2500;
            const steps = 60;
            const stepDuration = duration / steps;
            
            let step = 0;
            const interval = setInterval(() => {
              step++;
              const progress = step / steps;
              
              setAnimatedValues({
                callsAnswered: Math.floor(99.8 * progress * 100) / 100,
                bookingIncrease: Math.floor(35 * progress),
                costSavings: Math.floor(2400 * progress),
                clientSatisfaction: Math.floor(96 * progress),
                responseTime: Math.floor(2.8 * progress * 10) / 10,
                uptime: Math.floor(99.9 * progress * 100) / 100
              });
              
              if (step >= steps) {
                clearInterval(interval);
                setAnimatedValues({
                  callsAnswered: 99.8,
                  bookingIncrease: 35,
                  costSavings: 2400,
                  clientSatisfaction: 96,
                  responseTime: 2.8,
                  uptime: 99.9
                });
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('professional-stats');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      value: `${animatedValues.callsAnswered}%`,
      label: 'Calls Answered',
      description: 'Never miss another opportunity',
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: `${animatedValues.bookingIncrease}%`,
      label: 'Booking Increase',
      description: 'Average growth in 90 days',
      gradient: 'from-fuchsia-500 to-fuchsia-600',
      bgGradient: 'from-fuchsia-50 to-fuchsia-100'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: `£${animatedValues.costSavings.toLocaleString()}`,
      label: 'Monthly Savings',
      description: 'Reduced operational costs',
      gradient: 'from-gold-500 to-gold-600',
      bgGradient: 'from-gold-50 to-gold-100'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: `${animatedValues.clientSatisfaction}%`,
      label: 'Client Satisfaction',
      description: 'Consistently high ratings',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: `${animatedValues.responseTime}s`,
      label: 'Response Time',
      description: 'Lightning-fast interactions',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: `${animatedValues.uptime}%`,
      label: 'Uptime Guarantee',
      description: 'Always available for clients',
      gradient: 'from-gray-600 to-gray-700',
      bgGradient: 'from-gray-50 to-gray-100'
    }
  ];

  return (
    <section id="professional-stats" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <BarChart3 className="w-5 h-5 text-gold-600 mr-2" />
            <span className="text-gray-800 font-semibold">Performance Metrics</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Measurable Excellence
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI delivers quantifiable results that transform business operations
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gold-200 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {stat.value}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Chart Visualization */}
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12 shadow-lg border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Growth Trajectory
            </h3>
            <p className="text-lg text-gray-600">
              Average client performance over 12 months
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold text-lg w-32">Month 1-3</span>
              <div className="flex-1 mx-8 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-gold-500 to-gold-600 h-6 rounded-full shadow-lg transition-all duration-2000 ease-out"
                  style={{width: '25%'}}
                ></div>
              </div>
              <span className="text-gray-900 font-bold text-xl w-16">+25%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold text-lg w-32">Month 4-6</span>
              <div className="flex-1 mx-8 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 h-6 rounded-full shadow-lg transition-all duration-2000 ease-out"
                  style={{width: '45%'}}
                ></div>
              </div>
              <span className="text-gray-900 font-bold text-xl w-16">+45%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold text-lg w-32">Month 7-12</span>
              <div className="flex-1 mx-8 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-6 rounded-full shadow-lg transition-all duration-2000 ease-out"
                  style={{width: '70%'}}
                ></div>
              </div>
              <span className="text-gray-900 font-bold text-xl w-16">+70%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalStats;