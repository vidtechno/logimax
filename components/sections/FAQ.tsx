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
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>SAVOLLAR VA JAVOBLAR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ko‘p beriladigan savollar
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
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
