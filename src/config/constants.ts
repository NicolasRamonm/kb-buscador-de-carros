import catalogData from "../../cars.json";

export const BRANDS = [...new Set(catalogData.map((c) => c.Name))] as const;

export const SIMULATION_DEFAULTS = {
  entryAmount: 10000,
  termMonths: 48,
  monthlyIncome: 7000,
  maxIncomePercent: 30,
  annualInterestRate: 0.12,
} as const;
