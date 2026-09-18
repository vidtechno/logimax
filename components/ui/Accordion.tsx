'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  index
}) => {
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border border-slate-800/80 hover:border-slate-700/90 rounded-2xl bg-slate-900/40 backdrop-blur-sm transition-colors duration-200 overflow-hidden">
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left text-slate-100 hover:text-white font-medium text-base md:text-lg transition-colors group focus-visible:outline-none"
        >
          <span className="pr-4 leading-snug">{question}</span>
          <span
            className={`shrink-0 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180 bg-blue-600/10 text-blue-400 border-blue-500/30' : ''
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </span>
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-6 md:px-6 md:pb-6 text-slate-400 text-sm md:text-base leading-relaxed border-t border-slate-800/40 pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
