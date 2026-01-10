import { Phone } from 'lucide-react';
import { BROKER_NAME, BROKER_PHONE, generateWhatsAppLink } from '@/utils/formatters';

interface WhatsAppButtonProps {
  propertyTitle?: string;
  className?: string;
}

export function WhatsAppButton({ propertyTitle, className = '' }: WhatsAppButtonProps) {
  const handleClick = () => {
    const message = propertyTitle
      ? `Olá ${BROKER_NAME}! Vi o imóvel "${propertyTitle}" no site e gostaria de mais informações.`
      : `Olá ${BROKER_NAME}! Vim pelo site e gostaria de mais informações sobre os imóveis disponíveis.`;
    
    window.open(generateWhatsAppLink(BROKER_PHONE, message), '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 btn-whatsapp animate-pulse-glow shadow-2xl ${className}`}
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">Falar com {BROKER_NAME}</span>
      <span className="sm:hidden">WhatsApp</span>
    </button>
  );
}
