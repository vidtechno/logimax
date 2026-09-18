import { StudentResult } from '@/types';

// DIQQAT: Mazkur ma'lumotlar dizayn va struktura uchun tayyorlangan rasmiy placeholderlardir.
// Soxta raqamlar, yolg'on foizlar yoki asossiz daromad va'dalari ishlatilmagan.
// Real bitiruvchilar fotosuratlari va natijalari kelgach, ushbu ro'yxat yangilanadi.

export const studentResults: StudentResult[] = [
  {
    id: 'res-1',
    name: 'Logimax Bitiruvchisi',
    courseName: 'Xalqaro logistika — Standard',
    statusBadge: 'Amaliyot muvaffaqiyatli yakunlangan',
    achievement: 'Xalqaro tovar-transport hujjatlari (CMR, TIR Carnet) bilan mustaqil ishlash va yuk yo‘nalishlarini tashkil qilish ko‘nikmasiga ega bo‘ldi.',
    testimonial: 'Darslardagi 3 haftalik amaliyotda shaxsiy ish stoli va real yuk platformalarida mustaqil ishlashni o‘rgandim. Nazariya bilan cheklanib qolmaslik eng katta yordam bo‘ldi.',
    avatarPlaceholder: 'LB',
    isPlaceholderNote: 'Haqiqiy o‘quvchi fotosurati va tasdiqlangan keysi yaqin orada joylanadi'
  },
  {
    id: 'res-2',
    name: 'Logimax Bitiruvchisi',
    courseName: 'Amerika logistikasi — Express',
    statusBadge: 'Logistika kompaniyasida amaliyot',
    achievement: 'AQSH trucking tizimida load boardlar (DAT) orqali yuk qidirish va brokerlar bilan muzokaralar olib borish bosqichini o‘zlashtirdi.',
    testimonial: 'Dispatching va Safety bo‘limlari bo‘yicha to‘liq amaliy tajriba oldim. Amerika logistika kompaniyasidagi amaliyot davomida jarayonlarning ichki tuzilishini to‘liq tushundim.',
    avatarPlaceholder: 'LB',
    isPlaceholderNote: 'Haqiqiy o‘quvchi fotosurati va tasdiqlangan keysi yaqin orada joylanadi'
  },
  {
    id: 'res-3',
    name: 'Logimax Bitiruvchisi',
    courseName: 'Xalqaro logistika — Express',
    statusBadge: 'Mustaqil amaliy faoliyat',
    achievement: 'Fraxt hisoblash, xavfli yuklar (ADR) xujjatlari va yuk tashuvchilar bilan shartnomalar tuzish jarayonini amalda qo‘llay boshladi.',
    testimonial: 'Intensiv dars jadvali va doimiy amaliy topshiriqlar sababli 1 oy ichida xalqaro yuk tashishning butun zanjirini o‘zlashtirishga erishdim.',
    avatarPlaceholder: 'LB',
    isPlaceholderNote: 'Haqiqiy o‘quvchi fotosurati va tasdiqlangan keysi yaqin orada joylanadi'
  }
];
