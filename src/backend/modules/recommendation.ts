import { POPUP_THRESHOLDS } from "@/backend/config/weights";
import { haversineDistance } from "./distance";
import type {
  ScoredCar,
  ParsedIntent,
  FilterResult,
  RecommendationResult,
  PopupFlags,
} from "@/types/car";
import carsEnriched from "@/backend/data/cars-enriched.json";
import type { EnrichedCar } from "@/types/car";

const allCars = carsEnriched as EnrichedCar[];

export function buildRecommendation(
  scoredCars: ScoredCar[],
  intent: ParsedIntent,
  filterResult: FilterResult,
  userLat?: number,
  userLng?: number
): RecommendationResult {
  if (scoredCars.length === 0) {
    return {
      recommended: null,
      alternatives: [],
      popups: { priceExceeded: false, distanceWarning: false, noResults: true },
    };
  }

  const recommended = scoredCars[0];
  const alternatives = scoredCars.slice(1, 5);

  const popups = buildPopupFlags(
    recommended,
    alternatives,
    intent,
    filterResult,
    userLat,
    userLng
  );

  return { recommended, alternatives, popups };
}

function buildPopupFlags(
  recommended: ScoredCar,
  alternatives: ScoredCar[],
  intent: ParsedIntent,
  filterResult: FilterResult,
  userLat?: number,
  userLng?: number
): PopupFlags {
  const popups: PopupFlags = {
    priceExceeded: false,
    distanceWarning: false,
    noResults: false,
  };

  if (filterResult.flags.priceExceeded && intent.maxPrice) {
    const modelCar = findEnrichedCar(intent.model);
    if (modelCar) {
      popups.priceExceeded = true;
      popups.priceExceededData = {
        requestedMax: intent.maxPrice,
        actualPrice: modelCar.price,
        carName: modelCar.fullName,
      };
    }
  }

  if (intent.nearMe && userLat != null && userLng != null) {
    const recCar = findEnrichedCar(recommended.car.model);
    if (recCar) {
      const dist = haversineDistance(userLat, userLng, recCar.lat, recCar.lng);
      if (dist > POPUP_THRESHOLDS.distanceWarningKm) {
        const closerAlt = alternatives.find((alt) => {
          const altCar = findEnrichedCar(alt.car.model);
          if (!altCar) return false;
          const altDist = haversineDistance(
            userLat,
            userLng,
            altCar.lat,
            altCar.lng
          );
          return altDist < dist;
        });

        popups.distanceWarning = true;
        popups.distanceWarningData = {
          carName: recCar.fullName,
          distanceKm: Math.round(dist),
          closerAlternative: closerAlt?.car.fullName,
        };
      }
    }
  }

  return popups;
}

function findEnrichedCar(modelName?: string): EnrichedCar | undefined {
  if (!modelName) return undefined;
  return allCars.find(
    (c) => c.model.toLowerCase() === modelName.toLowerCase()
  );
}
