export const CITY_STATE_MAP: Record<string, string> = {
  "São Paulo": "SP",
  "Campinas": "SP",
  "Rio de Janeiro": "RJ",
  "Belo Horizonte": "MG",
  "Curitiba": "PR",
  "Porto Alegre": "RS",
};

export const AVAILABLE_STATES = ["SP", "RJ", "MG", "PR", "RS"] as const;

export type BrazilianState = (typeof AVAILABLE_STATES)[number];
