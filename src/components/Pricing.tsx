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
      'Includes 1 AI receptionist avatar',
      'Appointment booking',
      'Weekly usage reports'
    ],
    buttonText: 'Choose Starter'
  },
  {
    name: 'Pro',
    price: '£699',
    period: '/mo',
    description: 'For growing clinics and busy salons',
    icon: <Star className="w-6 h-6" />,
    features: [
      'Includes 2 receptionist avatars',
      'Multi-channel (calls & SMS/WhatsApp)',
      'CRM integration'
    ],
    popular: true,
    buttonText: 'Go Pro'
  },
  {
    name: 'VIP Concierge',
    price: '£999',
    period: '/mo',
    description: 'For premium, multi-location practices',
    icon: <Crown className="w-6 h-6" />,
    features: [
      'Includes all Pro features plus',
      'Custom voice/dialect tuning',
      'Dedicated account manager'
    ],
    premium: true,
    buttonText: 'Unlock VIP'
  }
];

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div className={`relative bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 ${
      plan.popular || plan.premium ? 'border-[#FF2D96]' : 'border-gray-200'
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#FF2D96] text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
            <Star size={16} />
            Most Popular
          </div>
        </div>
      )}
      
      {plan.premium && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
            <Crown size={16} />
            VIP Concierge
          </div>
        </div>
      )}
      
      <div className="text-center mb-10">
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center bg-[#FF2D96] text-white shadow-md">
          {plan.icon}
        </div>
        
        <h3 className="font-['Montserrat'] text-2xl font-bold text-black mb-3">
          {plan.name}
        </h3>
        <div className="flex items-baseline justify-center mb-4">
          <span className="text-4xl font-bold text-black">
            {plan.price}
          </span>
          <span className="text-gray-600 ml-2 font-medium text-lg">{plan.period}</span>
        </div>
        <p className="text-gray-700 font-medium">{plan.description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-[#FF2D96]">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-800 font-medium text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-md ${
        plan.popular || plan.premium
          ? 'bg-[#FF2D96] text-white hover:bg-[#e0267d]' 
          : 'bg-black text-white hover:bg-[#FF2D96]'
      }`}>
        {plan.buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-black mb-6">
            Subscription/Pricing Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;