import { Check, Star, Crown, Zap } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
  buttonText: string;
  icon: React.ReactNode;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '£249',
    period: '/mo',
    description: 'Ideal for solo operators and small salons',
    icon: <Zap className="w-6 h-6" />,
    features: [
      '1 AI Receptionist Avatar',
      '1 Channel (calls or SMS/WhatsApp)',
      'Appointment booking + reminders',
      'Weekly usage reports',
      '£50 call/message credits (~200 calls or 500 SMS)'
    ],
    buttonText: 'Choose Starter'
  },
  {
    name: 'Pro',
    price: '£699',
    period: '/mo',
    description: 'Perfect for growing clinics & busy salons',
    icon: <Star className="w-6 h-6" />,
    features: [
      '2 Receptionist Avatars (inbound + follow-up)',
      'Multi-channel (calls + SMS/WhatsApp)',
      'CRM integration + missed-call reactivation',
      'Automations & workflow setup',
      'Monthly KPI reports',
      '£150 call/message credits (~600 calls or 1,500 SMS)'
    ],
    popular: true,
    buttonText: 'Go Pro'
  },
  {
    name: 'VIP Concierge',
    price: '£999',
    period: '/mo',
    description: 'Exclusive for premium, multi-location practices',
    icon: <Crown className="w-6 h-6" />,
    features: [
      'All Pro features plus:',
      'Custom voice/dialect tuning',
      'Outbound campaigns',
      'Full analytics dashboard',
      'Dedicated account manager',
      '£300 call/message credits (~1,200 calls or 3,000 SMS)'
    ],
    premium: true,
    buttonText: 'Unlock VIP'
  }
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div className={`relative bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 border-2 ${
      plan.popular 
        ? 'border-fuchsia-500 scale-105 bg-gradient-to-br from-white to-fuchsia-50/30' 
        : plan.premium 
          ? 'border-gold-500 bg-gradient-to-br from-white to-gold-50/30' 
          : 'border-gray-200'
    } group backdrop-blur-sm`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl border border-fuchsia-400/30">
            <Star size={16} />
            Most Popular
          </div>
        </div>
      )}
      
      {plan.premium && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-gold-600 to-gold-700 text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl border border-gold-500/30">
            <Crown size={16} />
            VIP Concierge
          </div>
        </div>
      )}
      
      <div className="text-center mb-10 relative z-10">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
          plan.popular 
            ? 'bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 text-white shadow-lg' 
            : plan.premium 
              ? 'bg-gradient-to-br from-gold-600 to-gold-700 text-white shadow-lg'
              : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 shadow-md'
        } group-hover:scale-110 transition-transform duration-300`}>
          {plan.icon}
        </div>
        
        <h3 className="font-['Playfair_Display'] text-3xl font-bold text-black mb-3">
          {plan.name}
        </h3>
        <div className="flex items-baseline justify-center mb-4">
          <span className={`text-5xl font-bold ${
            plan.popular ? 'text-fuchsia-600' : plan.premium ? 'text-gold-600' : 'text-black'
          }`}>
            {plan.price}
          </span>
          <span className="text-gray-500 ml-2 font-medium text-lg">{plan.period}</span>
        </div>
        <p className="text-gray-600 font-medium text-lg">{plan.description}</p>
      </div>

      <ul className="space-y-4 mb-10 relative z-10">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
              plan.popular 
                ? 'bg-fuchsia-100' 
                : plan.premium 
                  ? 'bg-gold-100'
                  : 'bg-gray-50'
            }`}>
              <Check className={`w-3 h-3 ${
                plan.popular 
                  ? 'text-fuchsia-600' 
                  : plan.premium 
                    ? 'text-gold-600'
                    : 'text-gray-600'
              }`} />
            </div>
            <span className="text-gray-700 font-medium text-base leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`relative z-10 w-full py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl ${
        plan.popular 
          ? 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white hover:from-fuchsia-400 hover:to-fuchsia-500 border border-fuchsia-400/30' 
          : plan.premium 
            ? 'bg-gradient-to-r from-gold-600 to-gold-700 text-white hover:from-gold-500 hover:to-gold-600 border border-gold-500/30'
            : 'bg-gradient-to-r from-black to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 border border-gray-700/30'
      }`}>
        {plan.buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-gold-50/30 to-fuchsia-50/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 shadow-lg border border-gold-200">
            <span className="text-black font-semibold">Luxury Investment Plans</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-black mb-6">
            Receptionist <span className="font-script text-fuchsia-500">Boutique™</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Choose the perfect plan to elevate your business operations with our sophisticated AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-3xl p-10 shadow-xl border border-gold-200 max-w-4xl mx-auto">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-black mb-4">
              Enterprise Solutions Available
            </h3>
            <p className="text-gray-600 mb-8 font-light">
              For multi-location businesses and enterprise clients requiring custom integrations, 
              dedicated infrastructure, and bespoke AI training.
            </p>
            <button className="bg-gradient-to-r from-black to-gray-800 text-white px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl">
              Discuss Enterprise Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;