import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  Maximize, 
  Phone,
  Shield,
  Building,
  Waves,
  Dumbbell,
  PartyPopper,
  Flame,
  TreePine,
  Users,
  Dog,
  ChefHat,
  Gamepad2,
  Share2
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { mockProperties } from '@/data/properties';
import { formatCurrency, formatArea, capitalizeFirst, BROKER_NAME, BROKER_PHONE, generateWhatsAppLink } from '@/utils/formatters';

const amenityIcons: Record<string, React.ComponentType<any>> = {
  piscina: Waves,
  academia: Dumbbell,
  salaoFestas: PartyPopper,
  churrasqueira: Flame,
  playground: Gamepad2,
  saunas: Flame,
  quadraEsportiva: Users,
  espacoGourmet: ChefHat,
  jardim: TreePine,
  petPlace: Dog,
};

const amenityLabels: Record<string, string> = {
  piscina: 'Piscina',
  academia: 'Academia',
  salaoFestas: 'Salão de Festas',
  churrasqueira: 'Churrasqueira',
  playground: 'Playground',
  saunas: 'Sauna',
  quadraEsportiva: 'Quadra Esportiva',
  espacoGourmet: 'Espaço Gourmet',
  jardim: 'Jardim',
  petPlace: 'Pet Place',
};

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">
              Imóvel não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O imóvel que você está procurando não existe ou foi removido.
            </p>
            <Link to="/" className="btn-gold inline-flex">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a listagem
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Olá ${BROKER_NAME}! Vi o imóvel "${property.title}" no site e gostaria de mais informações.`;
    window.open(generateWhatsAppLink(BROKER_PHONE, message), '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Confira este imóvel: ${property.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const isRental = property.purpose === 'aluguel' || property.purpose === 'temporada';
  const activeAmenities = Object.entries(property.amenities).filter(([_, value]) => value);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/#imoveis" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para imóveis
          </Link>
        </div>

        {/* Gallery */}
        <div className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              {property.coverImage ? (
                <img
                  src={property.coverImage}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <span className="text-muted-foreground">Imagem principal</span>
                </div>
              )}
            </div>
            {/* Secondary Images */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                    <span className="text-muted-foreground text-sm">Foto {index}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {property.purpose === 'repasse' && (
                    <span className="badge-repasse">Repasse</span>
                  )}
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {capitalizeFirst(property.type)}
                  </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {property.title}
                </h1>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{property.neighborhood}</span>
                  {property.address && (
                    <>
                      <span>•</span>
                      <span>{property.address}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card rounded-xl p-4 shadow-soft text-center">
                  <Bed className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{property.bedrooms}</div>
                  <div className="text-sm text-muted-foreground">Quartos</div>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-soft text-center">
                  <Bath className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{property.bathrooms}</div>
                  <div className="text-sm text-muted-foreground">Banheiros</div>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-soft text-center">
                  <Car className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{property.parkingSpots}</div>
                  <div className="text-sm text-muted-foreground">Vagas</div>
                </div>
                <div className="bg-card rounded-xl p-4 shadow-soft text-center">
                  <Maximize className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{property.builtArea}</div>
                  <div className="text-sm text-muted-foreground">m² úteis</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Descrição
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Details */}
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                  Detalhes do Imóvel
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Maximize className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Área Construída</div>
                      <div className="font-semibold">{formatArea(property.builtArea)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Maximize className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Área Total</div>
                      <div className="font-semibold">{formatArea(property.totalArea)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Building className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Salas</div>
                      <div className="font-semibold">{property.livingRooms}</div>
                    </div>
                  </div>
                  {property.hasPorter && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Portaria</div>
                        <div className="font-semibold">24 horas</div>
                      </div>
                    </div>
                  )}
                  {property.hasSecurity && (
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Shield className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Segurança</div>
                        <div className="font-semibold">Completa</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Amenities */}
              {activeAmenities.length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                    Área de Lazer
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {activeAmenities.map(([key]) => {
                      const Icon = amenityIcons[key] || Building;
                      const label = amenityLabels[key] || key;
                      return (
                        <div key={key} className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">{label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-card rounded-2xl shadow-elevated p-6 space-y-6">
                {/* Price */}
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Valor</div>
                  <div className="text-3xl font-bold text-primary">
                    {formatCurrency(property.price)}
                    {isRental && <span className="text-lg font-normal text-muted-foreground">/mês</span>}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="btn-whatsapp w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    Falar com {BROKER_NAME}
                  </button>
                  <Button
                    variant="outline"
                    onClick={handleShare}
                    className="w-full"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>

                {/* Broker Info */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-primary">EL</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{BROKER_NAME}</div>
                      <div className="text-sm text-primary">CRECI PB | 1821 F</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton propertyTitle={property.title} />
    </div>
  );
}
