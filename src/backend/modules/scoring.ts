import { SCORE_WEIGHTS, DISTANCE_THRESHOLDS } from "@/backend/config/weights";
import { haversineDistance } from "./distance";
import type {
  EnrichedCar,
  ParsedIntent,
  VectorSearchResult,
  ScoredCar,
  CarResponse,
  ScoreBreakdown,
} from "@/types/car";
import carsEnriched from "@/backend/data/cars-enriched.json";

const carsIndex = (carsEnriched as EnrichedCar[]);

function getOriginalIndex(carId: string): number {
  return carsIndex.findIndex((c) => c.id === carId);
}

function toCarResponse(car: EnrichedCar): CarResponse {
  return {
    id: car.id,
    index: getOriginalIndex(car.id),
    brand: car.brand,
    model: car.model,
    fullName: car.fullName,
    image: car.image,
    price: car.price,
    location: car.location,
    year: car.year,
    mileage: car.mileage,
    transmission: car.transmission,
    fuel: car.fuel,
    category: car.category,
    tags: car.tags,
  };
}

function calcModelScore(car: EnrichedCar, intent: ParsedIntent): number {
  if (!intent.model) return 0;
  if (car.model.toLowerCase() === intent.model.toLowerCase()) return 1.0;
  if (intent.brand && car.brand.toLowerCase() === intent.brand.toLowerCase())
    return 0.5;
  return 0;
}

function calcPriceScore(car: EnrichedCar, intent: ParsedIntent): number {
  if (!intent.maxPrice) return 1.0;
  if (car.price <= intent.maxPrice) return 1.0;
  const overshoot = (car.price - intent.maxPrice) / intent.maxPrice;
  return Math.max(0, 1 - overshoot);
}

function calcDistanceScore(
  car: EnrichedCar,
  userLat?: number,
  userLng?: number,
  nearMe?: boolean
): number {
  if (!nearMe || userLat == null || userLng == null) return 1.0;

  const dist = haversineDistance(userLat, userLng, car.lat, car.lng);
  if (dist <= DISTANCE_THRESHOLDS.nearKm) return 1.0;
  if (dist >= DISTANCE_THRESHOLDS.maxKm) return 0;
  return Math.max(
    0,
    1 - (dist - DISTANCE_THRESHOLDS.nearKm) / (DISTANCE_THRESHOLDS.maxKm - DISTANCE_THRESHOLDS.nearKm)
  );
}

function calcCategoryScore(car: EnrichedCar, intent: ParsedIntent): number {
  let score = 0;

  if (intent.categories && intent.categories.length > 0) {
    if (intent.categories.includes(car.category)) score = 1.0;
  }

  if (score < 1.0 && intent.traits && intent.traits.length > 0) {
    const matchCount = intent.traits.filter((t) =>
      car.tags.some(
        (tag) =>
          tag.toLowerCase().includes(t.toLowerCase()) ||
          t.toLowerCase().includes(tag.toLowerCase())
      )
    ).length;
    const traitScore = matchCount / intent.traits.length;
    score = Math.max(score, Math.min(1.0, traitScore));
  }

  if (!intent.categories?.length && !intent.traits?.length) return 0;
  return score;
}

export function calculateHybridScores(
  vectorResults: VectorSearchResult[],
  intent: ParsedIntent,
  userLat?: number,
  userLng?: number
): ScoredCar[] {
  const scored = vectorResults.map((vr) => {
    const semanticScore = vr.similarity;
    const modelScore = calcModelScore(vr.car, intent);
    const priceScore = calcPriceScore(vr.car, intent);
    const distanceScore = calcDistanceScore(
      vr.car,
      userLat,
      userLng,
      intent.nearMe
    );
    const categoryScore = calcCategoryScore(vr.car, intent);

    const breakdown: ScoreBreakdown = {
      semantic: semanticScore,
      model: modelScore,
      price: priceScore,
      distance: distanceScore,
      category: categoryScore,
    };

    const finalScore =
      SCORE_WEIGHTS.semantic * semanticScore +
      SCORE_WEIGHTS.model * modelScore +
      SCORE_WEIGHTS.price * priceScore +
      SCORE_WEIGHTS.distance * distanceScore +
      SCORE_WEIGHTS.category * categoryScore;

    return {
      car: toCarResponse(vr.car),
      score: finalScore,
      breakdown,
    } satisfies ScoredCar;
  });

  scored.sort((a, b) => b.score - a.score);
  return scored;
}
