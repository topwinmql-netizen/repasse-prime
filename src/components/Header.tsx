import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BROKER_NAME, BROKER_CRECI, BROKER_PHONE, generateWhatsAppLink } from '@/utils/formatters';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/#imoveis', label: 'Imóveis' },
  { href: '/#repasse', label: 'Repasse' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleWhatsAppClick = () => {
    const message = `Olá ${BROKER_NAME}! Vim pelo site e gostaria de mais informações sobre os imóveis disponíveis.`;
    window.open(generateWhatsAppLink(BROKER_PHONE, message), '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl font-bold text-foreground">
              {BROKER_NAME}
            </span>
            <span className="text-xs text-primary font-medium tracking-wider">
              {BROKER_CRECI}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://instagram.com/edvan8888"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Button
              onClick={handleWhatsAppClick}
              className="btn-whatsapp"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="btn-whatsapp mt-4"
              >
                <Phone className="w-4 h-4" />
                Falar no WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
