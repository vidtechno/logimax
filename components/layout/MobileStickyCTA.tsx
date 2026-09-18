'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after user scrolls down 320px
      const formEl = document.getElementById('ariza');
      if (!formEl) {
        setIsVisible(window.scrollY > 320);
        return;
      }
      
      const formRect = formEl.getBoundingClientRect();
      // Hide if user is already looking at the form
      const isFormInView = formRect.top < window.innerHeight && formRect.bottom > 0;
      
      setIsVisible(window.scrollY > 320 && !isFormInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const formEl = document.getElementById('ariza');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent pb-safe animate-in fade-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto">
        <button
          onClick={handleClick}
          type="button"
          className="w-full min-h-[52px] px-5 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-black text-base shadow-xl shadow-red-600/35 border border-red-500/30 flex items-center justify-between transition-all"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>Kursga yozilish</span>
          </span>
          <span className="flex items-center gap-1 text-xs font-bold bg-white/20 px-2.5 py-1 rounded-lg">
            <span>Ariza qoldirish</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </div>
  );
};
