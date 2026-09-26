'use client';

import React, { useState, useEffect } from 'react';
import { CourseType, LeadFormData } from '@/types';
import { formatUzbekPhone, isValidUzbekPhone } from '@/lib/phoneMask';
import { submitLead } from '@/lib/leadService';
import { Button } from '@/components/ui/Button';
import { SuccessModal } from '@/components/ui/SuccessModal';
import { User, Phone, BookOpen, CheckCircle2, ShieldAlert, Sparkles, Send } from 'lucide-react';

interface LeadFormProps {
  selectedCourse?: CourseType;
  onCourseChange?: (course: CourseType) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  selectedCourse = 'undecided',
  onCourseChange
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '+998 ',
    course: selectedCourse
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Synchronize when parent passes a new selected course
  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, name: value }));
    if (errors.name && value.trim().length >= 2) {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUzbekPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone && isValidUzbekPhone(formatted)) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const course = e.target.value as CourseType;
    setFormData((prev) => ({ ...prev, course }));
    if (onCourseChange) {
      onCourseChange(course);
    }
  };

  const validate = (): boolean => {
    const newErrors: { name?: string; phone?: string } = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = 'Iltimos, ismingizni to‘liq kiriting (kamida 2 ta harf).';
    }

    if (!isValidUzbekPhone(formData.phone)) {
      newErrors.phone = 'Telefon raqamingizni to‘liq formatda kiriting: +998 XX XXX XX XX';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    try {
      const response = await submitLead(formData);
      if (response.success) {
        setIsSuccess(true);
        setSuccessMessage(response.message);
        setShowSuccessModal(true);
      }
    } catch (err) {
      console.error('Lead submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setShowSuccessModal(false);
    setFormData({
      name: '',
      phone: '+998 ',
      course: 'undecided'
    });
    setErrors({});
  };

  return (
    <section id="ariza" className="py-20 sm:py-28 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
      {/* Success Modal Window after form submission */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message={successMessage}
      />

      {/* Background Accent Gradients in Red */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Form Container Card in Pure White with Red Accent Border */}
        <div className="rounded-3xl p-7 sm:p-12 bg-white border-2 border-red-500/30 shadow-2xl shadow-red-500/10">
          
          {/* Section Header Inside Form Card */}
          <div className="text-center space-y-3 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>BEPUL KONSULTATSIYA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Qaysi logistika yo‘nalishi sizga mosligini bilmayapsizmi?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Ma’lumotlaringizni qoldiring. Logimax mutaxassisi siz bilan bog‘lanib, kurslar bo‘yicha batafsil ma’lumot beradi.
            </p>
          </div>

          {/* Success State View */}
          {isSuccess ? (
            <div className="text-center py-10 sm:py-14 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Rahmat! Arizangiz qabul qilindi.
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed font-medium">
                  {successMessage || 'Tez orada siz bilan bog‘lanamiz.'}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button variant="primary" size="md" onClick={() => setShowSuccessModal(true)}>
                  Batafsil ma’lumot oynasini ochish
                </Button>
                <Button variant="outline" size="md" onClick={handleReset}>
                  Yana boshqa ariza yuborish
                </Button>
              </div>
            </div>
          ) : (
            /* Lead Generation Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Field 1: Ism */}
              <div className="space-y-2 text-left">
                <label
                  htmlFor="lead-name"
                  className="block text-xs sm:text-sm font-bold text-slate-800"
                >
                  Ismingiz <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Ismingizni kiriting"
                    autoComplete="name"
                    className={`w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-slate-50 border ${
                      errors.name
                        ? 'border-red-500 text-red-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-slate-300 text-slate-900 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/20'
                    } placeholder-slate-400 text-base outline-none transition-all shadow-xs`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-600 flex items-center gap-1.5 pt-1 font-semibold">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Telefon raqami */}
              <div className="space-y-2 text-left">
                <label
                  htmlFor="lead-phone"
                  className="block text-xs sm:text-sm font-bold text-slate-800"
                >
                  Telefon raqamingiz <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="+998 90 123 45 67"
                    className={`w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-slate-50 border ${
                      errors.phone
                        ? 'border-red-500 text-red-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-slate-300 text-slate-900 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/20'
                    } placeholder-slate-400 text-base font-mono outline-none transition-all shadow-xs`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-600 flex items-center gap-1.5 pt-1 font-semibold">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Field 3: Kurs yo‘nalishi Dropdown */}
              <div className="space-y-2 text-left">
                <label
                  htmlFor="lead-course"
                  className="block text-xs sm:text-sm font-bold text-slate-800"
                >
                  Kurs yo‘nalishi
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <select
                    id="lead-course"
                    name="course"
                    value={formData.course}
                    onChange={handleCourseChange}
                    className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-base outline-none focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/20 transition-all shadow-xs appearance-none cursor-pointer font-medium"
                  >
                    <option value="xalqaro-standard">Xalqaro logistika — Standard (1.5 oy)</option>
                    <option value="xalqaro-express">Xalqaro logistika — Express (Intensiv ~1 oy)</option>
                    <option value="amerika-standard">Amerika logistikasi — Standard (2 oy)</option>
                    <option value="amerika-express">Amerika logistikasi — Express (Intensiv 1.5 oy)</option>
                    <option value="undecided">Hali tanlamadim</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  className="w-full min-h-[52px] sm:min-h-[56px] text-base sm:text-lg font-bold flex items-center justify-center gap-2 shadow-2xl shadow-red-600/35"
                >
                  <Send className="w-5 h-5" />
                  <span>Bepul konsultatsiya olish</span>
                </Button>
              </div>

              {/* Privacy Disclaimer */}
              <p className="text-[11px] sm:text-xs text-slate-500 text-center leading-relaxed">
                Ma’lumot yuborish orqali siz shaxsiy ma’lumotlarni qayta ishlashga rozilik bildirasiz.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
