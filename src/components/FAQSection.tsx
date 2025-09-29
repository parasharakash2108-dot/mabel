import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How quickly can BA Boutique AI be set up for my business?",
    answer: "Our white-glove onboarding process typically takes 7-14 days for full deployment. This includes personality selection, script training, system integration, and comprehensive testing. VIP Concierge clients receive priority setup in 7-10 days with dedicated account management throughout the process."
  },
  {
    question: "What makes your AI personalities different from standard chatbots?",
    answer: "Our AI personalities are character-driven with distinct voices, communication styles, and emotional intelligence. Each persona is meticulously crafted with unique traits - Jessica's luxurious elegance, Maya's glamorous confidence, or Jay's charming persuasion. They're trained to sound like premium team members, not robotic assistants."
  },
  {
    question: "Can the AI handle complex booking scenarios and industry-specific requirements?",
    answer: "Absolutely. Our AI is trained on industry-specific protocols for medspas, beauty clinics, real estate, coaching, and high-ticket services. They handle complex scheduling, understand treatment durations, manage cancellation policies, and escalate sensitive calls to humans when appropriate."
  },
  {
    question: "What kind of ROI can I expect from BA Boutique AI?",
    answer: "Our clients typically see 20-30% booking increases within 90 days, save £2,000+ monthly on staffing costs, and reduce no-shows by up to 70%. The average ROI is 300-500% within the first year, with many clients reporting six-figure revenue increases from improved call handling and follow-up."
  },
  {
    question: "How does the AI integrate with my existing CRM and booking systems?",
    answer: "BA Boutique AI seamlessly integrates with popular CRMs like Salesforce, HubSpot, and industry-specific platforms. Our technical team handles all integration work, ensuring smooth data flow, automated booking confirmations, and synchronized client records across all your systems."
  },
  {
    question: "What happens if the AI encounters a situation it can't handle?",
    answer: "Our AI is designed with intelligent escalation protocols. Complex situations, sensitive inquiries, or requests outside the AI's scope are seamlessly transferred to your human team with full context and conversation history. This ensures no client ever feels abandoned or frustrated."
  },
  {
    question: "Is my client data secure and compliant with privacy regulations?",
    answer: "Security is paramount. We maintain bank-level encryption, GDPR compliance, and industry-specific regulations (HIPAA for medical practices). All data is encrypted in transit and at rest, with regular security audits and compliance certifications to protect your business and clients."
  },
  {
    question: "Can I customize the AI's responses and personality for my brand?",
    answer: "Yes, extensive customization is included. We train your AI on your brand voice, specific terminology, pricing, policies, and communication style. VIP Concierge clients receive custom voice/dialect tuning and ongoing personality refinements to perfectly match your brand identity."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-40 bg-gradient-to-br from-gray-50 via-white to-gold-50/20 relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-12 border border-gold-200 shadow-xl hover:scale-105 transition-all duration-500 transform-gpu">
            <HelpCircle className="w-6 h-6 text-gold-600 mr-3" />
            <span className="text-black font-bold text-lg">Frequently Asked Questions</span>
          </div>
          
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-black mb-8 drop-shadow-lg transform-gpu hover:rotateX-2 transition-all duration-700">
            Your Questions,
            <br />
            <span className="font-script text-fuchsia-500 text-5xl md:text-7xl drop-shadow-xl">Answered</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know about BA Boutique's luxury AI solutions
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-200 overflow-hidden backdrop-blur-sm hover:scale-102 hover:rotateX-1 transform-gpu perspective-1000"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-gold-50/50 hover:to-fuchsia-50/50 transition-all duration-300"
              >
                <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-black pr-6 leading-tight drop-shadow-sm">
                  {faq.question}
                </h3>
                <div className={`w-10 h-10 bg-gradient-to-r from-gold-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 transform-gpu ${openIndex === index ? 'rotate-180 scale-110' : 'hover:scale-105'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="text-white" size={20} />
                  ) : (
                    <ChevronDown className="text-white" size={20} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 animate-fade-in-up">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent mb-6"></div>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-2xl p-10 border border-gold-200 shadow-xl hover:scale-105 transition-all duration-700 transform-gpu">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-black mb-4 drop-shadow-sm">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-light">
              Our luxury AI specialists are here to provide personalized answers and guidance.
            </p>
            <button className="bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:rotateY-3 transition-all duration-500 shadow-xl transform-gpu">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;