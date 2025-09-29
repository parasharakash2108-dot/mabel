import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="font-['Montserrat'] tracking-tight">Booked & Automated </span>
                <span className="font-script text-[#FF2D96]">Boutique</span>
              </h3>
              <p className="text-white font-medium leading-relaxed max-w-md">
                Sophisticated AI receptionists and sales agents that elevate your business operations 
                with unparalleled professionalism and efficiency.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-5 h-5 text-[#FF2D96]" />
                <span>hello@bookedandautomated.co</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#FF2D96]">Connect</h4>
            <a 
              href="https://www.instagram.com/bookedandautomated.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-[#FF2D96] rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#FF2D96] pt-8">
          <div className="text-center">
            <p className="text-white font-medium">
              &copy; 2024 Booked & Automated Boutique. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;