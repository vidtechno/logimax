'use client';

import React from 'react';
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
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-white border-red-400 shadow-md shadow-red-500/5'
          : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
      }`}
    >
      <h3>
        <button
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left text-slate-900 hover:text-red-600 font-bold text-base md:text-lg transition-colors group focus-visible:outline-none"
        >
          <span className="pr-4 leading-snug">{question}</span>
          <span
            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? 'rotate-180 bg-red-600 text-white shadow-sm shadow-red-600/30'
                : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-red-600'
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
          <p className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
