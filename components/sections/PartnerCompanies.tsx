import React from 'react';
import { partnerCompanies } from '@/data/partnersData';
import { Shield, Building2, ExternalLink, CheckCircle } from 'lucide-react';

export const PartnerCompanies: React.FC = () => {
  return (
    <section id="hamkorlar" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-xs font-bold text-red-400">
            <Shield className="w-3.5 h-3.5" />
            <span>RASMIY HAMKORLARIMIZ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Biz bilan hamkorlik qilayotgan nufuzli kompaniyalar
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            O‘quvchilarimiz real amaliyot o‘tashi, stajirovka qilishi va ishga joylashishi uchun 
            AQSH hamda xalqaro bozorlarda faoliyat yurituvchi logistika kompaniyalari bilan yaqin hamkorlikdamiz.
          </p>
        </div>

        {/* 4 Corporate Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {partnerCompanies.map((partner) => (
            <div
              key={partner.id}
              className="p-6 rounded-3xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-700/60 border border-slate-600/60 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-700/80 text-slate-300">
                    Partner
                  </span>
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-1.5 group-hover:text-red-400 transition-colors">
                  {partner.name}
                </h3>

                {/* Region / Category */}
                <p className="text-xs font-semibold text-red-400 mb-3">
                  {partner.country}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              {/* Status pill */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Amaliyot & Ish o‘rinlari</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
