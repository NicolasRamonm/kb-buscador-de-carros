export const BRANDS = [
  "Toyota",
  "Honda",
  "Hyundai",
  "Chevrolet",
  "Volkswagen",
  "BYD",
] as const;

export const CAR_TYPES = [
  "Todos",
  "SUVs",
  "Sedans",
  "Compactos",
  "Elétricos",
] as const;

export const SIMULATION_DEFAULTS = {
  entryAmount: 10000,
  termMonths: 48,
  monthlyIncome: 7000,
  maxIncomePercent: 30,
  annualInterestRate: 0.12,
} as const;
