import { generateEmbedding } from "./embedding";
import { matchCarsByVector } from "@/backend/db/queries";
import type { VectorSearchResult } from "@/types/car";

export async function searchByVector(
  query: string,
  matchCount: number = 10
): Promise<VectorSearchResult[]> {
  const embedding = await generateEmbedding(query);
  return matchCarsByVector(embedding, matchCount);
}
