import { useState, useMemo } from 'react';
import { PropertyCard } from './PropertyCard';
import { PropertyFilters } from './PropertyFilters';
import { Property, PropertyFilters as FiltersType } from '@/types/property';

interface PropertiesSectionProps {
  properties: Property[];
}

export function PropertiesSection({ properties }: PropertiesSectionProps) {
  const [filters, setFilters] = useState<FiltersType>({});

  const filteredProperties = useMemo(() => {
    return properties
      .filter(p => !p.sold)
      .filter(p => {
        if (filters.purpose && p.purpose !== filters.purpose) return false;
        if (filters.type && p.type !== filters.type) return false;
        if (filters.neighborhood && p.neighborhood !== filters.neighborhood) return false;
        if (filters.minPrice && p.price < filters.minPrice) return false;
        if (filters.maxPrice && p.price > filters.maxPrice) return false;
        if (filters.bedrooms && p.bedrooms < filters.bedrooms) return false;
        if (filters.parkingSpots && p.parkingSpots < filters.parkingSpots) return false;
        return true;
      })
      .sort((a, b) => a.order - b.order);
  }, [properties, filters]);

  return (
    <section id="imoveis" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Imóveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção de imóveis em João Pessoa. Apartamentos, casas, coberturas e muito mais.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-28">
              <PropertyFilters filters={filters} onFiltersChange={setFilters} />
            </div>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{filteredProperties.length}</span>
                {' '}imóveis encontrados
              </p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <div 
                    key={property.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl shadow-soft">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Nenhum imóvel encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros para ver mais opções
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
