export type CourseType = 
  | 'xalqaro-standard'
  | 'xalqaro-express'
  | 'amerika-standard'
  | 'amerika-express'
  | 'undecided';

export interface LeadFormData {
  name: string;
  phone: string;
  course: CourseType;
}

export interface CourseDetail {
  id: CourseType;
  direction: 'xalqaro' | 'amerika';
  tier: 'standard' | 'express';
  title: string;
  badge?: string;
  duration: string;
  schedule: string;
  theoryDuration: string;
  theoryTopics: string[];
  practiceDuration: string;
  practicePoints: string[];
  ctaText: string;
}

export interface DepartmentInfo {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StudentResult {
  id: string;
  name: string;
  courseName: string;
  achievement: string;
  testimonial?: string;
  avatarPlaceholder?: string;
  statusBadge: string;
  isPlaceholderNote?: string;
  image?: string;
  age?: number;
  company?: string;
  metric?: string;
  direction?: 'xalqaro' | 'amerika' | 'umumiy';
}

export interface PartnerCompany {
  id: string;
  name: string;
  country?: string;
  type: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
