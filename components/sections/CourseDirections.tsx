'use client';

import React from 'react';
import { Globe, Truck, ArrowRight, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CourseDirections: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kurslar" className="py-16 sm:py-24 bg-[#090E17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400">
            ASOSIY YO‘NALISHLAR
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            O‘zingizga mos yo‘nalishni tanlang
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Karyera maqsadingiz va qiziqishingizga qarab xalqaro yuk tashish operatsiyalari yoki AQSH trucking dispatching sohasini tanlang.
          </p>
        </div>

        {/* 2 Big Direction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direction 1: XALQARO LOGISTIKA */}
          <div className="group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-blue-950/40 via-slate-900/80 to-slate-950 border border-blue-500/30 hover:border-blue-400/60 shadow-xl shadow-blue-950/30 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-inner">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                  Global Koridor
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  XALQARO LOGISTIKA
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Xalqaro yuk tashish jarayonlari, hujjatlar, yuk topish, transport bilan ishlash va real logistika operatsiyalarini o‘rganing.
                </p>
              </div>

              {/* Highlights tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-blue-400" />
                  CMR & TIR Carnet
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  Fraxt hisoblash
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  ADR (Xavfli yuklar)
                </span>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo('xalqaro-logistika')}
                className="w-full flex items-center justify-center gap-2 group-hover:bg-blue-500"
              >
                <span>Xalqaro logistika kurslarini ko‘rish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Direction 2: AMERIKA LOGISTIKASI */}
          <div className="group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-950 border border-indigo-500/30 hover:border-indigo-400/60 shadow-xl shadow-indigo-950/30 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-inner">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                  AQSH Trucking Bozor
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  AMERIKA LOGISTIKASI
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  AQSH logistika tizimidagi Dispatching, Fleet Management, Safety va Accounting yo‘nalishlarini real kompaniya muhiti bilan o‘rganing.
                </p>
              </div>

              {/* Highlights tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-indigo-400" />
                  Dispatching
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  Fleet & Safety
                </span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  Accounting & Invoicing
                </span>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('amerika-logistikasi')}
                className="w-full flex items-center justify-center gap-2 border-indigo-500/40 hover:border-indigo-400 text-slate-100"
              >
                <span>Amerika logistika kurslarini ko‘rish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
