import { Phone, Instagram, MapPin, Mail } from 'lucide-react';
import { BROKER_NAME, BROKER_CRECI, BROKER_PHONE, BROKER_INSTAGRAM, generateWhatsAppLink } from '@/utils/formatters';

export function Footer() {
  const handleWhatsAppClick = () => {
    const message = `Olá ${BROKER_NAME}! Vim pelo site e gostaria de mais informações.`;
    window.open(generateWhatsAppLink(BROKER_PHONE, message), '_blank');
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">{BROKER_NAME}</h3>
            <p className="text-primary font-medium">{BROKER_CRECI}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialista em imóveis de repasse em João Pessoa. 
              Confiança e transparência em cada negociação.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#imoveis" className="text-muted-foreground hover:text-primary transition-colors">
                  Todos os Imóveis
                </a>
              </li>
              <li>
                <a href="/#repasse" className="text-muted-foreground hover:text-primary transition-colors">
                  Imóveis de Repasse
                </a>
              </li>
              <li>
                <a href="/#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre o Corretor
                </a>
              </li>
              <li>
                <a href="/#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                João Pessoa – PB
              </li>
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +55 83 99677-6094
                </button>
              </li>
              <li>
                <a 
                  href="https://instagram.com/edvan8888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                  {BROKER_INSTAGRAM}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Encontre seu imóvel</h4>
            <p className="text-muted-foreground text-sm">
              Fale diretamente comigo no WhatsApp e encontre o imóvel dos seus sonhos.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp w-full"
            >
              <Phone className="w-4 h-4" />
              Falar com {BROKER_NAME}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-muted/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {BROKER_NAME}. Todos os direitos reservados.</p>
            <p>{BROKER_CRECI} • João Pessoa, Paraíba</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
