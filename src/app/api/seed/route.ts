import { NextRequest, NextResponse } from "next/server";
import { generateEmbedding } from "@/backend/modules/embedding";
import { insertCar } from "@/backend/db/queries";
import carsEnriched from "@/backend/data/cars-enriched.json";
import type { EnrichedCar } from "@/types/car";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-seed-secret");
  if (secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cars = carsEnriched as EnrichedCar[];
  let indexed = 0;

  for (const car of cars) {
    const embedding = await generateEmbedding(car.content);
    await insertCar(car, embedding);
    indexed++;
  }

  return NextResponse.json({ success: true, indexed });
}
