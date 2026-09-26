import { CourseDetail, DepartmentInfo } from '@/types';

export const internationalCourses: CourseDetail[] = [
  {
    id: 'xalqaro-standard',
    direction: 'xalqaro',
    tier: 'standard',
    title: 'Xalqaro Logistika — Standard',
    duration: '1.5 oy',
    schedule: 'Haftada 3 kun',
    theoryDuration: '3 hafta — Nazariya',
    theoryTopics: [
      'Logistika asoslari va xalqaro savdo',
      'Tashish turlari va transport vositalari',
      'Tashish usullari (multimodal, intermodal)',
      'CMR (Xalqaro tovar-transport yuk xati)',
      'TIR Carnet kitobchasi bilan ishlash',
      'Fraxt narxini hisoblash va stavkalar',
      'Taxograf va haydovchilar ish rejimi',
      'Xavfli yuklar klassifikatsiyasi (ADR)',
      'Xavfli yuklarni tashish uchun qo‘shimcha hujjatlar',
      'Fitosanitariya va veterinariya sertifikati'
    ],
    practiceDuration: '3 hafta — Amaliyot',
    practicePoints: [
      'Siz uchun shaxsiy online ish stoli tayyorlanadi',
      'Logistika ishida foydalaniladigan professional botlar',
      'Yuk topish uchun maxsus Telegram kanallar',
      'Kerakli ilovalar va platformalar bilan ishlash',
      'Real yuklar va buyurtmalar bilan ishlash tajribasi',
      'Buyurtma/yuk bilan qanday ishlash reglamenti',
      '0 dan boshlab daromad olish jarayoni va muzokaralar'
    ],
    ctaText: 'Standard kursga yozilish'
  },
  {
    id: 'xalqaro-express',
    direction: 'xalqaro',
    tier: 'express',
    title: 'Xalqaro Logistika — Express',
    badge: 'INTENSIV',
    duration: 'Taxminan 1 oy',
    schedule: 'Dushanbadan shanbagacha',
    theoryDuration: '9 kun — Intensiv nazariya',
    theoryTopics: [
      'Logistika asoslari va xalqaro marshrutlar',
      'Tashish turlari va zamonaviy transport',
      'Tashish usullari va tezkor yuk yetkazish',
      'CMR xalqaro yuk xujjatlari',
      'TIR Carnet tartib-qoidalari',
      'Fraxt stavkalari va tezkor hisob-kitob',
      'Taxograf qoidalari va monitoring',
      'Xavfli yuklar tartibi (ADR)',
      'Qo‘shimcha yuk hujjatlari va ruxsatnomalar',
      'Fitosanitariya va bojxona rasmiylashtiruvi'
    ],
    practiceDuration: '3 hafta — Amaliyot',
    practicePoints: [
      'Shaxsiy online ish stoli va instrumentlar',
      'Kerakli botlar va operativ kanallar tarmog‘i',
      'Maxsus logistika ilovalarida ishlash',
      'Real yuklar bilan amaliy mashg‘ulotlar',
      'Mijoz va tashuvchilar bilan bevosita ishlash',
      'Logistika ishini 0 dan boshlash strategiyasi'
    ],
    ctaText: 'Express kursga yozilish'
  }
];

export const americanDepartments: DepartmentInfo[] = [
  {
    id: 'dispatching',
    title: 'Dispatching',
    description: 'Online yuk bozoriga kirib, yukni tahlil qilish, truck va treylerga yaxshi narxda yuk berish va uni A dan B gacha kuzatish.',
    iconName: 'Headphones'
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    description: 'Truck va treyler turi bilan tanishib ishlash, driver bilan ishlash tartibi, texnik nosozlikni bartaraf etish.',
    iconName: 'Truck'
  },
  {
    id: 'safety',
    title: 'Safety',
    description: 'DOT / FMCSA / DMV tashkilotlari bilan ishlash tartibi: Kompaniya va driverni yo‘l qoidalari va hujjati bo‘yicha xavfsizligini ta’minlash.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'accounting',
    title: 'Accounting',
    description: 'Kompaniyadagi barcha moliyaviy jarayonni boshqarish. Hujjatlar bilan ishlash: Invoys, Rate confirmation, BOL, POD, Statement, Factoring ..... standard.',
    iconName: 'Calculator'
  }
];

export const americanCourses: CourseDetail[] = [
  {
    id: 'amerika-standard',
    direction: 'amerika',
    tier: 'standard',
    title: 'Amerika Logistikasi — Standard',
    duration: '2 oy',
    schedule: 'Haftada 3 kun',
    theoryDuration: '1 oy — Nazariya (4 ta department)',
    theoryTopics: [
      'Dispatching: Online yuk bozoriga kirib, yukni tahlil qilish, truck/treylerga yuk berish va A dan B gacha kuzatish',
      'Fleet Management: Truck va treyler turlari, driver bilan ishlash va texnik nosozlikni bartaraf etish',
      'Safety: DOT / FMCSA / DMV tashkilotlari bilan ishlash va yo‘l xavfsizligi hujjatlari',
      'Accounting: Invoys, Rate confirmation, BOL, POD, Statement, Factoring hamda moliyaviy nazorat'
    ],
    practiceDuration: '1 oy — Amaliyot',
    practicePoints: [
      'Real Amerika logistika kompaniyasi ichida amaliy mashg‘ulotlar',
      'AQSH brokerlari bilan jonli muzokara simulyatsiyasi',
      'Haqiqiy yuk harakatini kuzatish va dispatch operatsiyalari',
      'Kompaniya ichki dasturlari va tizimlari bilan ishlash ko‘nikmasi'
    ],
    ctaText: 'Standard kursga yozilish'
  },
  {
    id: 'amerika-express',
    direction: 'amerika',
    tier: 'express',
    title: 'Amerika Logistikasi — Express',
    badge: 'INTENSIV',
    duration: '1.5 oy',
    schedule: 'Dushanbadan shanbagacha',
    theoryDuration: '2 hafta — Intensiv nazariya',
    theoryTopics: [
      'Dispatching asoslari va tezkor yuk bron qilish',
      'Fleet Management va texnik nosozlikni bartaraf etish',
      'Safety talablari va shoshilinch vaziyatlar boshqaruvi',
      'Accounting: Birlamchi logistika moliyasi va hujjat aylanishi'
    ],
    practiceDuration: '1 oy — Amaliyot',
    practicePoints: [
      'Real Amerika logistika kompaniyasi ichida amaliy mashg‘ulotlar',
      'Tezlashtirilgan real keyslar va kundalik yuk oqimi bilan ishlash',
      'Brokerlar bilan telefon va email muloqotlari amaliyoti',
      'Mustaqil dispatching va operatsiyalarni boshlashga tayyorgarlik'
    ],
    ctaText: 'Express kursga yozilish'
  }
];
