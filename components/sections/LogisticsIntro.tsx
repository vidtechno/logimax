import React from 'react';
import { Truck, Warehouse, PackageCheck, TrendingDown } from 'lucide-react';

export const LogisticsIntro: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Tashish',
      desc: 'Tovarlarni eng samarali yo‘nalish orqali yetkazib berishni tashkil qilish.',
      icon: Truck,
    },
    {
      num: '02',
      title: 'Saqlash',
      desc: 'Mahsulot va yuklarning to‘g‘ri saqlanishini boshqarish.',
      icon: Warehouse,
    },
    {
      num: '03',
      title: 'Ta’minot',
      desc: 'Kerakli mahsulot yoki xomashyoning o‘z vaqtida yetib kelishini ta’minlash.',
      icon: PackageCheck,
    },
    {
      num: '04',
      title: 'Xarajatlarni optimallashtirish',
      desc: 'Vaqt va xarajatni kamaytirgan holda samarali logistika tizimini qurish.',
      icon: TrendingDown,
    }
  ];

  return (
    <section id="biz-haqimizda" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            SOHAGA KIRISH
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Logistika — shunchaki yuk tashish emas
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
                className="relative rounded-2xl p-6 bg-white border border-slate-200/90 shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-700 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">
                      {card.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-red-50 border border-red-100 text-red-600">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridging Copy */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-red-50/70 border border-red-200 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
            <span className="font-bold text-red-600">Logimax’da esa</span> siz bu jarayonlarni faqat nazariyada emas, amaliy topshiriqlar va real ish jarayonlari orqali o‘rganasiz.
          </p>
        </div>

      </div>
    </section>
  );
};
