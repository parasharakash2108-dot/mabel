import { ArrowRight, Calendar } from 'lucide-react';

const FinalCTA = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-black via-fuchsia-900/20 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-600/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-gold-500/30 mb-8">
            <span className="text-gold-400 font-medium">Transform Your Business Today</span>
            <div className="ml-3 w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Are You Ready to Experience the Luxury of
          <br />
          <span className="bg-gradient-to-r from-gold-400 to-fuchsia-500 bg-clip-text text-transparent">
            24/7 AI Concierge?
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-gray-300 max-w-4xl mx-auto">
          Let our boutique AI receptionists and sales agents handle your calls, rebook your clients, 
          and drive your business to new heights. It's time to work smarter, not harder.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToDemo}
            className="group bg-gradient-to-r from-gold-500 to-gold-600 text-black px-12 py-6 rounded-2xl font-semibold text-lg hover:from-fuchsia-500 hover:to-fuchsia-600 hover:text-white hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-gold-500/25 flex items-center gap-4"
          >
            <Calendar size={24} />
            Book a Personal Demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToDemo}
            className="border-2 border-fuchsia-500/60 text-fuchsia-400 px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-fuchsia-500/10 hover:border-fuchsia-500 hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
          >
            Hear a Sample Call
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-12 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
            <span>30-day guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>White-glove onboarding</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;