import { Play } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
  audioUrl: string;
  buttonText: string;
  gradient: string;
}

const receptionists: TeamMember[] = [
  {
    id: 'jessica',
    name: 'Jessica — The Luxe Concierge',
    title: 'Grace, elegance, and VIP treatment — Perfect for high-end luxury brands and clients who expect nothing less.',
    quote: '"Hello lovely, I\'ll treat every client like a VIP."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720760/ai_image_1_za8cf5.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710442/Jessica_a0uxgs.mp3',
    buttonText: 'Meet the Luxe Concierge',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    id: 'maya',
    name: 'Maya — The Glow Getter',
    title: 'Confident, bold, and effortlessly glamorous — Keeps beauty clients coming back for more.',
    quote: '"Hey babe, ready to rebook your glow-up?"',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720813/ai_image_2_lxyhqg.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710539/Maya_apdykk.mp3',
    buttonText: 'Meet the Glow Getter',
    gradient: 'from-fuchsia-500 to-fuchsia-600'
  },
  {
    id: 'nia',
    name: 'Nia — The Wellness Oracle',
    title: 'Soothing, calming, and intuitive — The perfect balance for wellness brands needing a peaceful presence.',
    quote: '"Take a deep breath — I\'ll keep your calendar balanced."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720870/ai_image_3_bt3xlj.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710600/Nia_wrf0jn.mp3',
    buttonText: 'Meet the Wellness Oracle',
    gradient: 'from-emerald-500 to-emerald-600'
  }
];

const salesAgents: TeamMember[] = [
  {
    id: 'jay',
    name: 'Jay — The Charming Closer',
    title: 'Charming, persuasive, and an expert at converting leads into loyal clients.',
    quote: '"Let me handle the tough calls — I\'ll win them over for you."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720988/ai_image_5_oub6jc.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710774/Jay_wvhhnc.mp3',
    buttonText: 'Meet the Charming Closer',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    id: 'leo',
    name: 'Leo — The Quiet Genius',
    title: 'Thoughtful, focused, and always one step ahead — Keeps your business running smoothly behind the scenes.',
    quote: '"I\'ll organise it all — you\'ll barely notice me working."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720931/ai_image_4_rndfth.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710663/Lola_gl5qxr.mp3',
    buttonText: 'Meet the Quiet Genius',
    gradient: 'from-gray-600 to-gray-700'
  },
  {
    id: 'luke',
    name: 'Luke — The Efficient Expert',
    title: 'Sharp, no-nonsense, and incredibly efficient — Your schedule, your business, perfectly organized.',
    quote: '"Fast, clean, efficient — your schedule is safe with me."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758721024/ai_image_6_kcpznd.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710832/Luke_dneuli.mp3',
    buttonText: 'Meet the Efficient Expert',
    gradient: 'from-gold-500 to-gold-600'
  }
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const playAudio = () => {
    const audio = new Audio(member.audioUrl);
    audio.play().catch(console.error);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-fuchsia-200">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-['Playfair_Display'] text-xl font-bold mb-3 text-black">
          {member.name}
        </h3>
        <p className="text-gray-600 mb-4 font-medium text-sm leading-relaxed">
          {member.title}
        </p>
        <blockquote className="text-gray-700 italic mb-4 text-sm leading-relaxed border-l-4 border-fuchsia-500 pl-4">
          {member.quote}
        </blockquote>
        <button 
          onClick={playAudio}
          className="w-full bg-fuchsia-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-fuchsia-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
        >
          <Play size={16} className="text-white" />
          {member.buttonText}
        </button>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-br from-white via-gold-50/20 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-100 to-fuchsia-100 rounded-full mb-8 border border-gold-200">
            <span className="text-black font-semibold">Luxury AI Personalities</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-black mb-6">
            Meet Your AI Receptionists & Sales Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Six distinct personalities. Each one charming, professional, and trained to match your brand's sophisticated style.
          </p>
        </div>

        {/* Receptionist Boutique */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gold-50 to-fuchsia-50 rounded-3xl p-12 mb-16 max-w-6xl mx-auto border border-gold-200 shadow-xl">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-black mb-6">
              Receptionist <span className="font-script text-fuchsia-500">Boutique™</span>
            </h3>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Discover the future of customer service with AI receptionists designed to reflect the grandeur of your brand. 
              Our character-driven agents are always polite, always polished, and always available to deliver exceptional 
              service that leaves a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {receptionists.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Sales Boutique */}
        <div>
          <div className="bg-gradient-to-r from-fuchsia-50 to-gold-50 rounded-3xl p-12 mb-16 max-w-6xl mx-auto border border-fuchsia-200 shadow-xl">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-black mb-6">
              Sales <span className="font-script text-fuchsia-500">Boutique™</span>
            </h3>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              From appointments to follow-ups, our AI sales agents are your ultimate assistants, working tirelessly 
              to ensure every lead is nurtured and every sale is closed. No more missed opportunities, only smooth, 
              professional client interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {salesAgents.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;