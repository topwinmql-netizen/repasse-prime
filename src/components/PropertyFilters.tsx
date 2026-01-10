import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { PropertyFilters as FiltersType, NEIGHBORHOODS, PROPERTY_TYPES, PROPERTY_PURPOSES } from '@/types/property';

interface PropertyFiltersProps {
  filters: FiltersType;
  onFiltersChange: (filters: FiltersType) => void;
}

export function PropertyFilters({ filters, onFiltersChange }: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (key: keyof FiltersType, value: any) => {
    onFiltersChange({ ...filters, [key]: value === 'all' ? undefined : value });
  };

  const clearFilters = () => {
    onFiltersChange({});
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== undefined);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Purpose */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Pretensão</label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => updateFilter('purpose', undefined)}
            className={`filter-chip ${!filters.purpose ? 'active' : ''}`}
          >
            Todos
          </button>
          {PROPERTY_PURPOSES.map((purpose) => (
            <button
              key={purpose.value}
              onClick={() => updateFilter('purpose', purpose.value)}
              className={`filter-chip ${filters.purpose === purpose.value ? 'active' : ''}`}
            >
              {purpose.label}
            </button>
          ))}
        </div>
      </div>

      {/* Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Tipo de Imóvel</label>
        <Select
          value={filters.type || 'all'}
          onValueChange={(value) => updateFilter('type', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os tipos</SelectItem>
            {PROPERTY_TYPES.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Neighborhood */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Bairro</label>
        <Select
          value={filters.neighborhood || 'all'}
          onValueChange={(value) => updateFilter('neighborhood', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o bairro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os bairros</SelectItem>
            {NEIGHBORHOODS.map((neighborhood) => (
              <SelectItem key={neighborhood} value={neighborhood}>
                {neighborhood}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Faixa de Preço</label>
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="number"
            placeholder="Mínimo"
            value={filters.minPrice || ''}
            onChange={(e) => updateFilter('minPrice', e.target.value ? Number(e.target.value) : undefined)}
          />
          <Input
            type="number"
            placeholder="Máximo"
            value={filters.maxPrice || ''}
            onChange={(e) => updateFilter('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Quartos</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => updateFilter('bedrooms', filters.bedrooms === num ? undefined : num)}
              className={`filter-chip min-w-[40px] ${filters.bedrooms === num ? 'active' : ''}`}
            >
              {num}+
            </button>
          ))}
        </div>
      </div>

      {/* Parking */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Vagas</label>
        <div className="flex gap-2">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => updateFilter('parkingSpots', filters.parkingSpots === num ? undefined : num)}
              className={`filter-chip min-w-[40px] ${filters.parkingSpots === num ? 'active' : ''}`}
            >
              {num}+
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
        >
          <X className="w-4 h-4 mr-2" />
          Limpar Filtros
        </Button>
      )}
    </div>
  );

  return (
    <div className="w-full">
      {/* Desktop Filters */}
      <div className="hidden lg:block bg-card rounded-2xl shadow-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-lg font-semibold">Filtrar Imóveis</h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-primary hover:underline"
            >
              Limpar
            </button>
          )}
        </div>
        <FilterContent />
      </div>

      {/* Mobile Filters */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtros
              {hasActiveFilters && (
                <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs">
                  {Object.values(filters).filter(v => v !== undefined).length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
            <SheetHeader>
              <SheetTitle className="font-display">Filtrar Imóveis</SheetTitle>
            </SheetHeader>
            <div className="mt-6 overflow-y-auto max-h-[calc(85vh-100px)]">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
