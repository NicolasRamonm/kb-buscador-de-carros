import { supabase } from "./supabase";
import type { EnrichedCar, VectorSearchResult } from "@/types/car";

export async function insertCar(
  car: EnrichedCar,
  embedding: number[]
): Promise<void> {
  const { error } = await supabase.from("cars").upsert({
    id: car.id,
    brand: car.brand,
    model: car.model,
    full_name: car.fullName,
    image: car.image,
    price: car.price,
    location: car.location,
    lat: car.lat,
    lng: car.lng,
    year: car.year,
    mileage: car.mileage,
    transmission: car.transmission,
    fuel: car.fuel,
    category: car.category,
    tags: car.tags,
    content: car.content,
    embedding,
  });

  if (error) throw new Error(`Failed to insert car ${car.id}: ${error.message}`);
}

export async function getAllCarsFromDB(): Promise<EnrichedCar[]> {
  const { data, error } = await supabase
    .from("cars")
    .select(
      "id, brand, model, full_name, image, price, location, lat, lng, year, mileage, transmission, fuel, category, tags, content"
    )
    .order("price", { ascending: true });

  if (error) throw new Error(`Failed to fetch cars: ${error.message}`);

  return (data ?? []).map(mapRowToEnrichedCar);
}

export async function getCarByIdFromDB(
  id: string
): Promise<EnrichedCar | null> {
  const { data, error } = await supabase
    .from("cars")
    .select(
      "id, brand, model, full_name, image, price, location, lat, lng, year, mileage, transmission, fuel, category, tags, content"
    )
    .eq("id", id)
    .single();

  if (error) return null;
  return mapRowToEnrichedCar(data);
}

export async function matchCarsByVector(
  queryEmbedding: number[],
  matchCount: number = 10
): Promise<VectorSearchResult[]> {
  const { data, error } = await supabase.rpc("match_cars", {
    query_embedding: queryEmbedding,
    match_count: matchCount,
  });

  if (error)
    throw new Error(`Vector search failed: ${error.message}`);

  return (data ?? []).map(
    (row: Record<string, unknown>) => ({
      car: mapRowToEnrichedCar(row),
      similarity: row.similarity as number,
    })
  );
}

function mapRowToEnrichedCar(row: Record<string, unknown>): EnrichedCar {
  const rawImage = (row.image ?? "") as string;
  const image =
    rawImage && rawImage !== "exemplo.png"
      ? rawImage
      : `/img/${row.id as string}/1.png`;

  return {
    id: row.id as string,
    brand: row.brand as string,
    model: row.model as string,
    fullName: (row.full_name ?? row.fullName) as string,
    image,
    price: row.price as number,
    location: row.location as string,
    lat: row.lat as number,
    lng: row.lng as number,
    year: row.year as number,
    mileage: row.mileage as number,
    transmission: row.transmission as string,
    fuel: row.fuel as string,
    category: row.category as string,
    tags: row.tags as string[],
    content: row.content as string,
  };
}
