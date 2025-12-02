import React, { useState, useEffect } from 'react';
import { 
  Download, 
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
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Simulate live download counter
  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
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

  const openLocker = () => {
    setIsLockerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLocker = () => {
    setIsLockerOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen font-sans bg-[#050505] selection:bg-green-500 selection:text-black overflow-x-hidden text-gray-200">
      
      {/* Slimmer Top Banner */}
      <div className="bg-green-900/30 border-b border-green-500/10 text-green-400 text-center py-2 px-4 text-[10px] md:text-xs font-bold tracking-wider fixed top-0 w-full z-50 backdrop-blur-md">
        <span>⚡ STATUS: WORKING & UNDETECTED | UPDATED TODAY</span>
      </div>

      <div className="pt-4"> {/* Spacer */}
        <Hero onDownload={openLocker} downloadCount={downloadCount} />
        
        <main className="relative z-10 space-y-20 pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <Features />
            <ScriptPreview onDownload={openLocker} />
            <Testimonials />
            <FAQ />
            
            {/* Simple Final CTA */}
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to dominate?</h2>
              <button
                onClick={openLocker}
                className="w-full max-w-sm bg-white text-black hover:bg-gray-200 text-lg font-bold py-4 px-8 rounded-xl shadow-xl transition-transform hover:scale-105"
              >
                DOWNLOAD NOW
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Simplified Social Toast */}
      <div className={`fixed bottom-20 left-4 z-40 transition-all duration-500 transform ${showToast ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
         <div className="bg-[#111] border border-gray-800 p-3 rounded-lg shadow-2xl flex items-center gap-3 pr-8">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
               <Download className="w-4 h-4" />
            </div>
            <div>
               <p className="text-xs font-bold text-gray-200">{toastMessage}</p>
            </div>
         </div>
      </div>

      {/* Clean Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-3 bg-[#050505]/90 backdrop-blur border-t border-gray-800 z-30 md:hidden">
        <button 
          onClick={openLocker}
          className="w-full bg-green-600 text-white font-bold text-base py-3.5 rounded-lg shadow-lg flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          DOWNLOAD FREE
        </button>
      </div>

      {isLockerOpen && <LockerModal onClose={closeLocker} />}
    </div>
  );
}