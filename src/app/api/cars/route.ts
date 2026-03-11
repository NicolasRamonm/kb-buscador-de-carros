import { NextResponse } from "next/server";
import { getAllCarsFromDB } from "@/backend/db/queries";
import type { CarResponse } from "@/types/car";
import carsEnriched from "@/backend/data/cars-enriched.json";
import type { EnrichedCar } from "@/types/car";

const carsIndex = carsEnriched as EnrichedCar[];

export async function GET() {
  try {
    const cars = await getAllCarsFromDB();

    const carResponses: CarResponse[] = cars.map((car) => ({
      id: car.id,
      index: carsIndex.findIndex((c) => c.id === car.id),
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
    }));

    return NextResponse.json({ cars: carResponses, total: carResponses.length });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
