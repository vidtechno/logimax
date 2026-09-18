import React from 'react';
import { Layers, Compass, Zap, Building, Laptop, Sparkles } from 'lucide-react';

export const WhyLogimax: React.FC = () => {
  const advantages = [
    {
      num: '01',
      title: 'Nazariya + amaliyot',
      desc: 'Faqat dars emas, real ish jarayonlarini ham o‘rganasiz.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Ikki xil yo‘nalish',
      desc: 'Xalqaro logistika yoki Amerika logistikasidan o‘zingizga mosini tanlaysiz.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Standard va Express',
      desc: 'O‘qish tezligingiz va vaqtingizga mos format mavjud.',
      icon: Zap,
    },
    {
      num: '04',
      title: 'Real kompaniyada amaliyot',
      desc: 'Amerika logistikasida real kompaniya muhitida tajriba olish imkoniyati.',
      icon: Building,
    },
    {
      num: '05',
      title: 'Ish uchun kerakli instrumentlar',
      desc: 'Botlar, kanallar, platformalar va ish jarayonida kerak bo‘ladigan vositalar bilan tanishasiz.',
      icon: Laptop,
    },
    {
      num: '06',
      title: '0 dan boshlash mumkin',
      desc: 'Logistika bo‘yicha oldindan tajriba bo‘lishi shart emas.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            USTUNLIKLAR
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Nega Logimax?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            O‘quvchilarimizga zamonaviy bilim, qulay dars jadvallari va professional amaliyot muhitini taqdim etamiz.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative rounded-2xl p-6 sm:p-7 bg-slate-50/70 border border-slate-200 hover:border-red-300 hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-red-700 px-2.5 py-1 rounded-lg bg-red-100 border border-red-200">
                      {item.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:text-red-600 group-hover:border-red-200 transition-colors shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
