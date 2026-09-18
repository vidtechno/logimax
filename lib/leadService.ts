import { LeadFormData } from '@/types';

export interface SubmitLeadResponse {
  success: boolean;
  message: string;
  leadId?: string;
}

/**
 * Lead yuborish xizmati.
 * Hozirgi bosqichda brauzerda simulyatsiya qilinadi va success state qaytaradi.
 *
 * amoCRM integratsiyasi uchun:
 * Quyidagi kod ichida fetch('/api/lead' yoki amoCRM webhook URL) orqali
 * POST so'rovi yuborish kifoya.
 */
export async function submitLead(payload: LeadFormData): Promise<SubmitLeadResponse> {
  // Console logging for verification during testing and development
  console.log('[LOGIMAX Lead Submission]:', {
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    course: payload.course,
    timestamp: new Date().toISOString(),
    source: 'landing_meta_ads'
  });

  // Sun'iy tarmoq kechikishini simulyatsiya qilish (UX loading indikatori uchun)
  await new Promise((resolve) => setTimeout(resolve, 750));

  /*
   * KELAJAKDA amoCRM / TELEGRAM WEBHOOK ULASH NAMUNASI:
   * 
   * const res = await fetch('https://your-crm-webhook.com/endpoint', {
   *   method: 'POST',
   *   headers: { 'Content-Type': 'application/json' },
   *   body: JSON.stringify({
   *     name: payload.name,
   *     phone: payload.phone,
   *     course: payload.course,
   *     custom_fields: { pipeline_id: 12345 }
   *   })
   * });
   * if (!res.ok) throw new Error('CRM server error');
   */

  return {
    success: true,
    message: 'Rahmat! Arizangiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.',
    leadId: 'LM-' + Math.floor(100000 + Math.random() * 900000)
  };
}
