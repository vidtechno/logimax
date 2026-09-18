import React from 'react';
import { BookOpen, Wrench, RefreshCw, Briefcase, ArrowRight } from 'lucide-react';

export const PracticeProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Asosiy bilimlarni o‘rganasiz',
      desc: 'Logistika atamalari, hujjatlar (CMR, TIR, Rate Con) va tashish tamoyillarining fundamental asoslarini o‘zlashtirasiz.',
      icon: BookOpen,
      accent: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
    },
    {
      num: '02',
      title: 'Ish uchun kerakli vositalarni o‘zlashtirasiz',
      desc: 'Maxsus dispatch tizimlari, yuk topish botlari, Telegram kanallar va professional dasturlarda ishlashni o‘rganasiz.',
      icon: Wrench,
      accent: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10'
    },
    {
      num: '03',
      title: 'Real jarayonlar bilan ishlaysiz',
      desc: 'Haqiqiy buyurtmalar, real yuklar, tashuvchilar va brokerlar bilan muzokara simulyatsiyalarida ishtirok etasiz.',
      icon: RefreshCw,
      accent: 'border-sky-500/40 text-sky-400 bg-sky-500/10'
    },
    {
      num: '04',
      title: 'Mustaqil ishlashga tayyorlanasiz',
      desc: 'Amaliyot yakunida logistika operatsiyalarini 0 dan boshlab mustaqil yuritish va daromad olishga to‘liq tayyor bo‘lasiz.',
      icon: Briefcase,
      accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
            AMALIY BOSQICHLAR
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kurs faqat dars bilan tugamaydi
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Logimax’da maqsad sizga faqat logistika terminlarini o‘rgatish emas. Kurs davomida real ish jarayoniga yaqin muhitda ishlash, kerakli platformalar bilan tanishish va amaliy tajriba olishga e’tibor beriladi.
          </p>
        </div>

        {/* 4 Step Timeline Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                      QADAM {step.num}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${step.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                  <span>Bosqich {index + 1}/4</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
