import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-xl'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="font-['Montserrat'] tracking-tight text-black">BA </span>
              <span className="font-script text-[#FF2D96]">Boutique</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('team')}
              className="font-medium transition-all duration-300 hover:scale-105 text-black hover:text-[#FF2D96]"
            >
              Our Team
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="font-medium transition-all duration-300 hover:scale-105 text-black hover:text-[#FF2D96]"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-medium transition-all duration-300 hover:scale-105 text-black hover:text-[#FF2D96]"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="transition-colors duration-300 text-black"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 rounded-b-2xl shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('team')}
                className="block w-full text-left py-3 text-black hover:text-[#FF2D96] font-medium transition-colors"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left py-3 text-black hover:text-[#FF2D96] font-medium transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 text-black hover:text-[#FF2D96] font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;