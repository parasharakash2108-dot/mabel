import { Star, Quote, Award, Crown, Sparkles, TrendingUp, Users, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
  revenue: string;
  timeframe: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Sophia Hartwell',
    title: 'Medical Director',
    company: 'Luxe MedSpa',
    location: 'Mayfair, London',
    text: 'Jessica answered 42 missed calls in our first week alone. We filled our entire diary without hiring another receptionist. The sophistication and grace she brings to every interaction has elevated our brand immeasurably.',
    avatar: '/WhatsApp Image 2025-09-27 at 02.57.29_6f61f254.jpg',
    rating: 5,
    revenue: '£47,000',
    timeframe: '3 months',
    industry: 'MedSpa'
  },
  {
    name: 'Isabella Chen',
    title: 'Salon Director',
    company: 'Glamour Studios',
    location: 'Deansgate, Manchester',
    text: 'Maya rebooked 3 no-shows before I even noticed they had cancelled. It\'s like having a glamorous personal assistant who never clocks out. Our client retention has increased by 40%.',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    revenue: '£28,500',
    timeframe: '2 months',
    industry: 'Beauty'
  },
  {
    name: 'Marcus Wellington',
    title: 'Executive Coach',
    company: 'Wellington Coaching',
    location: 'Birmingham',
    text: 'Jay booked £7,500 worth of sales calls last month alone. He doesn\'t just talk — he delivers results with charm and professionalism that rivals our best human sales representatives.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    revenue: '£67,200',
    timeframe: '4 months',
    industry: 'Coaching'
  },
  {
    name: 'Lady Victoria Ashworth',
    title: 'Wellness Director',
    company: 'Serenity Retreats',
    location: 'Cotswolds',
    text: 'Nia has transformed our booking experience entirely. Her calming presence and intuitive responses have created a sanctuary of peace that begins the moment clients call.',
    avatar: 'https://images.pexels.com/photos/3762811/pexels-photo-3762811.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    revenue: '£35,800',
    timeframe: '3 months',
    industry: 'Wellness'
  },
  {
    name: 'James Morrison',
    title: 'Real Estate Director',
    company: 'Morrison Properties',
    location: 'Edinburgh',
    text: 'Luke handles our property inquiries with incredible efficiency. Every lead is captured, qualified, and scheduled perfectly. Our conversion rate has increased by 45%.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    revenue: '£89,300',
    timeframe: '5 months',
    industry: 'Real Estate'
  },
  {
    name: 'Sarah Thompson',
    title: 'Clinic Manager',
    company: 'Elite Aesthetics',
    location: 'Glasgow',
    text: 'Leo works behind the scenes organizing everything perfectly. Our no-show rate dropped by 65% and client satisfaction scores are at an all-time high.',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    revenue: '£52,100',
    timeframe: '4 months',
    industry: 'Aesthetics'
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gold-200 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-gold-500 to-fuchsia-500 rounded-full flex items-center justify-center">
              <Award size={12} className="text-white" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 font-medium">{testimonial.title}</p>
            <p className="text-sm text-gray-500">{testimonial.company} • {testimonial.location}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full text-xs font-bold text-gray-800 mb-2">
            {testimonial.industry}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="text-gold-500 fill-current w-4 h-4" />
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
        <Quote className="absolute -top-2 -left-2 w-6 h-6 text-gold-300 opacity-50" />
        <p className="italic pl-4">"{testimonial.text}"</p>
      </blockquote>

      {/* Results */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-fuchsia-600">{testimonial.revenue}</div>
          <div className="text-xs text-gray-500 font-medium">Revenue Generated</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gold-600">{testimonial.timeframe}</div>
          <div className="text-xs text-gray-500 font-medium">Time Period</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-xs text-gray-500 font-medium mt-1">Growth</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    revenue: 0,
    satisfaction: 0,
    growth: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;
            
            let step = 0;
            const interval = setInterval(() => {
              step++;
              const progress = step / steps;
              
              setAnimatedStats({
                clients: Math.floor(500 * progress),
                revenue: Math.floor(320000 * progress),
                satisfaction: Math.floor(98.7 * progress * 10) / 10,
                growth: Math.floor(45 * progress)
              });
              
              if (step >= steps) {
                clearInterval(interval);
                setAnimatedStats({
                  clients: 500,
                  revenue: 320000,
                  satisfaction: 98.7,
                  growth: 45
                });
              }
            }, stepDuration);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex * 3, (currentIndex * 3) + 3);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-fuchsia-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <Crown className="w-5 h-5 text-gold-600 mr-2" />
            <span className="text-gray-800 font-semibold">Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Premium Businesses
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how luxury businesses achieve unprecedented growth with our AI solutions
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{animatedStats.clients}+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">£{(animatedStats.revenue / 1000).toFixed(0)}K+</div>
            <div className="text-gray-600 font-medium">Revenue Generated</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{animatedStats.satisfaction}%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{animatedStats.growth}%</div>
            <div className="text-gray-600 font-medium">Average Growth</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${currentIndex}-${index}`} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mb-12">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-gold-500 to-fuchsia-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-2xl p-12 border border-gold-200 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with AI that delivers measurable results?
            </p>
            <button className="bg-gradient-to-r from-gold-500 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule Your Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;