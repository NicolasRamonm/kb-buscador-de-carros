export const SCORE_WEIGHTS = {
  semantic: 0.30,
  model: 0.25,
  price: 0.20,
  distance: 0.15,
  category: 0.10,
} as const;

export const DISTANCE_THRESHOLDS = {
  nearKm: 50,
  maxKm: 500,
} as const;

export const POPUP_THRESHOLDS = {
  distanceWarningKm: 100,
  alternativeScoreRatio: 0.5,
} as const;

export const SPECIAL_OFFER = {
  maxPriceFlexPercent: parseFloat(process.env.MAX_PRICE_FLEX_PERCENT ?? "0.50"),
  tag: "Condições especiais para você",
} as const;
