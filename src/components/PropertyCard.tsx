import { Link } from 'react-router-dom';
import { Bed, Bath, Car, Maximize, MapPin } from 'lucide-react';
import { Property } from '@/types/property';
import { formatCurrency, formatArea, capitalizeFirst } from '@/utils/formatters';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const isRental = property.purpose === 'aluguel' || property.purpose === 'temporada';

  return (
    <Link 
      to={`/imovel/${property.id}`}
      className="property-card group block"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent z-10" />
        
        {property.coverImage ? (
          <img
            src={property.coverImage}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Sem imagem</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {property.purpose === 'repasse' && (
            <span className="badge-repasse">Repasse</span>
          )}
          {property.featured && property.purpose !== 'repasse' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground">
              Destaque
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 z-20">
          <span className="text-2xl font-bold text-white">
            {formatCurrency(property.price)}
            {isRental && <span className="text-sm font-normal">/mês</span>}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-2 text-primary text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span className="font-medium">{property.neighborhood}</span>
          <span className="text-muted-foreground">• {capitalizeFirst(property.type)}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
          {property.title}
        </h3>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Car className="w-4 h-4" />
            <span>{property.parkingSpots}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4" />
            <span>{formatArea(property.builtArea)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
