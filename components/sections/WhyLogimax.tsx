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
    <section className="py-16 sm:py-24 bg-[#090E17] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-semibold text-blue-400">
            USTUNLIKLAR
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nega Logimax?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
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
                className="relative rounded-2xl p-6 sm:p-7 bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30">
                      {item.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 group-hover:text-blue-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
