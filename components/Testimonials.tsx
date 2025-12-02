import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
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

export const Testimonials: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">
          Verified <span className="text-green-500">Reviews</span>
        </h2>
        <p className="text-gray-400">Join the community of winners.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#0f1510] p-6 rounded-xl border border-forest-800 shadow-xl relative group hover:border-green-500/30 transition-colors">
            {/* Quote Icon */}
            <div className="absolute top-4 right-6 text-6xl text-green-500/10 font-serif leading-none select-none">"</div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <img src={t.avatar} alt={t.user} className="w-12 h-12 rounded-full border-2 border-gray-700" />
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-black">
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
               <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-green-500 font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" /> Verified Download
               </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};