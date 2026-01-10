import { Award, Users, Clock, Heart, Phone } from 'lucide-react';
import { BROKER_NAME, BROKER_CRECI, BROKER_PHONE, generateWhatsAppLink } from '@/utils/formatters';

export function AboutSection() {
  const handleWhatsAppClick = () => {
    const message = `Olá ${BROKER_NAME}! Vim pelo site e gostaria de conversar sobre imóveis.`;
    window.open(generateWhatsAppLink(BROKER_PHONE, message), '_blank');
  };

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Sobre o Corretor
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Experiência e Confiança em Cada Negociação
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Com mais de 15 anos de experiência no mercado imobiliário de João Pessoa, 
              {BROKER_NAME} é especialista em imóveis de repasse, oferecendo as melhores 
              oportunidades para quem busca economia e qualidade.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Credenciado</h4>
                  <p className="text-sm text-muted-foreground">{BROKER_CRECI}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">+200 Vendas</h4>
                  <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">15+ Anos</h4>
                  <p className="text-sm text-muted-foreground">De experiência</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Dedicação</h4>
                  <p className="text-sm text-muted-foreground">Atendimento humano</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp"
            >
              <Phone className="w-5 h-5" />
              Falar com {BROKER_NAME}
            </button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden shadow-elevated">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="font-display text-5xl font-bold text-primary">EL</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {BROKER_NAME}
                  </h3>
                  <p className="text-primary font-medium">{BROKER_CRECI}</p>
                  <p className="text-muted-foreground mt-2">Corretor de Imóveis</p>
                  <p className="text-muted-foreground">João Pessoa - PB</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-elevated p-6 max-w-[200px]">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Transparência em todas as negociações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
