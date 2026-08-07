import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateFePotassium(input: { urinePotassium: number; plasmaPotassium: number; urineCreatinine: number; plasmaCreatinine: number }): CalculationResult | null {
  const urineK = safeNumber(input.urinePotassium);
  const plasmaK = safeNumber(input.plasmaPotassium);
  const urineCr = safeNumber(input.urineCreatinine);
  const plasmaCr = safeNumber(input.plasmaCreatinine);
  if (urineK === null || plasmaK === null || urineCr === null || plasmaCr === null || plasmaK <= 0 || urineCr <= 0) return null;
  const value = ((urineK * plasmaCr) / (plasmaK * urineCr)) * 100;
  return { value: Number(value.toFixed(2)), unit: '%' };
}
