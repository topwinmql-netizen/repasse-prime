export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatArea(value: number): string {
  return `${value}m²`;
}

export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function generateWhatsAppLink(phone: string, message: string): string {
  const formattedPhone = formatPhoneForWhatsApp(phone);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const BROKER_PHONE = '5583996776094';
export const BROKER_NAME = 'Edvan Luiz';
export const BROKER_CRECI = 'CRECI PB | 1821 F';
export const BROKER_INSTAGRAM = '@edvan8888';
