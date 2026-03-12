import OpenAI from "openai";
import type { ParsedIntent } from "@/types/car";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

const SYSTEM_PROMPT = `Você é um sistema que extrai intenção de busca de carros a partir de frases em português brasileiro.

Retorne SOMENTE um JSON válido (sem markdown, sem explicação) com os seguintes campos. Preencha apenas os campos que conseguir identificar na frase:

- "model": string — nome do modelo do carro (ex: "Corolla", "Civic", "HB20")
- "brand": string — marca (ex: "Toyota", "Honda", "Hyundai")  
- "maxPrice": number — preço máximo mencionado (ex: 80000)
- "minPrice": number — preço mínimo mencionado
- "location": string — cidade ou região mencionada (ex: "São Paulo")
- "nearMe": boolean — true se o usuário mencionou "perto de mim", "próximo", "na minha região" ou similar
- "categories": string[] — tipos de carro: "sedan", "suv", "hatch", "compacto"
- "traits": string[] — características subjetivas: "confortável", "econômico", "familiar", "esportivo", "aventureiro", "barato", "premium", "tecnológico", "potente", "seguro", etc.

Regras:
- Se o usuário mencionar "até X mil" ou "até X", interprete como maxPrice (ex: "até 80 mil" = 80000, "até 100k" = 100000)
- Se o usuário mencionar um modelo sem marca, tente inferir a marca (ex: "Corolla" → brand: "Toyota")
- Mapeie sinônimos: "SUV" → categories: ["suv"], "carro grande" → traits: ["espaçoso"], "carro bom pra família" → traits: ["familiar", "espaçoso"]
- "barato", "mais barato", "bom preço" → traits: ["econômico", "acessível"]
- "elétrico" → categories ou traits conforme contexto`;

export async function interpretPrompt(query: string): Promise<ParsedIntent> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: query },
    ],
  });

  const content = response.choices[0]?.message?.content?.trim();
  if (!content) {
    return { rawQuery: query };
  }

  try {
    const parsed = JSON.parse(content);
    return { ...parsed, rawQuery: query };
  } catch {
    return { rawQuery: query };
  }
}
