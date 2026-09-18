import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { LogisticsIntro } from '@/components/sections/LogisticsIntro';
import { CourseDirections } from '@/components/sections/CourseDirections';
import { InternationalCourses } from '@/components/sections/InternationalCourses';
import { AmericanLogistics } from '@/components/sections/AmericanLogistics';
import { PracticeProcess } from '@/components/sections/PracticeProcess';
import { StudentResults } from '@/components/sections/StudentResults';
import { PartnerCompanies } from '@/components/sections/PartnerCompanies';
import { WhyLogimax } from '@/components/sections/WhyLogimax';
import { LeadForm } from '@/components/sections/LeadForm';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-red-600 selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Logistika nima? */}
        <LogisticsIntro />

        {/* 3. Ikkita Asosiy Yo‘nalish */}
        <CourseDirections />

        {/* 4. Xalqaro Logistika Kurslari (Standard & Express) */}
        <InternationalCourses />

        {/* 5. Amerika Logistikasi (4 department + Standard & Express) */}
        <AmericanLogistics />

        {/* 6. Nazariya emas — Real amaliyot (4 qadamli jarayon) */}
        <PracticeProcess />

        {/* 7. Real O‘quvchilar Natijalari (Modular placeholders) */}
        <StudentResults />

        {/* 8. Hamkor Kompaniyalar (Minimal logo wall) */}
        <PartnerCompanies />

        {/* 9. Nega Logimax? (6 ta ustunlik) */}
        <WhyLogimax />

        {/* 10. Asosiy Lead Form (Konversiya bloki) */}
        <LeadForm />

        {/* 11. FAQ (Savollar va javoblar) */}
        <FAQ />

        {/* 12. Final CTA (Yakuniy harakatga chaqiruv) */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyCTA />
    </div>
  );
}
