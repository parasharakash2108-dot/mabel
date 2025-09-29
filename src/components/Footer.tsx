import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="font-heading tracking-tight">BA </span>
                <span className="font-script text-fuchsia-500">Boutique</span>
              </h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-md">
                Sophisticated AI receptionists and sales agents that elevate your business operations 
                with unparalleled professionalism and efficiency.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-amber-600" />
                <span>hello@bookedandautomated.co</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>Available 24/7 via AI</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Serving Premium Businesses Globally</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-amber-600">Services</h4>
            <ul className="space-y-3">
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors font-light">AI Receptionists</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors font-light">AI Sales Agents</a></li>
              <li><a href="#analytics" className="text-gray-400 hover:text-white transition-colors font-light">Analytics & Insights</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors font-light">Investment Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-amber-600">Company</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 font-light">Booked & Automated Boutique</span></li>
              <li><span className="text-gray-400 font-light">AI-Powered Business Solutions</span></li>
              <li><span className="text-gray-400 font-light">Always On, Always Polished</span></li>
            </ul>
            
            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-amber-600">Connect</h5>
              <a 
                href="https://www.instagram.com/bookedandautomated.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
              >
                <Instagram size={20} className="text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-light">
              &copy; 2024 Booked & Automated Boutique. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;