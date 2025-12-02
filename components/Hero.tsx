import React from 'react';
import { Download, Shield, Star, Users, AlertTriangle, CheckCircle2, Monitor, Smartphone, Globe } from 'lucide-react';

interface HeroProps {
  onDownload: () => void;
  downloadCount: number;
}

export const Hero: React.FC<HeroProps> = ({ onDownload, downloadCount }) => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Dark Forest Background" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/95 to-forest-950"></div>
        {/* Spotlights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* ENHANCED LOGO CARD - SQUARE APP ICON STYLE */}
        <div className="relative mb-14 group cursor-pointer inline-block transform hover:scale-105 transition-transform duration-500" onClick={onDownload}>
          {/* Energy Rings */}
          <div className="absolute inset-0 m-auto w-64 h-64 md:w-72 md:h-72 rounded-full border border-green-500/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-0 m-auto w-56 h-56 md:w-64 md:h-64 rounded-full border border-green-500/10 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
          
          {/* Main Logo Container - SQUARE */}
          <div className="relative z-10 w-44 h-44 md:w-52 md:h-52 mx-auto">
            {/* Gradient Border Ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-500 to-forest-900 rounded-[40px] p-[3px] shadow-[0_0_60px_rgba(34,197,94,0.5)]">
              {/* Inner Black Background */}
              <div className="h-full w-full bg-forest-950 rounded-[37px] overflow-hidden relative border border-white/10">
                {/* Actual Logo Image */}
                <img 
                  src="https://tr.rbxcdn.com/180DAY-f4a8fba434c98c49eb60bba7ff7fe636/150/150/Image/Webp/noFilter" 
                  alt="99 Nights" 
                  className="w-full h-full object-cover"
                />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50 rounded-[37px] pointer-events-none"></div>
              </div>
            </div>
            
            {/* Trust Badge */}
            <div className="absolute -bottom-5 -right-5 bg-black border border-green-500 text-green-400 text-xs md:text-sm font-black px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 z-30">
              <Shield className="w-4 h-4 fill-green-500 text-green-500" />
              OFFICIAL V4.2
            </div>
          </div>
        </div>

        {/* Value Stack Pill */}
        <div className="flex justify-center mb-8">
           <div className="inline-flex items-center bg-gray-900/80 border border-gray-700 rounded-full px-1 py-1 pr-6 backdrop-blur-md shadow-lg">
              <div className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mr-3 animate-pulse">
                 UNLOCKED
              </div>
              <div className="flex items-center gap-4 text-xs md:text-sm font-mono text-gray-300">
                 <span className="line-through decoration-red-500 opacity-60">Price: $91</span>
                 <span className="text-white font-bold flex items-center gap-1">
                   Today: <span className="text-green-400 text-lg">FREE</span>
                 </span>
              </div>
           </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.95] drop-shadow-2xl">
          DOMINATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-700 filter drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            THE FOREST
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          Unlock the <span className="text-white underline decoration-green-500 underline-offset-4 decoration-2">only undetected script</span> with Auto-Farm, God Mode, and Infinite Ammo. 
        </p>

        {/* Platform Icons */}
        <div className="flex justify-center gap-6 mb-12 opacity-70">
           <div className="flex flex-col items-center gap-1 text-gray-400">
             <Monitor className="w-5 h-5" /> <span className="text-[10px] uppercase font-bold">PC</span>
           </div>
           <div className="flex flex-col items-center gap-1 text-green-400">
             <Smartphone className="w-5 h-5" /> <span className="text-[10px] uppercase font-bold">Mobile</span>
           </div>
           <div className="flex flex-col items-center gap-1 text-gray-400">
             <Globe className="w-5 h-5" /> <span className="text-[10px] uppercase font-bold">Web</span>
           </div>
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center gap-8">
          <button 
            onClick={onDownload}
            className="group relative w-full md:w-auto bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-xl md:text-2xl font-bold py-5 px-12 rounded-xl shadow-[0_10px_30px_-10px_rgba(34,197,94,0.6)] hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.8)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 border-t border-white/20"
          >
            <span className="relative flex items-center justify-center gap-3 uppercase tracking-wide">
              <Download className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:-translate-y-1" />
              Download Script
            </span>
            {/* Clean Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-green-700 text-[10px] font-black px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
              INSTANT ACCESS
            </div>
          </button>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white font-bold">{downloadCount.toLocaleString()}</span> Downloads
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
              <div className="flex text-yellow-400">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
              <span className="text-white">4.9/5.0</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
              <CheckCircle2 className="w-3 h-3 text-blue-400" />
              <span className="text-gray-200">VAC Safe</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};