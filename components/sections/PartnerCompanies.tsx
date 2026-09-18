import React from 'react';
import { partnerCompanies } from '@/data/partnersData';
import { Building2, Shield } from 'lucide-react';

export const PartnerCompanies: React.FC = () => {
  return (
    <section id="hamkorlar" className="py-14 sm:py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-semibold text-slate-300">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>SANOAT HAMKORLARI</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            Biz bilan hamkorlik qilayotgan kompaniyalar
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            O‘quvchilarimiz amaliyot o‘tashi va soha talablarini doimiy o‘rganish uchun logistika kompaniyalari bilan aloqadamiz.
          </p>
        </div>

        {/* Minimal Premium Logo Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {partnerCompanies.map((partner) => (
            <div
              key={partner.id}
              className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 flex flex-col items-center justify-center text-center transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/40 mb-2.5 transition-colors">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-slate-200 tracking-tight leading-tight mb-1">
                {partner.name}
              </h3>
              <p className="text-[10px] text-slate-400">
                {partner.country}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
