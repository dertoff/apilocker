import React, { useState } from 'react';
import { User, ArrowRight, ChevronsUp, Check } from 'lucide-react';

interface ClassesProps {
    onUnlock: () => void;
}

const classes = [
  { id: 1, name: 'Engineer', image: 'https://n9f.site/images/Engineer.png' },
  { id: 2, name: 'Assassin', image: 'https://n9f.site/images/assassin.png' },
  { id: 3, name: 'Necromancer', image: 'https://n9f.site/images/Necromaner.png' },
  { id: 4, name: 'Cyborg', image: 'https://n9f.site/images/cyborg.png' },
  { id: 5, name: 'Fire Bandit', image: 'https://n9f.site/images/firebandit.png' },
  { id: 6, name: 'Vampire', image: 'https://n9f.site/images/Vampire.png' },
  { id: 7, name: 'Big Game Hunter', image: 'https://n9f.site/images/biggamehunter.png' },
  { id: 8, name: 'Pyromaniac', image: 'https://n9f.site/images/pyromaniac.png' },
  { id: 9, name: 'Alien', image: 'https://n9f.site/images/alien.png' },
];

export const Classes: React.FC<ClassesProps> = ({ onUnlock }) => {
  const [username, setUsername] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [step, setStep] = useState(1); // 1: Input, 2: Searching, 3: Success
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClassClick = (id: number) => {
    if (selectedId === id) {
        setSelectedId(null);
    } else {
        setSelectedId(id);
    }
  };

  const handleUnlockClick = () => {
    if (!username) return;
    
    setIsConnecting(true);
    setStep(2);

    // Simulate search and inject
    setTimeout(() => {
        setStep(3);
        setTimeout(() => {
            onUnlock();
            // Reset after a delay if they come back
            setTimeout(() => {
                setIsConnecting(false);
                setStep(1);
            }, 2000);
        }, 1000);
    }, 2000);
  };

  const selectedClass = classes.find(c => c.id === selectedId);

  return (
    <section className="relative overflow-hidden min-h-[500px]">
       
       {/* Instruction Hint */}
       <div className="text-center mb-8">
          <p className="text-gray-500 text-xs uppercase tracking-widest font-bold animate-pulse">
            {selectedId ? 'Great choice! Enter username below.' : 'Select a class to unlock'}
          </p>
       </div>

       <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-y-8 gap-x-4 relative z-10 mb-8">
        {classes.map((cls) => {
            const isSelected = selectedId === cls.id;
            const isDimmed = selectedId !== null && !isSelected;

            return (
                <div 
                    key={cls.id} 
                    onClick={() => handleClassClick(cls.id)}
                    className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ${isDimmed ? 'opacity-40 scale-95 grayscale' : 'opacity-100'}`}
                >
                    {/* Hexagon Container - Smaller Size */}
                    <div className={`w-24 h-24 md:w-28 md:h-28 relative flex items-center justify-center transition-all duration-300 ${isSelected ? 'scale-110 drop-shadow-[0_0_25px_rgba(34,197,94,0.6)]' : 'group-hover:scale-105 drop-shadow-xl'}`}>
                        
                        {/* Hexagon Frame (Gold Gradient) */}
                        <div className={`absolute inset-0 transition-colors duration-300 ${isSelected ? 'bg-gradient-to-b from-green-400 to-green-600' : 'bg-gradient-to-b from-[#e8cf98] via-[#cfa756] to-[#8a6e2f]'}`} 
                             style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
                        </div>
                        
                        {/* Inner Hexagon Background */}
                        <div className="absolute inset-[4px] bg-[#1a2e1a] overflow-hidden" 
                             style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
                            
                            <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-50"></div>
                            
                            <img 
                                src={cls.image} 
                                alt={cls.name}
                                className={`w-full h-full object-cover mt-1 transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/150/000000/FFFFFF?text=${cls.name[0]}`;
                                }}
                            />
                        </div>

                        {/* Selected Indicator Checkmark */}
                        {isSelected && (
                            <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/40 backdrop-blur-[1px]" style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}>
                                <Check className="w-10 h-10 text-green-400 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] stroke-[3]" />
                            </div>
                        )}

                        {/* Rank Chevrons */}
                        {!isSelected && (
                            <div className="absolute -bottom-1 -right-1 z-20 drop-shadow-lg opacity-80 group-hover:opacity-100">
                                <ChevronsUp className="w-8 h-8 text-gray-300 stroke-[3]" />
                            </div>
                        )}
                    </div>

                    {/* Name Tag - Uniform Color */}
                    <h3 className={`font-bold text-xs md:text-sm mt-3 text-center transition-colors duration-200 ${isSelected ? 'text-green-400' : 'text-blue-200 group-hover:text-white'}`}>
                        {cls.name}
                    </h3>
                </div>
            );
        })}
      </div>

      {selectedClass && (
        <div className="mt-4 max-w-lg mx-auto px-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl ring-1 ring-green-500/20">
                
                <h3 className="text-center text-white font-bold text-xl mb-2 relative z-10">
                    Unlock <span className="text-green-500">{selectedClass.name}</span>
                </h3>
                <p className="text-center text-gray-500 text-xs mb-6">
                    Enter your username to inject this class.
                </p>

                <div className="space-y-4 relative z-10">
                    <div className="relative group">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-5 h-5 ${username ? 'text-green-500' : 'text-gray-600'}`} />
                        <input 
                            type="text" 
                            placeholder="Enter Username..." 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isConnecting}
                            className="w-full bg-black/80 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all font-mono placeholder:text-gray-700 text-sm font-bold disabled:opacity-50"
                        />
                    </div>

                    <button 
                        onClick={handleUnlockClick}
                        disabled={!username || isConnecting}
                        className={`w-full font-black text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 ${
                            username 
                            ? 'bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(22,197,94,0.4)]' 
                            : 'bg-gray-800 text-gray-600 cursor-not-allowed'
                        }`}
                    >
                        {step === 1 && (
                            <>
                                <span>UNLOCK {selectedClass.name.toUpperCase()}</span>
                                <ArrowRight className="w-6 h-6 stroke-[3]" />
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white/50"></span>
                                <span>VERIFYING...</span>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <Check className="w-6 h-6 stroke-[3]" />
                                <span>SUCCESS!</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
      )}

    </section>
  );
};