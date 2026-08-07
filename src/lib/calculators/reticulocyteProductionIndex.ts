import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateReticulocyteProductionIndex(input: { reticulocyteCount: number; maturationIndex: number }): CalculationResult | null {
  const retic = safeNumber(input.reticulocyteCount);
  const maturation = safeNumber(input.maturationIndex);
  if (retic === null || maturation === null) return null;
  const value = retic * maturation;
  return { value: Number(value.toFixed(1)), unit: '' };
}
