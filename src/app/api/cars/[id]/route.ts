import { NextRequest, NextResponse } from "next/server";
import { getCarByIdFromDB } from "@/backend/db/queries";
import type { CarResponse } from "@/types/car";
import carsEnriched from "@/backend/data/cars-enriched.json";
import type { EnrichedCar } from "@/types/car";

const carsIndex = carsEnriched as EnrichedCar[];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    let car = await getCarByIdFromDB(id);

    if (!car) {
      const numId = parseInt(id, 10);
      if (!isNaN(numId) && numId >= 0 && numId < carsIndex.length) {
        car = await getCarByIdFromDB(carsIndex[numId].id);
      }
    }

    if (!car) {
      return NextResponse.json({ error: "Car not found" }, { status: 404 });
    }

    const response: CarResponse = {
      id: car.id,
      index: carsIndex.findIndex((c) => c.id === car!.id),
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
    };

    return NextResponse.json({ car: response });
  } catch (error) {
    console.error("Error fetching car:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
