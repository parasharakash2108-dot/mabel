import { useState } from 'react';
import { X, Phone, User, Mail, Building, Briefcase, Loader } from 'lucide-react';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessNiche: string;
  companyName: string;
}

const LeadForm = ({ isOpen, onClose }: LeadFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessNiche: '',
    companyName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const businessNiches = [
    'Medical Spa',
    'Beauty Salon',
    'Wellness Center',
    'Real Estate',
    'Executive Coaching',
    'Aesthetic Clinic',
    'Dental Practice',
    'Fitness Studio',
    'Luxury Services',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare data for CloserX API
      const closerXData = {
        quick_campaign: "quickcamp0bd87ee5",
        contact_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        contact_number: formData.phone,
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        industry: formData.businessNiche,
        address: "",
        custom1: "BA Boutique Lead",
        custom2: "Website Form",
        custom3: new Date().toISOString(),
        custom4: "Jessica Call Request"
      };

      // Make API call to CloserX
      const response = await fetch('https://app.closerx.ai/api/zapier/quick_call_result/?api_key=27d03729-ed85-4e3b-a999-efe0b89388e3', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(closerXData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            businessNiche: '',
            companyName: ''
          });
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-3xl border border-gold-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-fuchsia-500 to-gold-500 p-8 text-white relative overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg z-10"
          >
            <X size={20} />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Call Jessica Now
            </h2>
            <p className="text-lg opacity-90">
              Fill out the form below and Jessica will call you within 2 minutes
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Call Scheduled Successfully!
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Jessica will call you at <strong>{formData.phone}</strong> within the next 2 minutes.
              </p>
              <div className="bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-xl p-6 border border-gold-200">
                <p className="text-gray-700 font-medium">
                  Please keep your phone nearby and answer when Jessica calls. 
                  She's excited to discuss how BA Boutique can transform your business!
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Business Niche */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Business Niche *
                </label>
                <select
                  name="businessNiche"
                  value={formData.businessNiche}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your business niche</option>
                  {businessNiches.map((niche) => (
                    <option key={niche} value={niche}>
                      {niche}
                    </option>
                  ))}
                </select>
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-700 font-medium">
                    There was an error scheduling your call. Please try again or contact us directly.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-fuchsia-500 to-gold-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Scheduling Your Call...
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5" />
                    Call Jessica Now
                  </>
                )}
              </button>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Instant callback</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                  <span>No commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                  <span>Free consultation</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;