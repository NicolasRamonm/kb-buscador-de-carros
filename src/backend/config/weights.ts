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
  /** Mostrar oferta especial se o orçamento do cliente for >= este percentual do valor do carro (ex.: 0.10 = 10%). */
  minBudgetPercentOfCar: parseFloat(process.env.SPECIAL_OFFER_MIN_BUDGET_PERCENT ?? "0.10"),
  tag: "Condições especiais para você",
} as const;
