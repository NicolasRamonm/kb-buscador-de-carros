import { POPUP_THRESHOLDS, SPECIAL_OFFER } from "@/backend/config/weights";
import { haversineDistance } from "./distance";
import type {
  ScoredCar,
  ParsedIntent,
  FilterResult,
  RecommendationResult,
  PopupFlags,
  SpecialOffer,
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
      specialOffer: null,
      popups: {
        priceExceeded: false,
        distanceWarning: false,
        noResults: true,
        showFinancingPopup: false,
      },
    };
  }

  const recommended = scoredCars[0];
  let alternatives = scoredCars.slice(1, 5);

  const specialOffer = buildSpecialOffer(
    scoredCars,
    intent,
    filterResult
  );

  if (specialOffer) {
    alternatives = alternatives.filter(
      (alt) => alt.car.id !== specialOffer.car.id
    );
  }

  const popups = buildPopupFlags(
    recommended,
    alternatives,
    intent,
    filterResult,
    specialOffer,
    userLat,
    userLng
  );

  return { recommended, alternatives, specialOffer, popups };
}

function buildSpecialOffer(
  scoredCars: ScoredCar[],
  intent: ParsedIntent,
  filterResult: FilterResult
): SpecialOffer | null {
  if (!intent.model) return null;
  if (!filterResult.flags.exactModelFound) return null;
  if (!filterResult.flags.priceExceeded) return null;
  if (!intent.maxPrice) return null;

  const modelCar = findEnrichedCar(intent.model);
  if (!modelCar) return null;

  const scored = scoredCars.find(
    (sc) => sc.car.model.toLowerCase() === intent.model!.toLowerCase()
  );
  if (!scored) return null;

  return {
    car: scored.car,
    tag: SPECIAL_OFFER.tag,
    triggerFinancingPopup: true,
  };
}

function buildPopupFlags(
  recommended: ScoredCar,
  alternatives: ScoredCar[],
  intent: ParsedIntent,
  filterResult: FilterResult,
  specialOffer: SpecialOffer | null,
  userLat?: number,
  userLng?: number
): PopupFlags {
  const popups: PopupFlags = {
    priceExceeded: false,
    distanceWarning: false,
    noResults: false,
    showFinancingPopup: false,
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

  if (specialOffer) {
    popups.showFinancingPopup = true;
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
