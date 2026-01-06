import React, { useState, useEffect } from 'react';
import { 
  Download, 
  FileKey,
  Users
} from 'lucide-react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ScriptPreview } from './components/ScriptPreview';
import { Classes } from './components/Classes';
import { VerificationModal } from './components/VerificationModal';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export type TabType = 'script' | 'codes' | 'classes';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('script');
  const [downloadCount, setDownloadCount] = useState(49872);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

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
    const scriptActions = ["downloaded V5", "activated Auto-Farm", "enabled God Mode"];
    const codeActions = ["copied '1,000 DIAMONDS'", "unlocked Assassin Class", "redeemed Admin Code"];
    const classActions = ["unlocked Engineer", "unlocked Fire Bandit", "unlocked All Classes"];
    
    const triggerToast = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      
      let actions = scriptActions;
      if (activeTab === 'codes') actions = codeActions;
      if (activeTab === 'classes') actions = classActions;
      
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setToastMessage(`${randomName} just ${randomAction}`);
      setShowToast(true);
      
      setTimeout(() => setShowToast(false), 4000);
    };

    // User requested ~7 seconds between toasts. 
    // Toast duration is 4s. Interval = 4s + 7s = 11s.
    const interval = setInterval(triggerToast, 11000); 
    setTimeout(triggerToast, 3000); // Initial delay

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleAction = () => {
    if (activeTab === 'codes') {
        const codesSection = document.getElementById('script-preview');
        if (codesSection) {
            codesSection.scrollIntoView({ behavior: 'smooth' });
            return;
        }
    }
    // Start verification flow
    setIsVerifying(true);
  };

  const handleLockerTrigger = () => {
    console.log("Triggering Content Locker...");
    try {
        if ((window as any)._rp) {
            (window as any)._rp();
        } else {
            console.warn("Locker function _rp() not found on window. Ensure scripts are loaded.");
        }
    } catch (e) {
        console.error("Error launching locker:", e);
    }
    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen font-sans bg-[#050505] selection:bg-green-500 selection:text-black overflow-x-hidden text-gray-200">
      
      {/* Slimmer Top Banner */}
      <div className={`border-b text-center py-2 px-4 text-[10px] md:text-xs font-bold tracking-wider fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        activeTab === 'script' 
          ? 'bg-green-900/30 border-green-500/10 text-green-400' 
          : activeTab === 'codes' 
            ? 'bg-indigo-900/30 border-indigo-500/10 text-indigo-400'
            : 'bg-amber-900/30 border-amber-500/10 text-amber-400'
      }`}>
        <span>⚡ 2026 LEAK: {activeTab === 'script' ? 'SCRIPT V5 RELEASED' : activeTab === 'codes' ? 'FULL CODE LIST LEAKED' : 'ALL CLASSES UNLOCKED'} | UPDATED TODAY</span>
      </div>

      <div className="pt-4"> {/* Spacer */}
        <Hero 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onDownload={handleAction} 
          downloadCount={downloadCount} 
        />
        
        <main className="relative z-10 space-y-20 pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            {/* CONDITIONAL CONTENT RENDERING */}
            {(activeTab === 'script' || activeTab === 'codes') ? (
              <>
                <div id="script-preview" className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <ScriptPreview activeTab={activeTab} onDownload={() => setIsVerifying(true)} />
                </div>
                
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                  <Features activeTab={activeTab} />
                </div>
              </>
            ) : (
              // Classes Page Content
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <Classes onUnlock={() => setIsVerifying(true)} />
              </div>
            )}
            
            <Testimonials activeTab={activeTab} />
            <FAQ activeTab={activeTab} />
            
            {/* Dynamic CTA */}
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                {activeTab === 'script' ? 'Ready to Dominate?' : activeTab === 'codes' ? 'Reveal All Hidden Codes' : 'Unlock All Classes Now'}
              </h2>
              <button
                onClick={() => setIsVerifying(true)}
                className={`w-full max-w-sm text-black hover:bg-gray-200 text-lg font-bold py-4 px-8 rounded-xl shadow-xl transition-transform hover:scale-105 ${
                  activeTab === 'script' ? 'bg-white' : activeTab === 'codes' ? 'bg-indigo-100' : 'bg-amber-100'
                }`}
              >
                {activeTab === 'script' ? 'DOWNLOAD SCRIPT V5' : activeTab === 'codes' ? 'ACCESS DATABASE' : 'UNLOCK ALL FREE'}
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Verification Modal */}
      {isVerifying && (
        <VerificationModal onComplete={handleLockerTrigger} />
      )}

      {/* Simplified Social Toast */}
      <div className={`fixed bottom-20 left-4 z-40 transition-all duration-500 transform ${showToast ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
         <div className="bg-[#111] border border-gray-800 p-3 rounded-lg shadow-2xl flex items-center gap-3 pr-8">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              activeTab === 'script' ? 'bg-green-500/20 text-green-500' : 
              activeTab === 'codes' ? 'bg-indigo-500/20 text-indigo-400' :
              'bg-amber-500/20 text-amber-400'
            }`}>
               {activeTab === 'script' && <Download className="w-4 h-4" />}
               {activeTab === 'codes' && <FileKey className="w-4 h-4" />}
               {activeTab === 'classes' && <Users className="w-4 h-4" />}
            </div>
            <div>
               <p className="text-xs font-bold text-gray-200">{toastMessage}</p>
            </div>
         </div>
      </div>
    </div>
  );
}