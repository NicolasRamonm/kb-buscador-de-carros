import { NextRequest, NextResponse } from "next/server";
import { interpretPrompt } from "@/backend/modules/prompt-interpreter";
import { searchByVector } from "@/backend/modules/vector-search";
import { applyDeterministicFilters } from "@/backend/modules/deterministic-filters";
import { calculateHybridScores } from "@/backend/modules/scoring";
import { buildRecommendation } from "@/backend/modules/recommendation";
import { buildSearchResponse } from "@/backend/modules/response-builder";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, userLat, userLng } = body as {
      query: string;
      userLat?: number;
      userLng?: number;
    };

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }

    const [intent, vectorResults] = await Promise.all([
      interpretPrompt(query),
      searchByVector(query, 10),
    ]);

    const allEnrichedCars = vectorResults.map((vr) => vr.car);
    const filterResult = applyDeterministicFilters(intent, allEnrichedCars);

    const scoredCars = calculateHybridScores(
      vectorResults,
      intent,
      userLat,
      userLng
    );

    const recommendation = buildRecommendation(
      scoredCars,
      intent,
      filterResult,
      userLat,
      userLng
    );

    const response = await buildSearchResponse(
      recommendation,
      scoredCars,
      intent
    );

    return NextResponse.json(response);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
