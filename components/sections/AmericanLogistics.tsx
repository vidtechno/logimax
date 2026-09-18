'use client';

import React from 'react';
import { americanCourses, americanDepartments } from '@/data/coursesData';
import { CourseCard } from '@/components/ui/CourseCard';
import { CourseType } from '@/types';
import { Truck, ShieldCheck, Calculator, Headphones, Flag } from 'lucide-react';

interface AmericanLogisticsProps {
  onSelectCourse?: (courseId: CourseType) => void;
}

export const AmericanLogistics: React.FC<AmericanLogisticsProps> = ({ onSelectCourse }) => {
  const getDeptIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-amber-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-sky-400" />;
      default:
        return <Truck className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="amerika-logistikasi" className="py-16 sm:py-24 bg-[#090D18] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-400">
            <Flag className="w-3.5 h-3.5" />
            <span>AQSH TRUCKING INDUSTRIYASI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Amerika logistikasi
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            AQSH trucking industriyasidagi asosiy departmentlarni o‘rganing va real kompaniyada amaliyot qiling.
          </p>
        </div>

        {/* 4 Departments Visual Cards */}
        <div className="mb-14">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            O‘rganiladigan 4 ta asosiy department:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {americanDepartments.map((dept) => (
              <div
                key={dept.id}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200"
              >
                <div className="p-2.5 rounded-xl bg-slate-800/70 w-fit mb-3.5">
                  {getDeptIcon(dept.iconName)}
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  {dept.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Course Cards (Standard & Express) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {americanCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={onSelectCourse}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
