export type PropertyType = 
  | 'apartamento' 
  | 'duplex' 
  | 'casa' 
  | 'cobertura' 
  | 'flat' 
  | 'terreno' 
  | 'outros';

export type PropertyPurpose = 
  | 'repasse' 
  | 'venda' 
  | 'aluguel' 
  | 'lancamento' 
  | 'novo' 
  | 'temporada';

export interface PropertyAmenities {
  piscina: boolean;
  academia: boolean;
  salaoFestas: boolean;
  churrasqueira: boolean;
  playground: boolean;
  saunas: boolean;
  quadraEsportiva: boolean;
  espacoGourmet: boolean;
  jardim: boolean;
  petPlace: boolean;
}

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  purpose: PropertyPurpose;
  neighborhood: string;
  address?: string;
  price: number;
  builtArea: number;
  totalArea: number;
  bedrooms: number;
  bathrooms: number;
  livingRooms: number;
  parkingSpots: number;
  hasPorter: boolean;
  hasSecurity: boolean;
  amenities: PropertyAmenities;
  description: string;
  images: string[];
  coverImage: string;
  featured: boolean;
  sold: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  purpose?: PropertyPurpose;
  type?: PropertyType;
  neighborhood?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  parkingSpots?: number;
}

export const NEIGHBORHOODS = [
  'Altiplano',
  'Bessa',
  'Brisamar',
  'Cabo Branco',
  'Castelo Branco',
  'Centro',
  'Cristo Redentor',
  'Intermares',
  'Jardim Oceania',
  'Manaíra',
  'Miramar',
  'Portal do Sol',
  'Tambaú',
  'Tambauzinho',
  'Valentina',
] as const;

export const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: 'apartamento', label: 'Apartamento' },
  { value: 'duplex', label: 'Duplex' },
  { value: 'casa', label: 'Casa' },
  { value: 'cobertura', label: 'Cobertura' },
  { value: 'flat', label: 'Flat' },
  { value: 'terreno', label: 'Terreno' },
  { value: 'outros', label: 'Outros' },
];

export const PROPERTY_PURPOSES: { value: PropertyPurpose; label: string }[] = [
  { value: 'repasse', label: 'Repasse' },
  { value: 'venda', label: 'Compra' },
  { value: 'aluguel', label: 'Aluguel' },
  { value: 'lancamento', label: 'Lançamento' },
  { value: 'novo', label: 'Novo' },
  { value: 'temporada', label: 'Temporada' },
];
