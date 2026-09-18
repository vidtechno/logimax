/**
 * Uzbekistan phone number formatting utility
 * Format: +998 (XX) XXX-XX-XX or +998 XX XXX XX XX
 */

export function formatUzbekPhone(value: string): string {
  // Extract all numbers
  const digits = value.replace(/\D/g, '');
  
  // If user enters nothing, show empty or default prefix
  if (!digits) return '';

  // Ensure it starts with 998 if entered
  let normalizedDigits = digits;
  if (normalizedDigits.startsWith('998')) {
    normalizedDigits = normalizedDigits.slice(3);
  }

  // Max 9 digits for local number (e.g. 90 123 45 67)
  const local = normalizedDigits.slice(0, 9);

  let formatted = '+998';

  if (local.length > 0) {
    formatted += ' ' + local.slice(0, 2);
  }
  if (local.length > 2) {
    formatted += ' ' + local.slice(2, 5);
  }
  if (local.length > 5) {
    formatted += ' ' + local.slice(5, 7);
  }
  if (local.length > 7) {
    formatted += ' ' + local.slice(7, 9);
  }

  return formatted;
}

export function isValidUzbekPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  // Must have 998 + 9 digits = 12 digits in total
  return digits.length === 12 && digits.startsWith('998');
}
