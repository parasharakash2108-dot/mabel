import { Play } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
  audioUrl: string;
  buttonText: string;
}

const receptionists: TeamMember[] = [
  {
    id: 'jessica',
    name: 'Jessica — The Luxe Concierge',
    title: 'Elegant, polished, perfect for high-end brands.',
    quote: '"Hello lovely, I\'ll treat every client like a VIP."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720760/ai_image_1_za8cf5.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710442/Jessica_a0uxgs.mp3',
    buttonText: 'Meet Elegant'
  },
  {
    id: 'maya',
    name: 'Maya — The Glow Getter',
    title: 'Bold, glamorous, keeps beauty clients coming back.',
    quote: '"Hey babe, ready to rebook your glow-up?"',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720813/ai_image_2_lxyhqg.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710539/Maya_apdykk.mp3',
    buttonText: 'Meet Glam'
  },
  {
    id: 'nia',
    name: 'Nia — The Wellness Oracle',
    title: 'Calm, intuitive, creates trust and reassurance.',
    quote: '"Take a deep breath — I\'ll keep your calendar balanced."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720870/ai_image_3_bt3xlj.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710600/Nia_wrf0jn.mp3',
    buttonText: 'Meet Calm'
  }
];

const salesAgents: TeamMember[] = [
  {
    id: 'leo',
    name: 'Leo — The Quiet Genius',
    title: 'Smart, thoughtful, quietly keeps things running.',
    quote: '"I\'ll organise it all — you\'ll barely notice me working."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720931/ai_image_4_rndfth.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710663/Lola_gl5qxr.mp3',
    buttonText: 'Meet Genius'
  },
  {
    id: 'jay',
    name: 'Jay — The Charming Closer',
    title: 'Confident, persuasive, perfect for sales calls.',
    quote: '"Let me handle the tough calls — I\'ll win them over for you."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758720988/ai_image_5_oub6jc.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710774/Jay_wvhhnc.mp3',
    buttonText: 'Meet Charming'
  },
  {
    id: 'luke',
    name: 'Luke — The Efficient Expert',
    title: 'Sharp, direct, keeps calendars full without fuss.',
    quote: '"Fast, clean, efficient — your schedule is safe with me."',
    image: 'https://res.cloudinary.com/dliallqso/image/upload/v1758721024/ai_image_6_kcpznd.png',
    audioUrl: 'https://res.cloudinary.com/dliallqso/video/upload/v1758710832/Luke_dneuli.mp3',
    buttonText: 'Meet Sharp'
  }
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const playAudio = () => {
    const audio = new Audio(member.audioUrl);
    audio.play().catch(console.error);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-[#FF2D96]">
      <div className="relative h-48 overflow-hidden bg-gray-50">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      
      <div className="p-5">
        <h3 className="font-['Montserrat'] text-base font-bold mb-2 text-black leading-tight">
          {member.name}
        </h3>
        <p className="text-gray-700 mb-3 font-medium text-sm leading-relaxed">
          {member.title}
        </p>
        <blockquote className="text-gray-600 italic mb-4 text-sm leading-relaxed border-l-3 border-[#FF2D96] pl-3">
          {member.quote}
        </blockquote>
        <button 
          onClick={playAudio}
          className="w-full bg-[#FF2D96] text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#e0267d] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm text-sm"
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
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Receptionist Boutique */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-black mb-6">
              Receptionist <span className="font-script text-[#FF2D96]">Boutique™</span>
            </h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
              Your boutique AI receptionists with personality — they answer every call, rebook no-shows, and keep diaries full without payroll headaches. Always warm, always polished, never boring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {receptionists.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Sales Boutique */}
        <div>
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-black mb-6">
              Sales <span className="font-script text-[#FF2D96]">Boutique™</span>
            </h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto">
              Your boutique AI sales team works around the clock to follow up, qualify, and set appointments. Smooth talkers without the overhead, they keep pipelines moving and calendars booked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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