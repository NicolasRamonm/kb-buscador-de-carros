import type { EnrichedCar, ParsedIntent, FilterResult } from "@/types/car";

export function applyDeterministicFilters(
  intent: ParsedIntent,
  cars: EnrichedCar[]
): FilterResult {
  const flags = {
    priceExceeded: false,
    exactModelFound: false,
    requestedModel: intent.model,
    requestedMaxPrice: intent.maxPrice,
  };

  let modelMatch: EnrichedCar | undefined;

  if (intent.model) {
    const modelLower = intent.model.toLowerCase();
    modelMatch = cars.find(
      (c) => c.model.toLowerCase() === modelLower
    );
    if (!modelMatch && intent.brand) {
      const brandLower = intent.brand.toLowerCase();
      modelMatch = cars.find(
        (c) =>
          c.brand.toLowerCase() === brandLower &&
          c.model.toLowerCase() === modelLower
      );
    }

    if (modelMatch) {
      flags.exactModelFound = true;
      if (intent.maxPrice && modelMatch.price > intent.maxPrice) {
        flags.priceExceeded = true;
      }
    }
  }

  const exactMatches = cars.filter((car) => {
    if (intent.model) {
      const modelLower = intent.model.toLowerCase();
      if (car.model.toLowerCase() !== modelLower) return false;
    }
    if (intent.brand) {
      const brandLower = intent.brand.toLowerCase();
      if (car.brand.toLowerCase() !== brandLower) return false;
    }
    if (intent.maxPrice && car.price > intent.maxPrice) return false;
    if (intent.minPrice && car.price < intent.minPrice) return false;
    if (intent.location) {
      const locLower = intent.location.toLowerCase();
      if (!car.location.toLowerCase().includes(locLower)) return false;
    }
    if (intent.categories && intent.categories.length > 0) {
      if (!intent.categories.includes(car.category)) return false;
    }
    return true;
  });

  const exactIds = new Set(exactMatches.map((c) => c.id));
  const partialMatches = cars.filter((car) => {
    if (exactIds.has(car.id)) return false;

    let matchScore = 0;
    if (intent.model && car.model.toLowerCase() === intent.model.toLowerCase()) {
      matchScore++;
    }
    if (intent.brand && car.brand.toLowerCase() === intent.brand.toLowerCase()) {
      matchScore++;
    }
    if (intent.maxPrice && car.price <= intent.maxPrice) {
      matchScore++;
    }
    if (intent.categories && intent.categories.includes(car.category)) {
      matchScore++;
    }
    if (intent.traits && intent.traits.length > 0) {
      const hasTraitMatch = intent.traits.some((t) =>
        car.tags.some(
          (tag) =>
            tag.toLowerCase().includes(t.toLowerCase()) ||
            t.toLowerCase().includes(tag.toLowerCase())
        )
      );
      if (hasTraitMatch) matchScore++;
    }

    return matchScore > 0;
  });

  return { exactMatches, partialMatches, flags };
}
