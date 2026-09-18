'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const handleScrollToForm = () => {
    const el = document.getElementById('ariza');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-red-600 via-red-600 to-rose-600 text-white shadow-2xl shadow-red-600/25 space-y-6">
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
            Logistika sohasidagi birinchi qadamingizni Logimax bilan boshlang
          </h2>

          <p className="text-base sm:text-lg text-red-50 max-w-2xl mx-auto leading-relaxed">
            O‘zingizga mos kursni tanlang yoki mutaxassisimizdan bepul konsultatsiya oling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-white/95 pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Nazariya va amaliyot
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Shaxsiy ish stoli
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-white" />
              Tezkor va qulay jadvallar
            </span>
          </div>

          <div className="pt-4 max-w-xs mx-auto">
            <button
              onClick={handleScrollToForm}
              className="w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-red-600 font-black text-base shadow-xl hover:shadow-2xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Kursga yozilish</span>
              <ArrowUpRight className="w-5 h-5 text-red-600" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
