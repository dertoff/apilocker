import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TabType } from '../App';

interface TestimonialsProps {
    activeTab: TabType;
}

const scriptReviews = [
  {
    user: "ShadowHunter99",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Literally the only working script for this game right now. The auto-farm got me to max level in 2 hours. Insane.",
    time: "2 mins ago",
    verified: true
  },
  {
    user: "Sarah_P",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Was skeptical at first because of the verification, but it took like 30 seconds and the key worked instantly. Vouch!",
    time: "15 mins ago",
    verified: true
  },
  {
    user: "K1ller_Bee",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "My account is safe after 3 months of using this. The ESP is super clean and doesn't lag my game.",
    time: "1 hour ago",
    verified: true
  }
];

const codeReviews = [
  {
    user: "DiamondHands",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "The 1,000 diamond code actually worked! I thought it was fake but I just bought the Battle Pass with it.",
    time: "5 mins ago",
    verified: true
  },
  {
    user: "GamerGirl_X",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Thanks for the list. I found 3 hidden codes I didn't know about. Got so much free candy.",
    time: "42 mins ago",
    verified: true
  },
  {
    user: "NoobMaster69",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "Best site for codes. Updated faster than the wiki.",
    time: "2 hours ago",
    verified: true
  }
];

const classReviews = [
  {
    user: "VampireLord",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "Just unlocked the Vampire class without paying 500 Robux. This tool is a lifesaver!",
    time: "1 min ago",
    verified: true
  },
  {
    user: "MechWarrior",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    text: "It actually worked. I put in my username, did the offer, and logged in to find the Cyborg class unlocked.",
    time: "10 mins ago",
    verified: true
  },
  {
    user: "Pro_Sniper",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Unlocked Assassin in seconds. The verification was annoying but worth it for a $10 class.",
    time: "3 hours ago",
    verified: true
  }
];

export const Testimonials: React.FC<TestimonialsProps> = ({ activeTab }) => {
  let reviews = scriptReviews;
  let highlightColor = "text-green-500";
  let borderColor = "hover:border-green-500/30";
  let quoteColor = "text-green-500/10";
  let checkColor = "text-green-500";
  let bgCheck = "bg-green-500";

  if (activeTab === 'codes') {
      reviews = codeReviews;
      highlightColor = "text-indigo-500";
      borderColor = "hover:border-indigo-500/30";
      quoteColor = "text-indigo-500/10";
      checkColor = "text-indigo-500";
      bgCheck = "bg-indigo-500";
  } else if (activeTab === 'classes') {
      reviews = classReviews;
      highlightColor = "text-amber-500";
      borderColor = "hover:border-amber-500/30";
      quoteColor = "text-amber-500/10";
      checkColor = "text-amber-500";
      bgCheck = "bg-amber-500";
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
          Verified <span className={highlightColor}>Reviews</span>
        </h2>
        <p className="text-gray-400">Join the community of winners.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((t, i) => (
          <div key={`${activeTab}-${i}`} className={`bg-[#0f1510]/50 p-6 rounded-xl border border-gray-800 shadow-xl relative group ${borderColor} transition-colors animate-in fade-in duration-700`}>
            {/* Quote Icon */}
            <div className={`absolute top-4 right-6 text-6xl ${quoteColor} font-serif leading-none select-none`}>"</div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <img src={t.avatar} alt={t.user} className="w-12 h-12 rounded-full border-2 border-gray-700" />
                <div className={`absolute -bottom-1 -right-1 ${bgCheck} rounded-full p-0.5 border-2 border-black`}>
                  <CheckCircle2 className="w-3 h-3 text-black" />
                </div>
              </div>
              <div>
                <div className="font-bold text-white text-sm">{t.user}</div>
                <div className="flex text-yellow-400 w-3 h-3 gap-0.5 mt-1">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-600 font-mono">{t.time}</div>
            </div>
            
            <p className="text-gray-300 text-sm italic leading-relaxed relative z-10">"{t.text}"</p>
            
            {t.verified && (
               <div className={`mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs ${checkColor} font-bold uppercase tracking-wider`}>
                  <CheckCircle2 className="w-3 h-3" /> Verified {activeTab === 'classes' ? 'Unlock' : activeTab === 'codes' ? 'Code' : 'Download'}
               </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};