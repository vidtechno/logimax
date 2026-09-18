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
          ? 'bg-gradient-to-b from-blue-950/40 via-slate-900/90 to-slate-950 border-2 border-blue-500/50 shadow-2xl shadow-blue-900/20 hover:border-blue-400'
          : 'bg-slate-900/60 backdrop-blur-md border border-slate-800/90 hover:border-slate-700 shadow-xl shadow-slate-950/50'
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isExpress
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
            }`}
          >
            {isExpress ? (
              <>
                <Zap className="w-3.5 h-3.5" />
                {course.badge || 'INTENSIV'}
              </>
            ) : (
              'STANDARD'
            )}
          </span>

          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {course.duration}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
          {course.title}
        </h3>

        {/* Schedule & Timing Info */}
        <div className="flex flex-wrap gap-2.5 mb-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>{course.schedule}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Davomiyligi: {course.duration}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-800 mb-6" />

        {/* Theory Block */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            {course.theoryDuration}
          </h4>
          <ul className="space-y-2">
            {course.theoryTopics.map((topic, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Block */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {course.practiceDuration}
          </h4>
          <ul className="space-y-2">
            {course.practicePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-800/80">
        <Button
          variant={isExpress ? 'primary' : 'secondary'}
          size="lg"
          onClick={handleApply}
          className="w-full flex items-center justify-center gap-2 group"
        >
          <span>{course.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
