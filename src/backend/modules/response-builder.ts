import OpenAI from "openai";
import type {
  ParsedIntent,
  RecommendationResult,
  SearchResponse,
  ScoredCar,
} from "@/types/car";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function buildSearchResponse(
  recommendation: RecommendationResult,
  allScoredCars: ScoredCar[],
  intent: ParsedIntent
): Promise<SearchResponse> {
  const [explanation, alternativeReasons] = await Promise.all([
    recommendation.recommended
      ? generateExplanation(recommendation, intent)
      : Promise.resolve(
          "Não encontrei carros que correspondam exatamente à sua busca."
        ),
    generateAlternativeReasons(recommendation.alternatives, intent),
  ]);

  return {
    recommendation: recommendation.recommended
      ? {
          car: recommendation.recommended.car,
          score: recommendation.recommended.score,
          explanation,
        }
      : null,
    alternatives: recommendation.alternatives.map((alt, i) => ({
      car: alt.car,
      score: alt.score,
      reason: alternativeReasons[i] || "Boa alternativa com base na sua busca.",
    })),
    specialOffer: recommendation.specialOffer,
    cars: allScoredCars.map((sc) => sc.car),
    popups: recommendation.popups,
    aiSummary: explanation,
    appliedFilters: {
      priceRange: intent.maxPrice
        ? [intent.minPrice ?? 0, intent.maxPrice]
        : undefined,
      categories: intent.categories,
      location: intent.location,
      brand: intent.brand,
      model: intent.model,
    },
    meta: {
      totalResults: allScoredCars.length,
      queryInterpreted: intent,
    },
  };
}

async function generateExplanation(
  rec: RecommendationResult,
  intent: ParsedIntent
): Promise<string> {
  const recommended = rec.recommended!;
  const altList = rec.alternatives
    .slice(0, 3)
    .map((a) => `${a.car.fullName} (R$ ${a.car.price.toLocaleString("pt-BR")})`)
    .join(", ");

  const priceNote = rec.popups.priceExceeded
    ? `O usuário queria gastar no máximo R$ ${intent.maxPrice?.toLocaleString("pt-BR")}, mas o carro recomendado custa R$ ${recommended.car.price.toLocaleString("pt-BR")}.`
    : "";

  const distanceNote = rec.popups.distanceWarning
    ? `O carro recomendado está a ${rec.popups.distanceWarningData?.distanceKm}km do usuário.`
    : "";

  const specialOfferNote = rec.specialOffer
    ? `O modelo solicitado (${rec.specialOffer.car.fullName} - R$ ${rec.specialOffer.car.price.toLocaleString("pt-BR")}) está acima do orçamento, mas está disponível com condições especiais de financiamento ou consórcio.`
    : "";

  const prompt = `Gere uma explicação curta (2-3 frases) em português brasileiro sobre por que este carro foi recomendado.

Carro recomendado: ${recommended.car.fullName} - R$ ${recommended.car.price.toLocaleString("pt-BR")} - ${recommended.car.location}
Busca do usuário: "${intent.rawQuery}"
${priceNote}
${distanceNote}
${specialOfferNote}
Alternativas: ${altList || "nenhuma"}

Seja direto, útil e amigável. Se o preço excede o orçamento, mencione isso e sugira alternativas. Se há condições especiais para o modelo desejado, mencione brevemente. Não use markdown.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.7,
    max_tokens: 200,
    messages: [{ role: "user", content: prompt }],
  });

  return (
    response.choices[0]?.message?.content?.trim() ??
    "Recomendação baseada na sua busca."
  );
}

async function generateAlternativeReasons(
  alternatives: ScoredCar[],
  intent: ParsedIntent
): Promise<string[]> {
  if (alternatives.length === 0) return [];

  const altDescriptions = alternatives
    .map(
      (a, i) =>
        `${i + 1}. ${a.car.fullName} - R$ ${a.car.price.toLocaleString("pt-BR")} - ${a.car.location} - ${a.car.category}`
    )
    .join("\n");

  const prompt = `Para cada carro alternativo abaixo, gere UMA frase curta em português explicando por que é uma boa alternativa para a busca "${intent.rawQuery}".

${altDescriptions}

Retorne apenas as frases, uma por linha, na mesma ordem. Sem numeração, sem markdown.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.7,
    max_tokens: 300,
    messages: [{ role: "user", content: prompt }],
  });

  const content = response.choices[0]?.message?.content?.trim() ?? "";
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return alternatives.map(
    (_, i) => lines[i] || "Boa alternativa com base na sua busca."
  );
}
