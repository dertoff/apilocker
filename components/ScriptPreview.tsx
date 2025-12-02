import React from 'react';
import { Lock, Terminal, ShieldCheck, Play } from 'lucide-react';

interface ScriptPreviewProps {
  onDownload: () => void;
}

export const ScriptPreview: React.FC<ScriptPreviewProps> = ({ onDownload }) => {
  return (
    <section className="relative max-w-5xl mx-auto px-4">
      {/* Header Info */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          POWERFUL <span className="text-green-500">LUA ENGINE</span>
        </h2>
        <p className="text-gray-400">Compatible with Solara, Wave, Hydrogen, Delta & Arceus X</p>
      </div>

      {/* Main Terminal Window */}
      <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700 bg-[#0c0c0c] relative group">
        
        {/* Top Bar */}
        <div className="bg-[#1a1a1a] p-3 flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs font-mono text-gray-400 bg-black/50 px-3 py-1 rounded-md border border-white/5">
              <Terminal className="w-3 h-3" />
              <span>root@99nights:~/scripts/v4.2</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1.5 text-[10px] font-bold bg-green-900/30 text-green-400 px-2 py-0.5 rounded border border-green-500/20">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               STATUS: UNDETECTED
             </div>
          </div>
        </div>
        
        {/* Code Content */}
        <div className="relative p-6 md:p-10 font-mono text-sm md:text-base leading-relaxed h-[400px] overflow-hidden bg-black/50">
          {/* Blurred Code */}
          <div className="text-green-500/50 blur-[3px] select-none opacity-60 transform scale-100 transition-transform duration-700 group-hover:scale-105">
            <p><span className="text-purple-400">local</span> <span className="text-blue-400">Library</span> = <span className="text-yellow-400">loadstring</span>(game:<span className="text-yellow-400">HttpGet</span>(<span className="text-orange-300">"https://raw.githubusercontent.com/99Nights/Hub/main/source.lua"</span>))()</p>
            <p><span className="text-purple-400">local</span> <span className="text-blue-400">Window</span> = Library.<span className="text-yellow-400">CreateLib</span>(<span className="text-orange-300">"99 Nights God Mode"</span>, <span className="text-orange-300">"DarkTheme"</span>)</p>
            <br />
            <p className="text-gray-500">-- BYPASS MODULE V4 LOADED --</p>
            <p><span className="text-purple-400">local</span> <span className="text-blue-400">Bypass</span> = <span className="text-yellow-400">require</span>(game.ReplicatedStorage.Security)</p>
            <p>Bypass.<span className="text-yellow-400">DisableAntiCheat</span>()</p>
            <br />
            <p><span className="text-purple-400">local</span> <span className="text-blue-400">Main</span> = Window:<span className="text-yellow-400">NewTab</span>(<span className="text-orange-300">"Auto Farm"</span>)</p>
            <p><span className="text-purple-400">local</span> <span className="text-blue-400">Section</span> = Main:<span className="text-yellow-400">NewSection</span>(<span className="text-orange-300">"Main Features"</span>)</p>
            <p>Section:<span className="text-yellow-400">NewToggle</span>(<span className="text-orange-300">"God Mode"</span>, <span className="text-orange-300">"Invincibility"</span>, <span className="text-purple-400">function</span>(state)</p>
            <p>&nbsp;&nbsp;<span className="text-purple-400">if</span> state <span className="text-purple-400">then</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;game.Players.LocalPlayer.Character.Humanoid.Health = math.huge</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">print</span>(<span className="text-orange-300">"God Mode Enabled"</span>)</p>
            <p>&nbsp;&nbsp;<span className="text-purple-400">end</span></p>
            <p><span className="text-purple-400">end</span>)</p>
            <p className="mt-8 text-white font-bold animate-pulse">-- CLICK BUTTON TO DECRYPT SOURCE --</p>
          </div>

          {/* Locked Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <div className="bg-gray-900/90 border border-gray-700 p-8 rounded-2xl text-center max-w-md shadow-2xl transform transition-transform hover:scale-105 duration-300">
               <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                 <Lock className="w-8 h-8 text-green-500" />
               </div>
               <h3 className="text-2xl font-black text-white mb-2 uppercase">Source Code Encrypted</h3>
               <p className="text-gray-400 text-sm mb-6">
                 To prevent patching, the source code is hidden. Complete verification to get the raw script key.
               </p>
               <button 
                 onClick={onDownload}
                 className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 group/btn"
               >
                 <Play className="w-4 h-4 fill-current group-hover/btn:translate-x-1 transition-transform" />
                 REVEAL SCRIPT
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};