import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: "Is this script safe from bans?",
    a: "Yes, we use a cloud-based bypass that is updated daily. We have a 0% ban rate over the last 6 months."
  },
  {
    q: "Do I need a key?",
    a: "Yes, the script is key-protected to prevent patching. You can get a free key by completing the short verification step."
  },
  {
    q: "Does it work on Mobile?",
    a: "Absolutely. This script is compatible with Arceus X, Delta, and Hydrogen executors on Android and iOS."
  },
  {
    q: "How do I install it?",
    a: "1. Download the script text. 2. Copy it. 3. Paste into your executor. 4. Execute and enjoy."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        FREQUENTLY ASKED <span className="text-green-500">QUESTIONS</span>
      </h2>
      
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="bg-forest-900 rounded-lg overflow-hidden border border-forest-800">
            <button 
              className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-forest-800 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-bold">{item.q}</span>
              {openIndex === idx ? <ChevronUp className="w-5 h-5 text-green-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {openIndex === idx && (
              <div className="px-6 py-4 bg-black/20 text-gray-300 text-sm leading-relaxed border-t border-forest-800">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};