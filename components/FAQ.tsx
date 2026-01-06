import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { TabType } from '../App';

interface FAQProps {
    activeTab: TabType;
}

const scriptFAQs = [
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

const codeFAQs = [
  {
    q: "Do these codes really work?",
    a: "Yes, these are verified developer codes that are often hidden or limited time only. We update the list daily."
  },
  {
    q: "Where do I enter the codes?",
    a: "Open 99 Nights, tap the 'Settings' gear icon, then click 'Codes'. Paste the code from our list to redeem."
  },
  {
    q: "Are the codes permanent?",
    a: "The items you get (like Diamonds or Classes) are permanent, but the codes themselves may expire, so use them fast."
  },
  {
    q: "Why are some codes hidden?",
    a: "We hide the most valuable codes to prevent the developers from finding out and patching them too quickly."
  }
];

const classFAQs = [
  {
    q: "Is the class unlock permanent?",
    a: "Yes! Once we inject the class data into your account, you own it forever, just as if you bought it."
  },
  {
    q: "Do I need my password?",
    a: "No. We only need your username to identify the account. We never ask for passwords."
  },
  {
    q: "Can I unlock multiple classes?",
    a: "Yes, but we recommend unlocking one at a time to keep the server requests looking natural."
  },
  {
    q: "Is there a risk of banning?",
    a: "The injection method uses a packet spoofing technique that mimics a legitimate purchase, making it 99.9% safe."
  }
];

export const FAQ: React.FC<FAQProps> = ({ activeTab }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  let faqs = scriptFAQs;
  let highlightColor = "text-green-500";
  
  if (activeTab === 'codes') {
      faqs = codeFAQs;
      highlightColor = "text-indigo-500";
  } else if (activeTab === 'classes') {
      faqs = classFAQs;
      highlightColor = "text-amber-500";
  }

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        FREQUENTLY ASKED <span className={highlightColor}>QUESTIONS</span>
      </h2>
      
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={`${activeTab}-${idx}`} className="bg-forest-900/40 rounded-lg overflow-hidden border border-gray-800">
            <button 
              className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-gray-800 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-bold text-sm md:text-base">{item.q}</span>
              {openIndex === idx ? <ChevronUp className={`w-5 h-5 ${highlightColor}`} /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {openIndex === idx && (
              <div className="px-6 py-4 bg-black/20 text-gray-300 text-sm leading-relaxed border-t border-gray-800">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};