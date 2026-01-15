"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Home, Shield, Ruler, Paintbrush } from 'lucide-react';

const GOLD = "#dbb45c";

const faqData = [
  {
    question: "How long does it take to build a Hurricane Proof Home?",
    icon: <Home size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-sm md:text-base">The timeline for building a SCIP home varies based on size and complexity, but it is typically faster than traditional builds because pre-cut panels allow for quick assembly.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <div className="p-4 bg-slate-50 rounded-xl border-l-2 border-[#dbb45c]">
            <span className="block font-bold text-[10px] uppercase tracking-wider mb-1 text-[#dbb45c]">Standard Timeline</span>
            <span className="text-xs md:text-sm font-medium text-slate-700">Most homes completed in around 9 months.</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border-l-2 border-[#dbb45c]">
            <span className="block font-bold text-[10px] uppercase tracking-wider mb-1 text-[#dbb45c]">Foundations</span>
            <span className="text-xs md:text-sm font-medium text-slate-700">Fiberglass pilings for harsh coastal areas.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "What makes the building Hurricane Proof?",
    icon: <Shield size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-sm md:text-base">Structural Concrete Insulated Panels (SCIP) consist of a steel-reinforced foam core encased in high-strength concrete layers.</p>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-2 gap-x-4 text-xs md:text-sm">
          <div className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-[#dbb45c]" /> Wind-rated 200 mph+</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-[#dbb45c]" /> Impact-resistant</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-[#dbb45c]" /> Fire-resistant</div>
          <div className="flex items-center gap-2 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-[#dbb45c]" /> Flood-resistant</div>
        </div>
      </div>
    )
  },
  {
    question: "What is the cost difference vs. standard construction?",
    icon: <Ruler size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-sm md:text-base">While upfront costs are slightly higher due to premium engineering, the long-term ROI is significant:</p>
        <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 px-4 bg-slate-50/50">
          {[
            { label: "Energy Savings", val: "Up to 70%" },
            { label: "Insurance", val: "Self-Insurable Option" },
            { label: "Maintenance", val: "Extremely Low" }
          ].map((item, i) => (
            <div key={i} className="py-3 flex justify-between items-center">
              <span className="text-xs md:text-sm font-medium text-slate-600">{item.label}</span>
              <span className="text-xs md:text-sm text-[#dbb45c] font-bold">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    question: "Can I customize my Hurricane Proof home?",
    icon: <Paintbrush size={20} />,
    content: (
      <div className="space-y-4">
        <p className="text-sm md:text-base">You are not limited to pre-designed models. Our team creates modern, traditional, or contemporary designs.</p>
        <p className="text-xs md:text-sm text-slate-500 italic bg-slate-50 p-3 rounded-lg border-dashed border border-slate-200">
          SCIP materials make it easy to introduce rounded edges, arches, and vaulted ceilings into your design.
        </p>
      </div>
    )
  }
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 md:py-16 px-4 md:px-6">
      <div className="mb-10 md:mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#dbb45c] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-3"
        >
          Specifications
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-light text-slate-900 tracking-tight"
        >
          Expert <span className="font-serif italic text-[#dbb45c]">Q&A</span>
        </motion.h3>
      </div>

      <div className="space-y-3 md:space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border transition-all duration-500 rounded-2xl overflow-hidden bg-white ${
                isOpen ? 'border-[#dbb45c]/30 shadow-xl shadow-[#dbb45c]/5' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left group"
              >
                <div className="flex items-center gap-3 md:gap-5">
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'scale-110 shadow-lg' : ''
                    }`}
                    style={{ 
                      backgroundColor: isOpen ? GOLD : '#f8fafc', 
                      color: isOpen ? '#fff' : GOLD,
                      boxShadow: isOpen ? `0 4px 12px ${GOLD}40` : 'none'
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className={`text-sm md:text-xl font-medium leading-tight transition-colors ${
                    isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-[#dbb45c]'
                  }`}>
                    {item.question}
                  </span>
                </div>
                
                <div className={`shrink-0 ml-2 transition-all duration-300 p-1 rounded-full ${
                  isOpen ? 'bg-[#dbb45c]/10 text-[#dbb45c] rotate-180' : 'bg-slate-50 text-slate-300 group-hover:bg-slate-100 group-hover:text-slate-400'
                }`}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-5 md:px-[88px] pb-6 md:pb-10 text-slate-500 leading-relaxed pt-2">
                      <div className="w-full h-px bg-slate-50 mb-6" />
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;