import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Jessica answered 42 missed calls in our first week. We filled the diary without hiring another receptionist.",
    author: "MedSpa Owner",
    location: "London",
    rating: 5
  },
  {
    quote: "Maya rebooked 3 no-shows before I even noticed. It's like having a glam PA who never clocks out.",
    author: "Salon Director", 
    location: "Manchester",
    rating: 5
  },
  {
    quote: "Jay booked £7,500 of sales calls last month. He doesn't just talk — he delivers.",
    author: "Coaching Business",
    location: "Birmingham", 
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-black mb-6">
            Client Voices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-[#FF2D96] transition-all duration-300">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#FF2D96] fill-current w-5 h-5" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-800 leading-relaxed mb-6 relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#FF2D96] opacity-50" />
                <p className="italic pl-4 font-medium">"{testimonial.quote}"</p>
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-black">{testimonial.author}</div>
                <div className="text-gray-600 font-medium">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;