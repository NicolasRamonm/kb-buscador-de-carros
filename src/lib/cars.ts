import type { Car, SearchResponse, CarResponse } from "@/types/car";
import enrichedCars from "../backend/data/cars-enriched.json";

const cars: Car[] = enrichedCars.map((ec) => ({
  Name: ec.brand,
  Model: ec.model,
  Image: ec.image,
  Price: ec.price,
  Location: ec.location,
  id: ec.id,
  fullName: ec.fullName,
  year: ec.year,
  mileage: ec.mileage,
  transmission: ec.transmission,
  fuel: ec.fuel,
  category: ec.category,
  tags: ec.tags,
  lat: ec.lat,
  lng: ec.lng,
  content: ec.content,
}));

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
      car.Location.toLowerCase().includes(lower) ||
      car.category?.toLowerCase().includes(lower) ||
      car.tags?.some((tag) => tag.toLowerCase().includes(lower)) ||
      car.content?.toLowerCase().includes(lower)
  );
}

export async function searchCarsWithAI(
  query: string,
  userLat?: number,
  userLng?: number,
  userState?: string
): Promise<SearchResponse> {
  const res = await fetch("/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, userLat, userLng, userState }),
  });

  if (!res.ok) throw new Error("Search failed");
  return res.json();
}

export async function fetchAllCars(): Promise<CarResponse[]> {
  const res = await fetch("/api/cars");
  if (!res.ok) throw new Error("Failed to fetch cars");
  const data = await res.json();
  return data.cars;
}

export async function fetchCarById(id: string): Promise<CarResponse | null> {
  const res = await fetch(`/api/cars/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.car;
}

export function carResponseToCar(cr: CarResponse): Car {
  return {
    Name: cr.brand,
    Model: cr.model,
    Image: cr.image,
    Price: cr.price,
    Location: cr.location,
    id: cr.id,
    fullName: cr.fullName,
    year: cr.year,
    mileage: cr.mileage,
    transmission: cr.transmission,
    fuel: cr.fuel,
    category: cr.category,
    tags: cr.tags,
  };
}
