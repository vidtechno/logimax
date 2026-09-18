import React from 'react';
import { BookOpen, Wrench, RefreshCw, Briefcase, ArrowRight } from 'lucide-react';

export const PracticeProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Asosiy bilimlarni o‘rganasiz',
      desc: 'Logistika atamalari, hujjatlar (CMR, TIR, Rate Con) va tashish tamoyillarining fundamental asoslarini o‘zlashtirasiz.',
      icon: BookOpen,
      accent: 'border-red-200 text-red-600 bg-red-50'
    },
    {
      num: '02',
      title: 'Ish uchun kerakli vositalarni o‘zlashtirasiz',
      desc: 'Maxsus dispatch tizimlari, yuk topish botlari, Telegram kanallar va professional dasturlarda ishlashni o‘rganasiz.',
      icon: Wrench,
      accent: 'border-red-200 text-red-600 bg-red-50'
    },
    {
      num: '03',
      title: 'Real jarayonlar bilan ishlaysiz',
      desc: 'Haqiqiy buyurtmalar, real yuklar, tashuvchilar va brokerlar bilan muzokara simulyatsiyalarida ishtirok etasiz.',
      icon: RefreshCw,
      accent: 'border-red-200 text-red-600 bg-red-50'
    },
    {
      num: '04',
      title: 'Mustaqil ishlashga tayyorlanasiz',
      desc: 'Amaliyot yakunida logistika operatsiyalarini 0 dan boshlab mustaqil yuritish va daromad olishga to‘liq tayyor bo‘lasiz.',
      icon: Briefcase,
      accent: 'border-red-200 text-red-600 bg-red-50'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            AMALIY BOSQICHLAR
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Kurs faqat dars bilan tugamaydi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
                className="relative rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-red-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800">
                      QADAM {step.num}
                    </span>
                    <div className={`p-2.5 rounded-xl border ${step.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-red-600 transition-colors">
                  <span className="font-semibold">Bosqich {index + 1}/4</span>
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
