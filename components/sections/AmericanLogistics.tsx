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
        return <Truck className="w-5 h-5 text-red-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-amber-600" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-blue-600" />;
      default:
        return <Truck className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="amerika-logistikasi" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
            <Flag className="w-3.5 h-3.5 text-red-600" />
            <span>AQSH TRUCKING INDUSTRIYASI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Amerika logistikasi
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            AQSH trucking industriyasidagi asosiy departmentlarni o‘rganing va real kompaniyada amaliyot qiling.
          </p>
        </div>

        {/* 4 Departments Visual Cards */}
        <div className="mb-14">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 text-center mb-6">
            O‘rganiladigan 4 ta asosiy department:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {americanDepartments.map((dept) => (
              <div
                key={dept.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-300 hover:shadow-md transition-all duration-200"
              >
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 w-fit mb-3.5 shadow-xs">
                  {getDeptIcon(dept.iconName)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  {dept.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
