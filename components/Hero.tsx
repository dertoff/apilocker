import React, { useState } from 'react';
import { Download, ShieldCheck, Star, Zap, FileKey, Code2, Lock, Users, Crown, User, ArrowRight } from 'lucide-react';
import { TabType } from '../App';

interface HeroProps {
  onDownload: () => void;
  downloadCount: number;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownload, downloadCount, activeTab, setActiveTab }) => {
  const [username, setUsername] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  // Helper to determine active color
  const activeColor = activeTab === 'script' ? 'green' : activeTab === 'codes' ? 'indigo' : 'amber';
  const activeColorClasses = activeTab === 'script' ? 'text-green-500' : activeTab === 'codes' ? 'text-indigo-500' : 'text-amber-500';
  const activeBgClasses = activeTab === 'script' ? 'bg-green-600' : activeTab === 'codes' ? 'bg-indigo-600' : 'bg-amber-600';

  const handleClassUnlock = () => {
    if (!username) return;
    setIsConnecting(true);
    // Simulate connection
    setTimeout(() => {
        setIsConnecting(false);
        onDownload();
    }, 1500);
  };
  
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-700">
         <div className="absolute inset-0 bg-[#050505]"></div>
         <div className={`absolute inset-0 bg-gradient-to-b opacity-50 transition-colors duration-700 ${
           activeTab === 'script' ? 'from-green-500/5' : activeTab === 'codes' ? 'from-indigo-500/5' : 'from-amber-500/5'
         }`}></div>
         
         {/* Subtle Glows */}
         <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] blur-[100px] rounded-full transition-colors duration-700 ${
           activeTab === 'script' ? 'bg-green-500/10' : activeTab === 'codes' ? 'bg-indigo-500/10' : 'bg-amber-500/10'
         }`}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        {/* THE TOGGLE SWITCHER - NOW WITH 3 ITEMS */}
        <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-900/80 p-1.5 rounded-[2rem] border border-gray-800 mb-10 shadow-2xl relative z-20 backdrop-blur-sm">
           <button 
             onClick={() => setActiveTab('script')}
             className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
               activeTab === 'script' 
               ? 'bg-green-600 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)]' 
               : 'text-gray-400 hover:text-white hover:bg-white/5'
             }`}
           >
             <Code2 className="w-4 h-4" />
             SCRIPT V5
           </button>
           <button 
             onClick={() => setActiveTab('codes')}
             className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
               activeTab === 'codes' 
               ? 'bg-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]' 
               : 'text-gray-400 hover:text-white hover:bg-white/5'
             }`}
           >
             <FileKey className="w-4 h-4" />
             SECRET CODES
           </button>
           <button 
             onClick={() => setActiveTab('classes')}
             className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
               activeTab === 'classes' 
               ? 'bg-amber-600 text-white shadow-[0_0_20px_rgba(217,119,6,0.4)]' 
               : 'text-gray-400 hover:text-white hover:bg-white/5'
             }`}
           >
             <Users className="w-4 h-4" />
             UNLOCK CLASSES
           </button>
        </div>

        {/* Content Container with animation */}
        <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex flex-col items-center">
          
          {/* LOGO AREA */}
          <div className="mb-8 relative inline-block group" onClick={onDownload}>
            <div className={`w-32 h-32 md:w-40 md:h-40 bg-gray-900/50 rounded-3xl p-6 shadow-2xl border transform transition-transform group-hover:scale-105 cursor-pointer relative overflow-hidden backdrop-blur-sm ${
              activeTab === 'script' ? 'shadow-green-500/20 border-green-500/30' : 
              activeTab === 'codes' ? 'shadow-indigo-500/20 border-indigo-500/30' :
              'shadow-amber-500/20 border-amber-500/30'
            }`}>
               <img 
                 src="https://tr.rbxcdn.com/180DAY-01c83a40091a0d1f1753ad6cca099d31/150/150/Image/Webp/noFilter" 
                 alt="99 Nights Icon" 
                 className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
            {/* Status Badge */}
            <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-black flex items-center gap-1 whitespace-nowrap z-20 ${activeBgClasses}`}>
              <ShieldCheck className="w-3 h-3" />
              {activeTab === 'script' ? 'V5 UPDATED' : activeTab === 'codes' ? '3 NEW CODES' : 'ALL UNLOCKED'}
            </div>
          </div>

          {/* HEADLINES */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            {activeTab === 'script' && (
              <>
                99 NIGHTS <br className="md:hidden" />
                <span className="text-green-500">SCRIPT V5</span>
              </>
            )}
            {activeTab === 'codes' && (
              <>
                ALL ACTIVE <br className="md:hidden" />
                <span className="text-indigo-500">2026 CODES</span>
              </>
            )}
            {activeTab === 'classes' && (
              <>
                UNLOCK ALL <br className="md:hidden" />
                <span className="text-amber-500">CLASSES</span>
              </>
            )}
          </h1>
          
          {/* Dynamic Description */}
          <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {activeTab === 'script' && (
              <>
                The first undetected script for the 2026 Engine Update.
                <span className="hidden md:inline"> Auto-Farm, God Mode, and ESP included. No key system.</span>
              </>
            )}
            {activeTab === 'codes' && (
              <>
                Don't watch 10 minute videos. 
                <span className="hidden md:inline"> We have the complete list of hidden Dev Codes for Diamonds, Candy, and Classes.</span>
              </>
            )}
            {activeTab === 'classes' && (
              <>
                Instantly inject any class into your account.
                <span className="hidden md:inline"> No level requirements. No grinding. Just select your class and unlock it forever.</span>
              </>
            )}
          </p>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-4 w-full">
            
            {activeTab === 'classes' ? (
                /* CUSTOM INPUT FOR CLASSES TAB */
                <div className="w-full max-w-md space-y-4 animate-in fade-in slide-in-from-bottom-4 mt-2">
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-amber-500 transition-colors w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Enter Roblox Username..." 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-black/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono placeholder:text-gray-500 backdrop-blur-sm"
                        />
                    </div>
                    <button 
                        onClick={handleClassUnlock}
                        disabled={!username || isConnecting}
                        className={`w-full font-black text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform ${
                            username 
                            ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_30px_rgba(217,119,6,0.6)] hover:scale-[1.02]' 
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        {isConnecting ? (
                            <>
                                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white/50"></span>
                                <span>CONNECTING...</span>
                            </>
                        ) : (
                            <>
                                <span>UNLOCK NOW</span>
                                <ArrowRight className="w-6 h-6" />
                            </>
                        )}
                    </button>
                    <p className="text-xs text-gray-500 font-mono">Safe Injection • No Password Required</p>
                </div>
            ) : (
                /* STANDARD BUTTON FOR SCRIPT/CODES */
                <button 
                onClick={onDownload}
                className={`w-full max-w-xs md:max-w-sm text-white text-xl font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 ${
                    activeTab === 'script' 
                    ? 'bg-green-600 hover:bg-green-500 shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)]' 
                    : 'bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]'
                }`}
                >
                {activeTab === 'script' && <Download className="w-6 h-6" />}
                {activeTab === 'codes' && <Lock className="w-6 h-6" />}
                
                {activeTab === 'script' ? 'DOWNLOAD SCRIPT' : 'REVEAL CODES'}
                </button>
            )}
            
            {/* Trust Signals (Hidden for Classes to reduce clutter) */}
            {activeTab !== 'classes' && (
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-gray-300">4.9/5 Rating</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                    <div className="flex items-center gap-1">
                        <Zap className={`w-3 h-3 ${activeColorClasses}`} />
                        <span className="text-gray-300">
                        {activeTab === 'script' ? `${downloadCount.toLocaleString()} Installs` : '12,504 Users Viewing'}
                        </span>
                    </div>
                </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};