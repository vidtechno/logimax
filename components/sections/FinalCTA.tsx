'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const handleScrollToForm = () => {
    const el = document.getElementById('ariza');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#090E17] via-[#0B1220] to-[#090E17] border-t border-slate-900 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-950/30 via-slate-900/80 to-blue-950/30 border border-blue-500/30 shadow-2xl space-y-6">
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto">
            Logistika sohasidagi birinchi qadamingizni Logimax bilan boshlang
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            O‘zingizga mos kursni tanlang yoki mutaxassisimizdan bepul konsultatsiya oling.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Nazariya va amaliyot
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Shaxsiy ish stoli
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Tezkor va qulay jadvallar
            </span>
          </div>

          <div className="pt-4 max-w-xs mx-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToForm}
              className="w-full flex items-center justify-center gap-2 text-base font-bold shadow-2xl shadow-blue-600/40"
            >
              <span>Kursga yozilish</span>
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
