'use client';

import React from 'react';
import { CourseDetail, CourseType } from '@/types';
import { Clock, Calendar, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface CourseCardProps {
  course: CourseDetail;
  onSelectCourse?: (courseId: CourseType) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelectCourse }) => {
  const isExpress = course.tier === 'express';

  const handleApply = () => {
    if (onSelectCourse) {
      onSelectCourse(course.id);
    }
    const selectEl = document.getElementById('lead-course') as HTMLSelectElement | null;
    if (selectEl) {
      selectEl.value = course.id;
      selectEl.dispatchEvent(new Event('change', { bubbles: true }));
    }
    const formEl = document.getElementById('ariza');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        isExpress
          ? 'bg-gradient-to-b from-red-50/50 via-white to-white border-2 border-red-500 shadow-xl shadow-red-500/10 hover:border-red-600'
          : 'bg-white border border-slate-200 shadow-md shadow-slate-100 hover:border-slate-300 hover:shadow-lg'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isExpress
                ? 'bg-red-100 text-red-700 border border-red-200'
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {isExpress ? (
              <>
                <Zap className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                {course.badge || 'INTENSIV'}
              </>
            ) : (
              'STANDARD'
            )}
          </span>

          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {course.duration}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
          {course.title}
        </h3>

        {/* Schedule & Timing Info */}
        <div className="flex flex-wrap gap-2.5 mb-6 text-xs text-slate-700">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/80">
            <Calendar className="w-3.5 h-3.5 text-red-600" />
            <span className="font-medium">{course.schedule}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/80">
            <Clock className="w-3.5 h-3.5 text-red-600" />
            <span className="font-medium">Davomiyligi: {course.duration}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-200 mb-6" />

        {/* Theory Block */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500" />
            {course.theoryDuration}
          </h4>
          <ul className="space-y-2">
            {course.theoryTopics.map((topic, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Block */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-red-600 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            {course.practiceDuration}
          </h4>
          <ul className="space-y-2">
            {course.practicePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-200">
        <Button
          variant={isExpress ? 'primary' : 'secondary'}
          size="lg"
          onClick={handleApply}
          className={`w-full flex items-center justify-center gap-2 group font-bold ${
            !isExpress ? 'hover:border-red-500 hover:text-red-600' : ''
          }`}
        >
          <span>{course.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
