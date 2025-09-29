import { Check, X, Crown, Zap, Users, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const ComparisonSection = () => {
  const [activeComparison, setActiveComparison] = useState(0);

  const comparisons = [
    {
      title: 'BA Boutique vs Traditional Receptionists',
      subtitle: 'See why AI is the future of client service',
      categories: [
        {
          feature: 'Availability',
          baValue: '24/7/365',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'Business hours only',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Cost per month',
          baValue: 'From £249',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: '£2,000-£4,000+',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Sick days',
          baValue: 'Never',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: '5-10 days/year',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Training required',
          baValue: 'Pre-trained',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: '2-4 weeks',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Consistency',
          baValue: 'Perfect every time',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'Varies by person',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Scalability',
          baValue: 'Instant scaling',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'Hire & train more staff',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        }
      ]
    },
    {
      title: 'BA Boutique vs Other AI Solutions',
      subtitle: 'Why we lead the luxury AI market',
      categories: [
        {
          feature: 'Personality-driven',
          baValue: '6 unique personalities',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'Generic responses',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Industry specialization',
          baValue: 'Luxury & premium focus',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'One-size-fits-all',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Voice quality',
          baValue: 'Human-like conversations',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'Robotic responses',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Setup time',
          baValue: '7-14 days',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: '4-8 weeks',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Support level',
          baValue: 'Dedicated account manager',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'Basic support tickets',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        },
        {
          feature: 'Customization',
          baValue: 'Fully customizable',
          baIcon: <Check className="w-5 h-5 text-emerald-500" />,
          traditionalValue: 'Limited options',
          traditionalIcon: <X className="w-5 h-5 text-red-500" />
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <Crown className="w-5 h-5 text-gold-600 mr-2" />
            <span className="text-gray-800 font-semibold">Competitive Advantage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose BA Boutique?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we compare to traditional solutions and other AI providers
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          {comparisons.map((comparison, index) => (
            <button
              key={index}
              onClick={() => setActiveComparison(index)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeComparison === index
                  ? 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {comparison.title}
            </button>
          ))}
        </div>

        {/* Active Comparison */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-fuchsia-50 to-gold-50 p-8 text-center border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {comparisons[activeComparison].title}
            </h3>
            <p className="text-gray-600">
              {comparisons[activeComparison].subtitle}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left p-6 text-gray-600 font-semibold">Feature</th>
                  <th className="text-center p-6 bg-gradient-to-r from-fuchsia-50 to-fuchsia-100">
                    <div className="flex items-center justify-center gap-2">
                      <Crown className="w-5 h-5 text-fuchsia-600" />
                      <span className="font-bold text-fuchsia-600">BA Boutique</span>
                    </div>
                  </th>
                  <th className="text-center p-6 text-gray-600 font-semibold">
                    {activeComparison === 0 ? 'Traditional Staff' : 'Other AI Solutions'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons[activeComparison].categories.map((category, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-gray-25 transition-colors">
                    <td className="p-6 font-medium text-gray-900">
                      {category.feature}
                    </td>
                    <td className="p-6 text-center bg-gradient-to-r from-fuchsia-25 to-fuchsia-50">
                      <div className="flex items-center justify-center gap-3">
                        {category.baIcon}
                        <span className="font-semibold text-gray-900">{category.baValue}</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-3">
                        {category.traditionalIcon}
                        <span className="text-gray-600">{category.traditionalValue}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mt-20 bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-2xl p-12 border border-gold-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate Your Savings
            </h3>
            <p className="text-lg text-gray-600">
              See how much you could save by switching to BA Boutique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">£2,400</div>
              <div className="text-gray-600 font-medium">Monthly Savings</div>
              <div className="text-sm text-gray-500 mt-2">vs Traditional Staff</div>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-fuchsia-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">35%</div>
              <div className="text-gray-600 font-medium">More Bookings</div>
              <div className="text-sm text-gray-500 mt-2">24/7 Availability</div>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-gold-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
              <div className="text-gray-600 font-medium">ROI Increase</div>
              <div className="text-sm text-gray-500 mt-2">Within 12 Months</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Get Your Custom ROI Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;