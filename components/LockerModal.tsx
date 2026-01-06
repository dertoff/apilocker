import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  Gift,
  Loader2,
  Clock,
  Users,
  X
} from 'lucide-react';

interface LockerModalProps {
  onClose: () => void;
}

interface Offer {
  offerid: number;
  name_short: string;
  adcopy: string;
  picture: string;
  link: string;
  payout: string;
  epc: string;
  stars: number;
  completes: number;
  timeEstimate: string;
  label: 'FASTEST' | 'EASIEST' | 'HIGHEST PAYOUT' | 'POPULAR';
  conversionScore: number;
}

// Helper to decorate raw offers with "Elite" metrics
const decorateOffer = (rawOffer: any): Offer => {
  const payoutNum = parseFloat(rawOffer.payout);
  const epcNum = parseFloat(rawOffer.epc);
  
  const stars = 4.5 + Math.random() * 0.5;
  const completes = Math.floor(1000 + Math.random() * 15000);
  
  let label: Offer['label'] = 'POPULAR';
  let timeEstimate = '1 min';
  
  if (payoutNum > 1.0) {
    label = 'HIGHEST PAYOUT';
    timeEstimate = '2 min';
  } else if (Math.random() > 0.6) {
    label = 'FASTEST';
    timeEstimate = '30 sec';
  } else if (Math.random() > 0.5) {
    label = 'EASIEST';
    timeEstimate = '45 sec';
  }

  const conversionScore = (epcNum * 10) + (stars * 2) + (payoutNum * 5);

  return {
    ...rawOffer,
    stars,
    completes,
    timeEstimate,
    label,
    conversionScore
  };
};

// Static Offers - No API
const STATIC_OFFERS = [
  {
    offerid: 101,
    name_short: "Lords Mobile: Kingdom Wars",
    adcopy: "Download and run for 30s",
    picture: "https://play-lh.googleusercontent.com/1-hPx9gQ0rGfP4g6y-w7x7x7x7x7x7x7x7x7",
    link: "#",
    payout: "0.50",
    epc: "0.20"
  },
  {
    offerid: 102,
    name_short: "TikTok",
    adcopy: "Install & Register",
    picture: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
    link: "#",
    payout: "0.30",
    epc: "0.15"
  },
  {
    offerid: 103,
    name_short: "Coin Master",
    adcopy: "Install app & complete village 3",
    picture: "https://play-lh.googleusercontent.com/rqA73h8tqj_k0n186u436p497746537",
    link: "#",
    payout: "1.20",
    epc: "0.40"
  },
  {
    offerid: 104,
    name_short: "AliExpress",
    adcopy: "Open app for 30 seconds",
    picture: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Aliexpress_logo.svg",
    link: "#",
    payout: "0.80",
    epc: "0.10"
  }
];

export const LockerModal: React.FC<LockerModalProps> = ({ onClose }) => {
  const [step, setStep] = useState<0 | 1 | 2>(0); // 0: Hook, 1: Value/Commitment, 2: Locker
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isCoaching, setIsCoaching] = useState(false);
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const [liveUsers, setLiveUsers] = useState(124);

  // Load Static Offers Immediately
  useEffect(() => {
    setOffers(STATIC_OFFERS.map(decorateOffer).sort((a: Offer, b: Offer) => b.conversionScore - a.conversionScore));
  }, []);

  // Live User Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNextStep = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (step < 2) setStep(prev => (prev + 1) as 0 | 1 | 2);
      setIsTransitioning(false);
    }, 300);
  };

  const handleOfferStart = (offer: Offer) => {
    setActiveOffer(offer);
    setIsCoaching(true);
    window.open(offer.link, '_blank');
  };

  // --- SCREEN 1: THE HOOK ---
  const ScreenHook = () => (
    <div className="text-center p-8">
      <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <Gift className="w-10 h-10 text-green-600" />
      </div>
      
      <h2 className="text-3xl font-black text-gray-900 mb-2">
        YOUR DOWNLOAD IS READY
      </h2>
      <p className="text-gray-500 mb-8 font-medium">
        99 Nights Script v4.2 Package
      </p>

      <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left border border-gray-100 shadow-inner">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            <span className="font-bold text-gray-700">99 Nights Script v4.2</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            <span className="font-bold text-gray-700">Anti-Ban Protection Module</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
            <span className="font-bold text-gray-700">Installation Guide PDF</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>12,847 downloads</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span>4.9/5 Rating</span>
        </div>
      </div>

      <button 
        onClick={handleNextStep}
        className="w-full bg-green-600 hover:bg-green-500 text-white text-xl font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
      >
        CLAIM DOWNLOAD
        <ArrowRight className="w-6 h-6" />
      </button>
      
      <p className="mt-4 text-xs text-gray-400">
        100% Free • No Credit Card Required
      </p>
    </div>
  );

  // --- SCREEN 2: VALUE STACK ---
  const ScreenValue = () => (
    <div className="p-8">
      <div className="flex items-center gap-2 text-green-600 font-bold mb-6">
        <CheckCircle2 className="w-6 h-6" />
        <span>Package Prepared Successfully</span>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-6 mb-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">You are receiving:</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>99 Nights Script v4.2</span>
              <span className="text-green-400 font-mono">$47.00</span>
            </div>
            <div className="flex justify-between">
              <span>Anti-Ban Module</span>
              <span className="text-green-400 font-mono">$29.00</span>
            </div>
            <div className="flex justify-between">
              <span>Setup Guide</span>
              <span className="text-green-400 font-mono">$15.00</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t border-gray-700 mt-2">
              <span>TOTAL VALUE</span>
              <span className="text-green-400 font-mono text-lg line-through text-gray-400 mr-2">$91.00</span>
            </div>
            <div className="flex justify-between items-center bg-white/10 p-2 rounded mt-2">
              <span className="font-bold text-yellow-400">YOUR PRICE:</span>
              <span className="font-black text-white text-xl">FREE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
          <span>Progress</span>
          <span>50%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 w-1/2"></div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <h4 className="font-bold text-blue-900 text-xs mb-2 uppercase">Real User Feedback</h4>
        <div className="space-y-2">
           <div className="text-xs text-blue-800 italic">"Got it in 25 seconds!" - Mike T.</div>
           <div className="text-xs text-blue-800 italic">"Script works perfectly" - James L.</div>
        </div>
      </div>

      <button 
        onClick={handleNextStep}
        className="w-full bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
      >
        CONTINUE
      </button>
    </div>
  );

  // --- SCREEN 3: LOCKER & COACHING ---
  const ScreenLocker = () => (
    <div className="bg-white rounded-2xl overflow-hidden font-sans h-full flex flex-col">
       {/* Header */}
       <div className="bg-slate-50 border-b border-gray-100 p-6 shrink-0">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                File Download Pending...
              </h2>
              <p className="text-xs text-gray-500 font-medium">
                Step 3 of 3: Verification Required
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-green-600">75%</span>
            </div>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-3/4 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] relative overflow-hidden">
               <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Live Ticker */}
        <div className="bg-blue-600 text-white text-xs font-bold py-2 px-6 flex items-center justify-between shadow-md relative z-10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>LIVE: {liveUsers} people unlocking now</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {isCoaching ? (
             <div className="text-center animate-in slide-in-from-right duration-300 pt-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-ping"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Offer Started!</h3>
              <p className="text-gray-600 mb-6">
                We are verifying your completion of <strong>{activeOffer?.name_short}</strong>.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-bold text-yellow-800 flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                  PRO TIP:
                </h4>
                <p className="text-sm text-yellow-700">
                  Stay on the offer page for at least 30 seconds after installing to ensure instant verification. 
                  <span className="font-bold block mt-1">Do not close this tab!</span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Verifying status...</span>
                  <span className="font-mono">In Progress</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-2/3 animate-[pulse_1s_ease-in-out_infinite]"></div>
                </div>
              </div>

              <button 
                onClick={() => setIsCoaching(false)}
                className="mt-8 text-sm text-gray-400 hover:text-gray-600 underline"
              >
                Select a different offer
              </button>
            </div>
          ) : (
            <>
              {/* Why Verification Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-6">
                <div className="flex gap-3">
                   <div className="bg-gray-200 p-1.5 rounded h-fit">
                      <ShieldCheck className="w-4 h-4 text-gray-600" />
                   </div>
                   <div>
                     <h4 className="text-xs font-bold text-gray-900 mb-1">WHY VERIFICATION?</h4>
                     <p className="text-xs text-gray-500 leading-relaxed">
                       This prevents bots from patching our exploits and keeps the service 100% free for real users like you.
                     </p>
                   </div>
                </div>
              </div>

              <p className="text-center text-sm font-bold text-gray-900 mb-4">
                Complete ONE offer below to unlock:
              </p>

              <div className="space-y-3">
                 {offers.map((offer, idx) => {
                    let badgeColor = "bg-gray-100 text-gray-600";
                    if (offer.label === 'FASTEST') badgeColor = "bg-yellow-100 text-yellow-700 border-yellow-200";
                    if (offer.label === 'HIGHEST PAYOUT') badgeColor = "bg-green-100 text-green-700 border-green-200";
                    if (offer.label === 'EASIEST') badgeColor = "bg-blue-100 text-blue-700 border-blue-200";

                    return (
                      <div 
                        key={offer.offerid}
                        onClick={() => handleOfferStart(offer)}
                        className="relative bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer group hover:scale-[1.01]"
                      >
                        {/* Recommended Tag */}
                        {idx === 0 && (
                           <div className="absolute -top-2.5 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm animate-pulse z-10">
                             RECOMMENDED
                           </div>
                        )}

                        <div className="flex items-start gap-4">
                          <img 
                            src={offer.picture} 
                            alt={offer.name_short}
                            className="w-12 h-12 rounded-lg object-cover border border-gray-100 bg-gray-50 shrink-0"
                            onError={(e) => { (e.target as HTMLImageElement).src = "https://via.placeholder.com/64?text=App"; }}
                          />
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badgeColor}`}>
                                ⚡ {offer.label}
                              </span>
                              <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {offer.timeEstimate}
                              </span>
                            </div>
                            
                            <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1 truncate">
                              {offer.name_short}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                               <div className="flex items-center text-yellow-400 gap-0.5">
                                 <span className="text-gray-700 font-bold">{offer.stars.toFixed(1)}</span>
                                 <Star className="w-3 h-3 fill-current" />
                               </div>
                               <span className="text-gray-300">|</span>
                               <span>{offer.completes.toLocaleString()} verified</span>
                            </div>
                          </div>

                          <div className="self-center">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                 })}
              </div>
            </>
          )}
        </div>
        
        <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
           <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
             <ShieldCheck className="w-3 h-3 text-green-500" />
             <span>SSL Secure Connection • 256-bit Encryption</span>
           </div>
        </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-300 max-h-[90vh] flex flex-col">
          <div className="absolute top-4 right-4 z-20">
            <button onClick={onClose} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {step === 0 && <ScreenHook />}
          {step === 1 && <ScreenValue />}
          {step === 2 && <ScreenLocker />}
      </div>
    </div>
  );
};