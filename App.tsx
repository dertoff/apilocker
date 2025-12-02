import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ShieldCheck, 
  Zap, 
  Clock,
  X
} from 'lucide-react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ScriptPreview } from './components/ScriptPreview';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { LockerModal } from './components/LockerModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isLockerOpen, setIsLockerOpen] = useState(false);
  const [downloadCount, setDownloadCount] = useState(49872);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Simulate live download counter
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scarcity timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 600)); 
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Social Proof Toast Loop
  useEffect(() => {
    const names = ["Alex_K", "Shadow99", "ProGamer", "KillerMike", "Sarah12", "NoobSlayer"];
    const actions = ["unlocked God Mode", "downloaded v4.2", "activated Auto-Farm"];
    
    const triggerToast = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setToastMessage(`${randomName} just ${randomAction}`);
      setShowToast(true);
      
      setTimeout(() => setShowToast(false), 4000);
    };

    const interval = setInterval(triggerToast, 8000); // Every 8 seconds
    setTimeout(triggerToast, 2000); // First one soon

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const openLocker = () => {
    setIsLockerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLocker = () => {
    setIsLockerOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen font-sans bg-forest-950 selection:bg-green-500 selection:text-black overflow-x-hidden text-gray-200">
      
      {/* Top Urgent Banner */}
      <div className="bg-red-600/90 backdrop-blur text-white text-center py-2 px-4 text-xs md:text-sm font-bold tracking-widest flex items-center justify-center gap-2 animate-pulse fixed top-0 w-full z-50 shadow-lg">
        <Clock className="w-4 h-4" />
        <span>HIGH SERVER LOAD: DOWNLOADS RESTRICTED IN {formatTime(timeLeft)}</span>
      </div>

      <div className="pt-8"> {/* Spacer for fixed banner */}
        <Hero onDownload={openLocker} downloadCount={downloadCount} />
        
        <main className="relative z-10 space-y-32 pb-32">
           {/* Section Separator Gradient */}
           <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-forest-950 to-transparent pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            <Features />
            <ScriptPreview onDownload={openLocker} />
            <Testimonials />
            <FAQ />
            
            {/* Final Massive CTA */}
            <div className="bg-gradient-to-b from-forest-900 to-black border border-green-500/30 rounded-3xl p-8 md:p-20 text-center relative overflow-hidden group shadow-[0_0_50px_rgba(34,197,94,0.1)]">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Domin8?</span>
                </h2>
                <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
                  Join <span className="text-white font-bold">{downloadCount.toLocaleString()}</span> players using the private script. 
                  <br className="hidden md:block"/> This download link expires soon.
                </p>
                
                <button
                  onClick={openLocker}
                  className="w-full md:w-auto bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-xl md:text-3xl font-bold py-6 px-16 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-4 mx-auto border-t border-white/20"
                >
                  <Download className="w-8 h-8 md:w-10 md:h-10" />
                  INSTANT DOWNLOAD
                </button>
                
                <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-mono text-gray-500">
                  <span className="flex items-center gap-2 px-3 py-1 bg-black/30 rounded-full border border-white/5"><ShieldCheck className="w-4 h-4 text-green-500" /> 100% Undetected</span>
                  <span className="flex items-center gap-2 px-3 py-1 bg-black/30 rounded-full border border-white/5"><Zap className="w-4 h-4 text-yellow-400" /> Instant Activation</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Social Proof Toast */}
      <div className={`fixed bottom-4 left-4 z-40 transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <div className="bg-slate-900 border border-green-500/30 p-4 rounded-lg shadow-2xl flex items-center gap-4 max-w-sm">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
               <Download className="w-5 h-5 text-green-400" />
            </div>
            <div>
               <p className="text-sm font-bold text-white">{toastMessage}</p>
               <p className="text-xs text-green-400">Verified just now</p>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-auto text-gray-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
         </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/90 to-transparent z-30 md:hidden pb-6">
        <button 
          onClick={openLocker}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-green-900/40 flex items-center justify-center gap-2 border-t border-white/20"
        >
          <Download className="w-5 h-5" />
          GET SCRIPT FREE
        </button>
      </div>

      {isLockerOpen && <LockerModal onClose={closeLocker} />}
    </div>
  );
}