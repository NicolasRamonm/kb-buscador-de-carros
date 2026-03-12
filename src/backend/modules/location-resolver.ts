import { CITY_STATE_MAP } from "@/backend/data/city-state-map";
import type { ScoredCar, ClosestOption } from "@/types/car";

export function resolveCarState(carLocation: string): string | null {
  return CITY_STATE_MAP[carLocation] ?? null;
}

export function isCarLocal(
  carLocation: string,
  userState?: string
): boolean {
  if (!userState) return true;
  const carState = resolveCarState(carLocation);
  if (!carState) return true;
  return carState === userState;
}

/**
 * Among all scored cars, find the best one that is in the user's state
 * and is not the already-recommended car.
 */
export function findClosestOption(
  scoredCars: ScoredCar[],
  recommendedCarId: string,
  userState: string
): ClosestOption | null {
  const localCars = scoredCars.filter(
    (sc) =>
      sc.car.id !== recommendedCarId &&
      resolveCarState(sc.car.location) === userState
  );

  if (localCars.length === 0) return null;

  const best = localCars[0];

  const stateLabel = userState;
  return {
    car: best.car,
    score: best.score,
    reason: `Encontramos uma opção mais próxima de você em ${stateLabel}`,
  };
}
