import React from 'react';
import { studentResults } from '@/data/studentResultsData';
import { UserCheck, Quote, Award, Sparkles } from 'lucide-react';

export const StudentResults: React.FC = () => {
  return (
    <section id="natijalar" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            <Award className="w-3.5 h-3.5" />
            <span>NATIJALAR VA AMALIY TAJRIBA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Logimax o‘quvchilarining real natijalari
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Kursni tugatib, logistika sohasida natija qilayotgan o‘quvchilarimiz.
          </p>
        </div>

        {/* 3 Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentResults.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-red-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Header: Avatar, Name & Course */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-bold text-base shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-xs font-bold text-red-600">
                      {item.courseName}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{item.statusBadge}</span>
                </div>

                {/* Achievement Summary */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Amaliy natija:
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.achievement}
                  </p>
                </div>

                {/* Testimonial Quote */}
                <div className="relative pl-4 border-l-2 border-red-500 italic text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <Quote className="w-3.5 h-3.5 text-red-400 mb-1 opacity-70" />
                  &ldquo;{item.testimonial}&rdquo;
                </div>
              </div>

              {/* Note about real placeholder */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span>{item.isPlaceholderNote}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
