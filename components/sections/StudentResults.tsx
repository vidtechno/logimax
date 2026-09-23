'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { studentResults } from '@/data/studentResultsData';
import { 
  Award, 
  Sparkles, 
  Quote, 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  Heart,
  ArrowRight,
  X,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const StudentResults: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'xalqaro' | 'amerika'>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; name: string } | null>(null);

  const filteredResults = studentResults.filter((student) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'xalqaro') return student.direction === 'xalqaro' || student.direction === 'umumiy';
    if (activeTab === 'amerika') return student.direction === 'amerika' || student.direction === 'umumiy';
    return true;
  });

  const handleCtaClick = () => {
    const formEl = document.getElementById('ariza');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="natijalar" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            <Award className="w-3.5 h-3.5" />
            <span>NATIJALAR VA REAL TAJRIBA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Logimax o‘quvchilarining real natijalari
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Quruq nazariya emas, real amaliyot samarasi. O‘quvchilarimiz o‘qish jarayonining o‘zidayoq yuk yopib, 
            kurs to‘lovini qoplamoqda va yetakchi kompaniyalarda ish boshlamoqda.
          </p>
        </div>

        {/* Pride Message Banner */}
        <div className="mb-10 sm:mb-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-red-950 text-white p-6 sm:p-8 shadow-xl border border-red-900/40 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <Heart className="w-7 h-7 text-red-500 fill-red-500/30" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">
                  LogiMax Akademiyasi E’tirofi
                </span>
                <p className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight">
                  &ldquo;Biz LogiMax akademiyasi sizdek iqtidorli va intiluvchan o‘quvchilarimiz borligidan faxrlanamiz!&rdquo;
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onClick={handleCtaClick}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-red-600/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Safimizga qo‘shiling</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Barcha natijalar ({studentResults.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('xalqaro')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'xalqaro'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Xalqaro logistika
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('amerika')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'amerika'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            AQSH logistikasi
          </button>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs"
            >
              {/* Photo & Key Metric Banner */}
              <div className="relative w-full bg-slate-100 overflow-hidden">
                <div 
                  className="relative w-full aspect-[4/3] cursor-pointer overflow-hidden"
                  onClick={() => item.image && setSelectedImage({ src: item.image, name: item.name })}
                  title="Rasmni to‘liq ko‘rish"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500 font-bold">
                      {item.name}
                    </div>
                  )}

                  {/* Gradient Overlay for Text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Expand Image Button on Hover */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.image) setSelectedImage({ src: item.image, name: item.name });
                    }}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-black/40 hover:bg-black/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Rasmni kattalashtirish"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Top-left Metric Badge */}
                  {item.metric && (
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white backdrop-blur-md text-[11px] font-bold shadow-md">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.metric}</span>
                    </div>
                  )}

                  {/* Bottom Info inside image overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg font-black tracking-tight drop-shadow-sm flex items-center gap-2">
                      <span>{item.name}</span>
                      {item.age && (
                        <span className="text-xs px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-white font-medium">
                          {item.age} yosh
                        </span>
                      )}
                    </h3>
                    {item.company && (
                      <p className="text-xs text-red-300 font-semibold flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.company}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  {/* Status & Direction Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span>{item.statusBadge}</span>
                    </span>
                    <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-semibold">
                      {item.courseName}
                    </span>
                  </div>

                  {/* Achievement Detail */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Erishilgan natija:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {item.achievement}
                    </p>
                  </div>

                  {/* Testimonial Quote */}
                  {item.testimonial && (
                    <div className="relative pl-3.5 border-l-2 border-red-500 italic text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      <Quote className="w-3.5 h-3.5 text-red-400 mb-1 opacity-70" />
                      &ldquo;{item.testimonial}&rdquo;
                    </div>
                  )}
                </div>

                {/* Footer Tag */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Tasdiqlangan natija
                  </span>
                  <span className="font-semibold text-red-600">
                    Logimax Academy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
            Siz ham logistika sohasida o‘z muvaffaqiyat tarixingizni yozing
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Logimax mutaxassislari sizga noldan boshlab yuk topish, brokerlar va haydovchilar bilan ishlash, 
            hamda o‘qish davomidayoq daromadga chiqish yo‘lini o‘rgatadi.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={handleCtaClick}
            className="shadow-lg shadow-red-600/20 font-bold"
          >
            <span>Bepul konsultatsiya va darsga yozilish</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

      </div>

      {/* Lightbox / Modal for Student Photo */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-2 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 text-white border-b border-slate-800">
              <span className="font-bold text-sm">{selectedImage.name} — Logimax O‘quvchisi</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
