import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateCorrectedReticulocyteCount(input: { reticulocytePercent: number; hematocrit: number }): CalculationResult | null {
  const retic = safeNumber(input.reticulocytePercent);
  const hematocrit = safeNumber(input.hematocrit);
  if (retic === null || hematocrit === null || hematocrit <= 0) return null;
  const value = retic * (45 / hematocrit);
  return { value: Number(value.toFixed(1)), unit: '%' };
}
