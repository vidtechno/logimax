import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Send, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none">
              <div className="relative w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Logimax Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  LOGIMAX
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-red-500 -mt-0.5">
                  Logistika Akademiyasi
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Xalqaro va Amerika logistikasi bo‘yicha nazariya va real amaliyotga asoslangan zamonaviy ta’lim akademiyasi.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Bo‘limlar
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#kurslar" className="hover:text-red-400 transition-colors">
                  Kurslar
                </a>
              </li>
              <li>
                <a href="#natijalar" className="hover:text-red-400 transition-colors">
                  O‘quvchilar natijalari
                </a>
              </li>
              <li>
                <a href="#biz-haqimizda" className="hover:text-red-400 transition-colors">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#hamkorlar" className="hover:text-red-400 transition-colors">
                  Hamkorlar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">
                  Ko‘p beriladigan savollar
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              O‘quv Yo‘nalishlari
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#xalqaro-logistika" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  <span>Xalqaro Logistika</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="#amerika-logistikasi" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  <span>Amerika Logistikasi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Dispatching & Fleet</span>
              </li>
              <li>
                <span className="text-slate-500">CMR / TIR Carnet</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Bog‘lanish
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:+998915471025" className="hover:text-white transition-colors">
                  +998 (91) 547-10-25
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:+998776402530" className="hover:text-white transition-colors">
                  +998 (77) 640-25-30
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a href="tel:+998935991126" className="hover:text-white transition-colors">
                  +998 (93) 599-11-26
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Send className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="https://t.me/logimax12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-sky-400 hover:underline"
                >
                  <span>@logimax12</span>
                  <span className="text-[11px] text-slate-500 font-normal">(Telegram kanalimiz)</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <svg
                  className="w-4 h-4 text-pink-400 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a
                  href="https://instagram.com/logimax.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @logimax.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Logimax.uz. Barcha huquqlar himoyalangan.</p>
          <p className="text-[11px] text-slate-600">
            Professional ta’lim va amaliy logistika markazi
          </p>
        </div>
      </div>
    </footer>
  );
};
