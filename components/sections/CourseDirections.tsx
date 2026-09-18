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
    <section id="kurslar" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            ASOSIY YO‘NALISHLAR
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            O‘zingizga mos yo‘nalishni tanlang
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Karyera maqsadingiz va qiziqishingizga qarab xalqaro yuk tashish operatsiyalari yoki AQSH trucking dispatching sohasini tanlang.
          </p>
        </div>

        {/* 2 Big Direction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direction 1: XALQARO LOGISTIKA */}
          <div className="group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-red-50/40 via-white to-white border-2 border-red-200 hover:border-red-400 shadow-xl shadow-red-500/5 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600 shadow-xs">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-red-100/80 border border-red-200 text-red-700">
                  Global Koridor
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                  XALQARO LOGISTIKA
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Xalqaro yuk tashish jarayonlari, hujjatlar, yuk topish, transport bilan ishlash va real logistika operatsiyalarini o‘rganing.
                </p>
              </div>

              {/* Highlights tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-red-600" />
                  CMR & TIR Carnet
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-red-600" />
                  Fraxt hisoblash
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                  ADR (Xavfli yuklar)
                </span>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo('xalqaro-logistika')}
                className="w-full flex items-center justify-center gap-2 font-bold shadow-lg shadow-red-600/20"
              >
                <span>Xalqaro logistika kurslarini ko‘rish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Direction 2: AMERIKA LOGISTIKASI */}
          <div className="group relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-slate-50/70 via-white to-white border border-slate-200 hover:border-slate-300 shadow-xl shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                  AQSH Trucking Bozor
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                  AMERIKA LOGISTIKASI
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  AQSH logistika tizimidagi Dispatching, Fleet Management, Safety va Accounting yo‘nalishlarini real kompaniya muhiti bilan o‘rganing.
                </p>
              </div>

              {/* Highlights tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-slate-800" />
                  Dispatching
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-800" />
                  Fleet & Safety
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-slate-800" />
                  Accounting & Invoicing
                </span>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('amerika-logistikasi')}
                className="w-full flex items-center justify-center gap-2 font-bold hover:border-red-400 hover:text-red-600"
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
