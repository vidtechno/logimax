'use client';

import React from 'react';
import { CheckCircle2, X, Phone, Send, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title = 'Arizangiz qabul qilindi!',
  message = 'Murojaatingiz muvaffaqiyatli yuborildi. Logimax akademiyasi mutaxassisi tez orada siz bilan bog‘lanib, barcha savollaringizga javob beradi.'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 text-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-5">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
        </div>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Muvaffaqiyatli yuborildi</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {message}
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-3 text-left">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-red-600" />
            <span>Shoshilinch aloqa uchun:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="tel:+998776402530"
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-xs transition-all text-xs font-bold text-slate-900"
            >
              <div className="p-1.5 rounded-lg bg-red-50 text-red-600">
                <Phone className="w-4 h-4" />
              </div>
              <span>+998 (77) 640-25-30</span>
            </a>

            <a
              href="https://t.me/logimax12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xs transition-all text-xs font-bold text-sky-700"
            >
              <div className="p-1.5 rounded-lg bg-sky-50 text-sky-600">
                <Send className="w-4 h-4" />
              </div>
              <span>@logimax12</span>
            </a>
          </div>
        </div>

        {/* Close CTA */}
        <Button
          variant="primary"
          size="lg"
          onClick={onClose}
          className="w-full font-bold shadow-lg shadow-red-600/25"
        >
          <span>Tushunarli, yopish</span>
        </Button>
      </div>
    </div>
  );
};
