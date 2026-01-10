import { ArrowRight, Star, Shield, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PropertyCard } from './PropertyCard';
import { Property } from '@/types/property';

interface RepasseSectionProps {
  properties: Property[];
}

export function RepasseSection({ properties }: RepasseSectionProps) {
  const repasseProperties = properties
    .filter(p => p.purpose === 'repasse' && !p.sold)
    .slice(0, 3);

  return (
    <section id="repasse" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="badge-repasse inline-block mb-4">
            Destaque
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Imóveis de Repasse em
            <span className="text-gradient-gold block mt-2">João Pessoa</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oportunidades exclusivas com condições especiais. Economize na compra do seu imóvel com repasses selecionados.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Economia Real</h3>
            <p className="text-sm text-muted-foreground">
              Imóveis abaixo do valor de mercado com condições de pagamento facilitadas
            </p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Segurança Total</h3>
            <p className="text-sm text-muted-foreground">
              Documentação verificada e acompanhamento completo do processo
            </p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
              <Star className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Curadoria Especial</h3>
            <p className="text-sm text-muted-foreground">
              Imóveis selecionados nos melhores bairros de João Pessoa
            </p>
          </div>
        </div>

        {/* Properties Grid */}
        {repasseProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {repasseProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/#imoveis"
                className="btn-gold inline-flex"
              >
                Ver Todos os Repasses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-card rounded-2xl shadow-soft">
            <p className="text-muted-foreground">
              Novos imóveis de repasse em breve. Entre em contato para ser avisado!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
