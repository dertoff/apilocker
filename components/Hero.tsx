import React from 'react';
import { Download, ShieldCheck, Star, Zap } from 'lucide-react';

interface HeroProps {
  onDownload: () => void;
  downloadCount: number;
}

export const Hero: React.FC<HeroProps> = ({ onDownload, downloadCount }) => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Clean Dark Gradient */}
         <div className="absolute inset-0 bg-[#050505]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-50"></div>
         
         {/* Subtle Glows */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-green-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        
        {/* SIMPLE LOGO - Clean & Professional */}
        <div className="mb-8 relative inline-block group" onClick={onDownload}>
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-3xl p-1 shadow-2xl shadow-green-500/20 border border-green-500/30 transform transition-transform group-hover:scale-105 cursor-pointer relative overflow-hidden">
             <img 
               src="https://tr.rbxcdn.com/180DAY-f4a8fba434c98c49eb60bba7ff7fe636/150/150/Image/Webp/noFilter" 
               alt="99 Nights Icon" 
               className="w-full h-full object-cover rounded-2xl"
             />
             {/* Gloss Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl"></div>
          </div>
          {/* Status Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-black flex items-center gap-1 whitespace-nowrap z-20">
            <ShieldCheck className="w-3 h-3" />
            V4.2 UPDATED
          </div>
        </div>

        {/* HEADLINE - Compact & Punchy */}
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
          99 NIGHTS <br className="md:hidden" />
          <span className="text-green-500">MOD MENU</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          The only undetected script with Auto-Farm, ESP, and Infinite Ammo. 
          <span className="hidden md:inline"> No ban risk. Works on all executors.</span>
        </p>

        {/* CTA - High Visibility Above Fold */}
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={onDownload}
            className="w-full max-w-xs md:max-w-sm bg-green-600 hover:bg-green-500 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
          >
            <Download className="w-6 h-6" />
            DOWNLOAD SCRIPT
          </button>
          
          {/* Trust Signals */}
          <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
             <div className="flex items-center gap-1">
               <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
               <span className="text-gray-300">4.9/5 Rating</span>
             </div>
             <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
             <div className="flex items-center gap-1">
               <Zap className="w-3 h-3 text-green-500" />
               <span className="text-gray-300">{downloadCount.toLocaleString()} Installs</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};