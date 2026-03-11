import type { Car } from "@/types/car";
import carsData from "../../cars.json";

const cars: Car[] = carsData as Car[];

export function getAllCars(): Car[] {
  return cars;
}

export function getCarByIndex(index: number): Car | undefined {
  return cars[index];
}

export function findCarsByQuery(query: string): Car[] {
  const lower = query.toLowerCase();
  return cars.filter(
    (car) =>
      car.Name.toLowerCase().includes(lower) ||
      car.Model.toLowerCase().includes(lower) ||
      car.Location.toLowerCase().includes(lower)
  );
}
