import React from 'react';
import { Play, Check, Eye, Lock } from 'lucide-react';
import { TabType } from '../App';

interface ScriptPreviewProps {
  onDownload: () => void;
  activeTab: TabType;
}

export const ScriptPreview: React.FC<ScriptPreviewProps> = ({ onDownload, activeTab }) => {
  
  const codes = [
    { 
      title: "1,000 DIAMONDS",
      desc: "Instant currency pack.",
      realSuffix: "1K",
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-950/10"
    },
    { 
      title: "ASSASSIN UNLOCK",
      desc: "Unlock Assassin Class.",
      realSuffix: "SIN",
      color: "text-purple-400",
      border: "border-purple-500/20",
      bg: "bg-purple-950/10"
    },
    { 
      title: "DEV ADMIN MENU", 
      desc: "Private Server Admin.",
      realSuffix: "ADM",
      color: "text-red-400",
      border: "border-red-500/20",
      bg: "bg-red-950/10"
    }
  ];

  return (
    <section className="relative max-w-5xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight">
          {activeTab === 'script' ? 'SOURCE CODE' : 'VAULT DATABASE'}
        </h2>
        <p className="text-gray-400 text-sm">
          {activeTab === 'script' ? 'Secure Loader V5.0.2 - Updated 2026' : 'Select a code to verify and reveal.'}
        </p>
      </div>

      {activeTab === 'script' ? (
        // SCRIPT PREVIEW (Keep original script look for the Script Tab)
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto group">
          <div className="bg-[#111] px-4 py-3 border-b border-gray-800 flex items-center gap-3">
             <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
             </div>
             <div className="h-4 w-[1px] bg-gray-700 mx-1"></div>
             <span className="text-[10px] font-mono text-gray-500">loader.lua</span>
          </div>
          <div className="p-8 font-mono text-sm text-gray-300 relative bg-black/40 h-64 flex flex-col justify-center">
            <div className="opacity-40 blur-[3px] select-none space-y-4">
              <p>-- 99 NIGHTS LOADER V5</p>
              <p><span className="text-purple-400">local</span> Key = <span className="text-yellow-300">_G.Key</span></p>
              <p><span className="text-purple-400">if</span> Key == <span className="text-green-400">"VERIFIED"</span> <span className="text-purple-400">then</span></p>
              <p className="pl-4">LoadScript(<span className="text-blue-300">"https://api.99nights.gg/v5"</span>)</p>
              <p><span className="text-purple-400">end</span></p>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
              <button onClick={onDownload} className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:scale-105 transition-all border border-green-400/20">
                <Play className="w-6 h-6 fill-current" />
                <span>INJECT SCRIPT</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        // CODES GRID - New Design Matching Screenshot
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codes.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-[#080808] border ${item.border} rounded-2xl p-6 relative group overflow-hidden transition-all hover:bg-white/5 hover:-translate-y-1`}
              onClick={onDownload}
            >
               {/* Background Glow */}
               <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} blur-3xl rounded-full -translate-y-1/2 translate-x-1/2`}></div>

               <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div>
                    <h3 className={`text-xl font-black italic uppercase tracking-wider mb-2 text-white`}>
                        {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed">
                        {item.desc}
                    </p>
                  </div>

                  {/* THE NEW CODE BAR DESIGN */}
                  <div className="w-full flex h-12 rounded-lg overflow-hidden cursor-pointer shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                      {/* Left Side: Solid Cyan/Blue */}
                      <div className="bg-[#00b4d8] hover:bg-[#00a0c0] w-[55%] flex items-center justify-center text-white font-bold text-sm tracking-tight transition-colors">
                          Show Full Code
                      </div>
                      
                      {/* Right Side: Dark with Dashed Border */}
                      <div className="flex-1 bg-[#020617] flex items-center justify-center relative">
                          {/* Dashed Border Overlay to match style */}
                          <div className="absolute inset-0 border-y-2 border-r-2 border-dashed border-slate-700/50 rounded-r-lg pointer-events-none"></div>
                          
                          {/* Hidden Text */}
                          <span className="font-mono text-slate-400 font-bold tracking-widest text-sm relative z-10">
                              ••-{item.realSuffix}
                          </span>
                      </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};