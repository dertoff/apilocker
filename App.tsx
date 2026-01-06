import React, { useState, useEffect } from 'react';
import { 
  Download, 
  FileKey
} from 'lucide-react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ScriptPreview } from './components/ScriptPreview';
import { VerificationModal } from './components/VerificationModal';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export type TabType = 'script' | 'codes';

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
    
    const triggerToast = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const actions = activeTab === 'script' ? scriptActions : codeActions;
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setToastMessage(`${randomName} just ${randomAction}`);
      setShowToast(true);
      
      setTimeout(() => setShowToast(false), 4000);
    };

    const interval = setInterval(triggerToast, 8000); // Every 8 seconds
    setTimeout(triggerToast, 2000); // First one soon

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleAction = () => {
    if (activeTab === 'codes') {
        // Scroll to codes first if they click "Reveal Codes" in Hero
        const codesSection = document.getElementById('script-preview');
        if (codesSection) {
            codesSection.scrollIntoView({ behavior: 'smooth' });
            return;
        }
    }
    // Start verification flow for Download or Direct Code Reveal
    setIsVerifying(true);
  };

  const handleLockerTrigger = () => {
    // This function runs after the "Checking" modal finishes
    console.log("Triggering Content Locker...");
    
    // Call the CPABuild trigger function: _rp()
    try {
        if ((window as any)._rp) {
            (window as any)._rp();
        } else {
            console.warn("Locker function _rp() not found on window. Ensure scripts are loaded.");
        }
    } catch (e) {
        console.error("Error launching locker:", e);
    }
    
    // Reset verifying state so the modal closes (the locker overlay will take over)
    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen font-sans bg-[#050505] selection:bg-green-500 selection:text-black overflow-x-hidden text-gray-200">
      
      {/* Slimmer Top Banner */}
      <div className={`border-b text-center py-2 px-4 text-[10px] md:text-xs font-bold tracking-wider fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        activeTab === 'script' 
          ? 'bg-green-900/30 border-green-500/10 text-green-400' 
          : 'bg-indigo-900/30 border-indigo-500/10 text-indigo-400'
      }`}>
        <span>⚡ 2026 LEAK: {activeTab === 'script' ? 'SCRIPT V5 RELEASED' : 'FULL CODE LIST LEAKED'} | UPDATED TODAY</span>
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
            {/* Swapped order: Codes/Script First, then Features */}
            <div id="script-preview">
                <ScriptPreview activeTab={activeTab} onDownload={() => setIsVerifying(true)} />
            </div>
            
            <Features activeTab={activeTab} />
            
            <Testimonials />
            <FAQ />
            
            {/* Simple Final CTA */}
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                {activeTab === 'script' ? 'Ready to Dominate?' : 'Reveal All Hidden Codes'}
              </h2>
              <button
                onClick={() => setIsVerifying(true)}
                className={`w-full max-w-sm text-black hover:bg-gray-200 text-lg font-bold py-4 px-8 rounded-xl shadow-xl transition-transform hover:scale-105 ${
                  activeTab === 'script' ? 'bg-white' : 'bg-indigo-100'
                }`}
              >
                {activeTab === 'script' ? 'DOWNLOAD SCRIPT V5' : 'ACCESS DATABASE'}
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
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeTab === 'script' ? 'bg-green-500/20 text-green-500' : 'bg-indigo-500/20 text-indigo-400'}`}>
               {activeTab === 'script' ? <Download className="w-4 h-4" /> : <FileKey className="w-4 h-4" />}
            </div>
            <div>
               <p className="text-xs font-bold text-gray-200">{toastMessage}</p>
            </div>
         </div>
      </div>
    </div>
  );
}