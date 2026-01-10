import { useState } from 'react';
import { Search, MapPin, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BROKER_NAME, BROKER_CRECI } from '@/utils/formatters';

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    // Scroll to properties section
    document.getElementById('imoveis')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/80 to-secondary" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Especialista em Repasse • João Pessoa
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Encontre o Imóvel dos
          <span className="block text-gradient-gold mt-2">Seus Sonhos</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Imóveis de repasse em João Pessoa com condições exclusivas. 
          Atendimento personalizado e transparente com {BROKER_NAME}.
        </p>

        {/* Search Box */}
        <form 
          onSubmit={handleSearch}
          className="max-w-2xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por bairro, tipo de imóvel..."
              className="w-full pl-14 pr-36 py-5 rounded-full bg-card text-foreground placeholder:text-muted-foreground shadow-elevated focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <Button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 btn-gold rounded-full px-6"
            >
              Buscar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </form>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">200+</div>
            <div className="text-sm text-muted-foreground">Imóveis Vendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
