# LOGIMAX.UZ — Logistika Akademiyasi Landing Page

LOGIMAX.UZ logistika akademiyasi uchun zamonaviy, premium va yuqori konversiyali landing page. Meta Ads va Instagram target reklamalaridan keladigan auditoriyani qiziqtirish, soha bo‘yicha ishonch uyg‘otish va ariza yig‘ishga mo‘ljallangan.

---

## ⚡ Asosiy Xususiyatlar

- **Framework**: Next.js 16 (App Router, Server Components + tanlab olingan Client Components)
- **Til**: TypeScript (qat’iy tiplashtirilgan arxitektura)
- **Styling**: Tailwind CSS v4 (To‘q ko‘k / slate `#090E17`, logistika ko‘ki, nozik grid tekstura va micro-interactions)
- **Tipografiya**: Plus Jakarta Sans (`next/font/google`, avtomatik woff2 preload, 0 CLS)
- **Ikonkalar**: `lucide-react` + engil SVG vektorlar (hech qanday og‘ir tashqi kutubxonalarsiz)
- **Mobile-first**: 52px sensorli tugmalar, telefon klaviaturasi moslashuvi, ekranni scroll qilganda chiquvchi mobil Sticky CTA
- **Lead integratsiyasi**: O‘zbekiston telefon raqami formati (`+998 XX XXX XX XX`), real-time validatsiya va amoCRM / Telegram bot webhook'iga ulanishga tayyor `submitLead` moduli.

---

## 📂 Sahifa Tarkibi (13 ta bo‘lim)

1. **Header**: Minimal sticky navigatsiya, professional matnli logo, desktop/mobil menyu.
2. **Hero**: H1 sarlavha, 3 ta benefit, 2 ta asosiy CTA, SVG asosidagi live dispatch va marshrut telemetriya paneli, trust bar.
3. **Logistika nima?**: 4 ta premium karta (Tashish, Saqlash, Ta’minot, Xarajatlarni optimallashtirish) + amaliyotga ulovchi matn.
4. **Ikkita asosiy yo‘nalish**: Xalqaro logistika va Amerika logistikasi kartalari.
5. **Xalqaro logistika kurslari**: Standard (1.5 oy) va Express (1 oy, `INTENSIV`) dasturlari (CMR, TIR, Fraxt, ADR va 3 haftalik amaliyot).
6. **Amerika logistikasi**: 4 ta department (Fleet Management, Safety, Accounting, Dispatching) hamda Standard & Express kurslari.
7. **Nazariya emas — real amaliyot**: 4 bosqichli amaliy jarayon timeline'i.
8. **Real o‘quvchilar natijalari**: Professional tayyorlangan modulli natijalar kartalari.
9. **Hamkor kompaniyalar**: Minimal premium logo wall paneli.
10. **Nega Logimax?**: 6 ta asosiy afzallik.
11. **Lead Form**: Ism validatsiyasi, +998 maska, kurs dropdown'i, loading spinner va success state.
12. **FAQ**: 6 ta ko‘p beriladigan savol-javobli akkordeon.
13. **Final CTA & Footer**: Yakuniy chaqiruv bloki, kontaktlar va copyright.

---

## 🚀 Ishga Tushirish

Loyihani klonlab olish:

```bash
git clone https://github.com/vidtechno/logimax.git
cd logimax
```

Bog‘liqliklarni o‘rnatish:

```bash
npm install
```

Dasturchi rejimida ishga tushirish:

```bash
npm run dev
```

Brauzerda oching: [http://localhost:3000](http://localhost:3000)

Production build yaratish:

```bash
npm run build
npm run start
```
