import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateAnc(input: { wbc: number; neutrophils: number }): CalculationResult | null {
  const wbc = safeNumber(input.wbc);
  const neutrophils = safeNumber(input.neutrophils);
  if (wbc === null || neutrophils === null) return null;
  const value = (wbc * neutrophils) / 100;
  return { value: Number(value.toFixed(1)), unit: '×10^3/µL' };
}
