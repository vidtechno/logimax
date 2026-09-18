'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Kurslar', href: '#kurslar' },
    { label: 'Natijalar', href: '#natijalar' },
    { label: 'Biz haqimizda', href: '#biz-haqimizda' },
    { label: 'Hamkorlar', href: '#hamkorlar' },
    { label: 'Savollar', href: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    setIsMobileMenuOpen(false);
    const formEl = document.getElementById('ariza');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Real Image */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Logimax Bosh Sahifa"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-50 border border-red-100 p-1 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Logimax Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
                LOGIMAX
                <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-red-600 -mt-0.5">
                Logistika Akademiyasi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-white rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={handleCtaClick}
              className="gap-1.5 font-bold shadow-md shadow-red-600/20"
            >
              <span>Kursga yozilish</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-red-600 focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] sm:top-[73px] bg-white border-b border-slate-200 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="py-2.5 text-base font-semibold text-slate-800 hover:text-red-600 border-b border-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 font-bold shadow-lg shadow-red-600/20"
              >
                <span>Kursga yozilish</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
