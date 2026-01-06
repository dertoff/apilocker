import React from 'react';
import { Crosshair, Eye, Zap, Lock, Ghost, Cpu, Gem, Skull, Fish, Gift } from 'lucide-react';
import { TabType } from '../App';

interface FeaturesProps {
  activeTab: TabType;
}

const scriptFeatures = [
  {
    icon: <Ghost className="w-10 h-10 text-purple-400" />,
    title: "GOD MODE",
    desc: "Become invincible. Walk through enemies and take zero damage while you farm.",
    badge: "OP"
  },
  {
    icon: <Eye className="w-10 h-10 text-blue-400" />,
    title: "ESP / WALLHACK",
    desc: "See every player, item, and hidden kid through walls. Never get ambushed.",
    badge: "ESSENTIAL"
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "AUTO-FARM",
    desc: "The script plays for you. Collect max wood and scrap while you're AFK.",
    badge: "FASTEST"
  },
  {
    icon: <Crosshair className="w-10 h-10 text-red-400" />,
    title: "SILENT AIM",
    desc: "Bullets hit automatically without snapping. Looks 100% legit.",
    badge: "SAFE"
  },
  {
    icon: <Lock className="w-10 h-10 text-green-400" />,
    title: "ANTI-BAN V5",
    desc: "Enterprise-grade HWID spoofer prevents detection. 2026 Updated.",
    badge: "SECURE"
  },
  {
    icon: <Cpu className="w-10 h-10 text-orange-400" />,
    title: "FPS BOOST",
    desc: "Removes fog and useless particles. Play smoothly on any device.",
    badge: "OPTIMIZED"
  }
];

const codeFeatures = [
  {
    icon: <Gem className="w-10 h-10 text-blue-400" />,
    title: "CODE: AFTERPARTY",
    desc: "Redeems for 15 Diamonds instantly. Use this to buy class upgrades.",
    badge: "ACTIVE"
  },
  {
    icon: <Gift className="w-10 h-10 text-orange-400" />,
    title: "CODE: HALLOWEEN",
    desc: "Unlocks 10 Candy event currency (even after the event has ended).",
    badge: "LIMITED"
  },
  {
    icon: <Fish className="w-10 h-10 text-cyan-400" />,
    title: "CODE: YAY FISHING",
    desc: "Secret code that only works while fishing. Grants 2 Diamonds + Rare Fish.",
    badge: "SECRET"
  },
  {
    icon: <Skull className="w-10 h-10 text-red-400" />,
    title: "DEV UNLOCK",
    desc: "Admin command that unlocks the Assassin Class without paying diamonds.",
    badge: "GLITCH"
  },
  {
    icon: <Lock className="w-10 h-10 text-purple-400" />,
    title: "ADMIN BADGE",
    desc: "Gives you the verified 'Developer' tag in chat and leaderboard.",
    badge: "COSMETIC"
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "MAX LEVEL FIRE",
    desc: "Code that instantly sets your campfire to Level 4 (Max).",
    badge: "USEFUL"
  }
];

export const Features: React.FC<FeaturesProps> = ({ activeTab }) => {
  const features = activeTab === 'script' ? scriptFeatures : codeFeatures;
  const highlightColor = activeTab === 'script' ? 'text-green-500' : 'text-indigo-500';
  const glowColor = activeTab === 'script' ? 'group-hover:border-green-500/50' : 'group-hover:border-indigo-500/50';

  return (
    <section className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Unfair <span className={`${highlightColor} underline decoration-4 underline-offset-8`}>Advantage</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          {activeTab === 'script' 
            ? "Stop grinding for hours. Get everything you want instantly with these premium script features."
            : "Codes are the only legit way to get Diamonds fast. We have the ones the devs tried to hide."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className={`relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl ${glowColor} transition-all duration-300 group overflow-hidden`}
          >
            {/* Hover Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${activeTab === 'script' ? 'bg-green-500/5' : 'bg-indigo-500/5'}`}></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <span className={`bg-gray-800 text-gray-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-gray-700 transition-colors ${activeTab === 'script' ? 'group-hover:border-green-500/50 group-hover:text-green-400' : 'group-hover:border-indigo-500/50 group-hover:text-indigo-400'}`}>
                  {feature.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};