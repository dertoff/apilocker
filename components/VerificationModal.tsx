import React, { useEffect, useState } from 'react';

interface VerificationModalProps {
  onComplete: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast loading simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        
        // Randomized increments for a natural loading feel
        const increment = Math.random() > 0.6 ? Math.floor(Math.random() * 12) + 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Dimensions for the clean minimal loader
  const size = 150;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center">
        
        {/* Minimalist Progress Circle */}
        <div className="relative mb-6" style={{ width: size, height: size }}>
          <svg className="w-full h-full transform -rotate-90">
            {/* Dark Track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#1f2937" // Gray 800 - dark subtle track
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Cyan Indicator */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#06b6d4" // Cyan 500 - Matches the request
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>
          
          {/* Percentage Text Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black text-white tracking-tighter">
              {progress}%
            </span>
          </div>
        </div>

        {/* Clean Status Text */}
        <div className="text-center">
           <h3 className="text-white font-bold text-lg tracking-wide mb-1">
             {progress === 100 ? 'Completed' : 'Processing...'}
           </h3>
           <p className="text-gray-500 text-xs font-medium uppercase tracking-widest animate-pulse">
             Do not close window
           </p>
        </div>

      </div>
    </div>
  );
};