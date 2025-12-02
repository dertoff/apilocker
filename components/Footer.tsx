import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-600 py-12 text-center text-sm relative z-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          <a href="#" className="hover:text-white transition-colors">DMCA</a>
        </div>
        <p className="max-w-2xl mx-auto mb-4 text-xs text-gray-700">
          This website is not affiliated with, endorsed by, or connected to the developers of "99 Nights". All trademarks are property of their respective owners. This script is for educational purposes only. Use at your own risk.
        </p>
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} 99 Nights Script Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};