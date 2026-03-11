export interface Car {
  Name: string;
  Model: string;
  Image: string;
  Price: number;
  Location: string;
}

export interface EnrichedCar {
  id: string;
  brand: string;
  model: string;
  fullName: string;
  image: string;
  price: number;
  location: string;
  lat: number;
  lng: number;
  year: number;
  mileage: number;
  transmission: string;
  fuel: string;
  category: string;
  tags: string[];
  content: string;
}

export interface ParsedIntent {
  model?: string;
  brand?: string;
  maxPrice?: number;
  minPrice?: number;
  location?: string;
  nearMe?: boolean;
  categories?: string[];
  traits?: string[];
  rawQuery: string;
}

export interface ScoredCar {
  car: CarResponse;
  score: number;
  breakdown: ScoreBreakdown;
}

export interface ScoreBreakdown {
  semantic: number;
  model: number;
  price: number;
  distance: number;
  category: number;
}

export interface CarResponse {
  id: string;
  index: number;
  brand: string;
  model: string;
  fullName: string;
  image: string;
  price: number;
  location: string;
  year: number;
  mileage: number;
  transmission: string;
  fuel: string;
  category: string;
  tags: string[];
}

export interface PopupFlags {
  priceExceeded: boolean;
  priceExceededData?: {
    requestedMax: number;
    actualPrice: number;
    carName: string;
  };
  distanceWarning: boolean;
  distanceWarningData?: {
    carName: string;
    distanceKm: number;
    closerAlternative?: string;
  };
  noResults: boolean;
  showFinancingPopup: boolean;
}

export interface SpecialOffer {
  car: CarResponse;
  tag: string;
  triggerFinancingPopup: boolean;
}

export interface SearchResponse {
  recommendation: {
    car: CarResponse;
    score: number;
    explanation: string;
  } | null;
  alternatives: Array<{
    car: CarResponse;
    score: number;
    reason: string;
  }>;
  specialOffer: SpecialOffer | null;
  cars: CarResponse[];
  popups: PopupFlags;
  aiSummary: string;
  appliedFilters: {
    priceRange?: [number, number];
    categories?: string[];
    location?: string;
    brand?: string;
    model?: string;
  };
  meta: {
    totalResults: number;
    queryInterpreted: ParsedIntent;
  };
}

export interface VectorSearchResult {
  car: EnrichedCar;
  similarity: number;
}

export interface FilterResult {
  exactMatches: EnrichedCar[];
  partialMatches: EnrichedCar[];
  flags: {
    priceExceeded: boolean;
    exactModelFound: boolean;
    requestedModel?: string;
    requestedMaxPrice?: number;
  };
}

export interface RecommendationResult {
  recommended: ScoredCar | null;
  alternatives: ScoredCar[];
  specialOffer: SpecialOffer | null;
  popups: PopupFlags;
}
