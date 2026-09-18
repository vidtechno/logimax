'use client';

import React from 'react';
import { internationalCourses } from '@/data/coursesData';
import { CourseCard } from '@/components/ui/CourseCard';
import { CourseType } from '@/types';
import { Globe2 } from 'lucide-react';

interface InternationalCoursesProps {
  onSelectCourse?: (courseId: CourseType) => void;
}

export const InternationalCourses: React.FC<InternationalCoursesProps> = ({ onSelectCourse }) => {
  return (
    <section id="xalqaro-logistika" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
            <Globe2 className="w-3.5 h-3.5" />
            <span>XALQARO YUK TASHISH DASTURI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Xalqaro logistika
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Boshlang‘ich bilimdan real yuklar bilan ishlashgacha. O‘qish tezligi va vaqtingizga mos formatni tanlang.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {internationalCourses.map((course) => (
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
