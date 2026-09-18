'use client';

import React from 'react';
import { Check, ArrowRight, PhoneCall, Truck, Globe2, ShieldCheck, MapPin, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-radial-glow bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Academy Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>LOGIMAX LOGISTIKA AKADEMIYASI</span>
            </div>

            {/* Main Headline (H1 for SEO) */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl/tight font-extrabold text-white tracking-tight">
              LOGISTIKANI 0 DAN O‘RGANING{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                VA REAL AMALIYOT
              </span>{' '}
              BILAN ISH BOSHLANG
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Logimax logistika akademiyasida Xalqaro logistika yoki Amerika logistikasini nazariya bilan cheklanib qolmasdan, real amaliyot asosida o‘rganing.
            </p>

            {/* 3 Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Xalqaro va Amerika logistikasi
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Nazariya + real amaliyot
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  0 dan boshlab o‘rgatiladi
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('kurslar')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-bold shadow-xl shadow-blue-600/30"
              >
                <span>Kursni tanlash</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('ariza')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-base"
              >
                <PhoneCall className="w-4 h-4 text-blue-400" />
                <span>Bepul konsultatsiya olish</span>
              </Button>
            </div>
          </div>

          {/* Right Column: High-tech Logistics Telemetry & Dispatch UI Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-6 bg-gradient-to-b from-slate-900/90 via-[#0B1220]/90 to-slate-950 border border-slate-800/90 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Logimax Dispatch Simulator
                  </span>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 font-mono">
                  LIVE WORKSPACE
                </span>
              </div>

              {/* Live Route Graphic */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/60 mb-5">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                    <Globe2 className="w-3.5 h-3.5" />
                    Marshrut monitoringi
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">Holat: Faol</span>
                </div>

                {/* Visual Route Points */}
                <div className="relative py-2">
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-400 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-600/40">
                        A
                      </div>
                      <span className="text-[11px] font-medium text-slate-300 mt-1">Toshkent</span>
                      <span className="text-[10px] text-slate-500">Yuk ortish</span>
                    </div>

                    <div className="flex-1 mx-3 relative flex items-center">
                      <div className="w-full h-0.5 bg-slate-800" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="px-2.5 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-[10px] font-mono text-blue-300 flex items-center gap-1">
                          <Truck className="w-3 h-3 text-blue-400" />
                          <span>CMR / TIR</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-400 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-emerald-600/40">
                        B
                      </div>
                      <span className="text-[11px] font-medium text-slate-300 mt-1">Yevropa / AQSH</span>
                      <span className="text-[10px] text-slate-500">Yetkazish</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Indicators Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Dispatching</span>
                    <Activity className="w-3 h-3 text-blue-400" />
                  </div>
                  <div className="text-sm font-bold text-white">DAT & Truckstop</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Brokerlar bilan muzokara</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Safety & DOT</span>
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-sm font-bold text-white">FMCSA Qoidalari</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Nazorat protokollari</div>
                </div>
              </div>

              {/* Practice Desktop Callout */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-slate-200">Shaxsiy amaliy ish stoli</p>
                  <p className="text-slate-400 text-[11px]">Real platformalar va yuk botlari taqdim etiladi</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Trust Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Xalqaro logistika
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Amerika logistikasi
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-2 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Real amaliyot
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
