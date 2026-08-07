import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateFePhosphate(input: { urinePhosphate: number; plasmaPhosphate: number; urineCreatinine: number; plasmaCreatinine: number }): CalculationResult | null {
  const urineP = safeNumber(input.urinePhosphate);
  const plasmaP = safeNumber(input.plasmaPhosphate);
  const urineCr = safeNumber(input.urineCreatinine);
  const plasmaCr = safeNumber(input.plasmaCreatinine);
  if (urineP === null || plasmaP === null || urineCr === null || plasmaCr === null || plasmaP <= 0 || urineCr <= 0) return null;
  const value = ((urineP * plasmaCr) / (plasmaP * urineCr)) * 100;
  return { value: Number(value.toFixed(2)), unit: '%' };
}
