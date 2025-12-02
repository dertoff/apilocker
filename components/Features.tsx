import React from 'react';
import { Crosshair, Eye, Zap, Lock, Ghost, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Ghost className="w-10 h-10 text-purple-400" />,
    title: "INVINCIBILITY",
    desc: "Become invincible. Walk through enemies and take zero damage while you farm.",
    badge: "OP"
  },
  {
    icon: <Eye className="w-10 h-10 text-blue-400" />,
    title: "ESP / WALLHACK",
    desc: "See every player, item, and danger through walls. Never get ambushed again.",
    badge: "ESSENTIAL"
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-400" />,
    title: "AUTO-FARM",
    desc: "The script plays for you. Collect max resources and XP while you're AFK.",
    badge: "FASTEST"
  },
  {
    icon: <Crosshair className="w-10 h-10 text-red-400" />,
    title: "SILENT AIM",
    desc: "Bullets hit automatically without snapping. Looks 100% legit to spectators.",
    badge: "SAFE"
  },
  {
    icon: <Lock className="w-10 h-10 text-green-400" />,
    title: "ANTI-BAN V4",
    desc: "Enterprise-grade HWID spoofer prevents detection. Your account is safe.",
    badge: "SECURE"
  },
  {
    icon: <Cpu className="w-10 h-10 text-orange-400" />,
    title: "LAG REMOVER",
    desc: "Boosts FPS by removing useless textures. Play smoothly on any device.",
    badge: "OPTIMIZED"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Unfair <span className="text-green-500 underline decoration-4 underline-offset-8">Advantage</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Stop grinding for hours. Get everything you want instantly with these premium features included in the free version.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl hover:border-green-500/50 transition-all duration-300 group overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-800/50 p-4 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <span className="bg-gray-800 text-gray-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-gray-700 group-hover:border-green-500/50 group-hover:text-green-400 transition-colors">
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