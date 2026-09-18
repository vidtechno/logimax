'use client';

import React, { useState } from 'react';
import { faqItems } from '@/data/faqData';
import { AccordionItem } from '@/components/ui/Accordion';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#090E17] border-t border-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>SAVOLLAR VA JAVOBLAR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ko‘p beriladigan savollar
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Kurslar, o‘qish jarayoni va amaliyot bo‘yicha eng ko‘p beriladigan savollarga aniq javoblar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
