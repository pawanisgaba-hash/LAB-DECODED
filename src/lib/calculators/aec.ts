import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateAec(input: { wbc: number; eosinophils: number }): CalculationResult | null {
  const wbc = safeNumber(input.wbc);
  const eosinophils = safeNumber(input.eosinophils);
  if (wbc === null || eosinophils === null) return null;
  const value = (wbc * eosinophils) / 100;
  return { value: Number(value.toFixed(1)), unit: '×10^3/µL' };
}
