import React from 'react';
import { Truck, Warehouse, PackageCheck, TrendingDown, ArrowRight } from 'lucide-react';

export const LogisticsIntro: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Tashish',
      desc: 'Tovarlarni eng samarali yo‘nalish orqali yetkazib berishni tashkil qilish.',
      icon: Truck,
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400'
    },
    {
      num: '02',
      title: 'Saqlash',
      desc: 'Mahsulot va yuklarning to‘g‘ri saqlanishini boshqarish.',
      icon: Warehouse,
      color: 'from-indigo-500/20 to-indigo-600/5',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400'
    },
    {
      num: '03',
      title: 'Ta’minot',
      desc: 'Kerakli mahsulot yoki xomashyoning o‘z vaqtida yetib kelishini ta’minlash.',
      icon: PackageCheck,
      color: 'from-sky-500/20 to-sky-600/5',
      borderColor: 'border-sky-500/30',
      iconColor: 'text-sky-400'
    },
    {
      num: '04',
      title: 'Xarajatlarni optimallashtirish',
      desc: 'Vaqt va xarajatni kamaytirgan holda samarali logistika tizimini qurish.',
      icon: TrendingDown,
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400'
    }
  ];

  return (
    <section id="biz-haqimizda" className="py-16 sm:py-24 bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-300">
            SOHAGA KIRISH
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Logistika — shunchaki yuk tashish emas
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Logistika — tovarlar, xizmatlar va ma’lumotlarning ishlab chiqaruvchidan iste’molchiga qadar yetib borish jarayonini boshqarish va optimallashtirish tizimi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className={`relative rounded-2xl p-6 bg-gradient-to-b ${card.color} bg-slate-900/60 border ${card.borderColor} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/50 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400 px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/40">
                      {card.num}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 ${card.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridging Copy */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/80 to-blue-950/40 border border-blue-500/30 text-center max-w-3xl mx-auto shadow-lg shadow-blue-950/30">
          <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed">
            <span className="font-bold text-blue-400">Logimax’da esa</span> siz bu jarayonlarni faqat nazariyada emas, amaliy topshiriqlar va real ish jarayonlari orqali o‘rganasiz.
          </p>
        </div>

      </div>
    </section>
  );
};
