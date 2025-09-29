import { TrendingUp, Users, Clock, Target, BarChart3, PieChart } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnalyticsSection = () => {
  const [animatedValues, setAnimatedValues] = useState({
    bookingIncrease: 0,
    costSavings: 0,
    callsAnswered: 0,
    clientSatisfaction: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate numbers when section comes into view
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            
            let step = 0;
            const interval = setInterval(() => {
              step++;
              const progress = step / steps;
              
              setAnimatedValues({
                bookingIncrease: Math.floor(35 * progress),
                costSavings: Math.floor(2400 * progress),
                callsAnswered: Math.floor(99.8 * progress * 100) / 100,
                clientSatisfaction: Math.floor(96 * progress)
              });
              
              if (step >= steps) {
                clearInterval(interval);
                setAnimatedValues({
                  bookingIncrease: 35,
                  costSavings: 2400,
                  callsAnswered: 99.8,
                  clientSatisfaction: 96
                });
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('analytics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="analytics" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gold-50/30 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-12 border border-gold-200 shadow-xl">
            <BarChart3 className="w-6 h-6 text-gold-600 mr-3" />
            <span className="text-black font-bold text-lg">Performance Analytics</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-8">
            Measurable Excellence
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
            Our AI receptionists deliver quantifiable results that transform your business operations 
            and drive sustainable growth.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 border-2 border-gray-100 hover:border-emerald-200 group backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-black group-hover:text-emerald-600 transition-colors duration-300">
                  {animatedValues.bookingIncrease}%
                </div>
                <div className="text-base text-gray-500 font-bold">Average Increase</div>
              </div>
            </div>
            <h3 className="font-bold text-black mb-3 text-xl relative z-10">Booking Rate Uplift</h3>
            <p className="text-gray-600 text-lg font-medium leading-relaxed relative z-10">Clients experience significant booking increases within 90 days</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 border-2 border-gray-100 hover:border-blue-200 group">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-black group-hover:text-blue-600 transition-colors duration-300">
                  £{animatedValues.costSavings.toLocaleString()}
                </div>
                <div className="text-base text-gray-500 font-bold">Monthly Savings</div>
              </div>
            </div>
            <h3 className="font-bold text-black mb-3 text-xl">Cost Reduction</h3>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">Average monthly savings on staffing and missed opportunities</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 border-2 border-gray-100 hover:border-gold-200 group">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-black group-hover:text-gold-600 transition-colors duration-300">
                  {animatedValues.callsAnswered}%
                </div>
                <div className="text-base text-gray-500 font-bold">Call Coverage</div>
              </div>
            </div>
            <h3 className="font-bold text-black mb-3 text-xl">Call Answer Rate</h3>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">Near-perfect call coverage eliminates missed opportunities</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 border-2 border-gray-100 hover:border-fuchsia-200 group">
            <div className="flex items-center justify-between mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-black group-hover:text-fuchsia-600 transition-colors duration-300">
                  {animatedValues.clientSatisfaction}%
                </div>
                <div className="text-base text-gray-500 font-bold">Satisfaction</div>
              </div>
            </div>
            <h3 className="font-bold text-black mb-3 text-xl">Client Satisfaction</h3>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">Exceptional service quality maintains high satisfaction rates</p>
          </div>
        </div>

        {/* Advanced Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Revenue Growth Chart */}
          <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-gray-100 hover:border-gold-200 transition-all duration-500 hover:shadow-3xl">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-black">Revenue Growth Trajectory</h3>
              <PieChart className="w-8 h-8 text-gold-600" />
            </div>
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-bold text-lg">Month 1-3</span>
                <div className="flex-1 mx-6 bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 h-4 rounded-full shadow-lg" style={{width: '25%'}}></div>
                </div>
                <span className="text-black font-bold text-xl">+25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-bold text-lg">Month 4-6</span>
                <div className="flex-1 mx-6 bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 h-4 rounded-full shadow-lg" style={{width: '45%'}}></div>
                </div>
                <span className="text-black font-bold text-xl">+45%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-bold text-lg">Month 7-12</span>
                <div className="flex-1 mx-6 bg-gray-200 rounded-full h-4">
                  <div className="bg-gradient-to-r from-gold-500 to-gold-600 h-4 rounded-full shadow-lg" style={{width: '70%'}}></div>
                </div>
                <span className="text-black font-bold text-xl">+70%</span>
              </div>
            </div>
          </div>

          {/* Efficiency Metrics */}
          <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-gray-100 hover:border-fuchsia-200 transition-all duration-500 hover:shadow-3xl">
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-black">Operational Efficiency</h3>
              <BarChart3 className="w-8 h-8 text-fuchsia-600" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-black mb-3">24/7</div>
                <div className="text-base text-gray-600 font-bold">Availability</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-black mb-3">{'<3s'}</div>
                <div className="text-base text-gray-600 font-bold">Response Time</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-black mb-3">85%</div>
                <div className="text-base text-gray-600 font-bold">First-Call Resolution</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-black mb-3">12+</div>
                <div className="text-base text-gray-600 font-bold">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;