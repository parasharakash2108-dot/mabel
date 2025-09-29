import { ArrowUp } from 'lucide-react';

const StickyButton = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button 
        onClick={scrollToDemo}
        className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-amber-500/25 flex items-center gap-3"
      >
        <span>Start Today</span>
        <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default StickyButton;