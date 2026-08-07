import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateTransferrin(input: { tibc: number }): CalculationResult | null {
  const tibc = safeNumber(input.tibc);
  if (tibc === null || tibc <= 0) return null;
  const value = tibc / 1.25;
  return { value: Number(value.toFixed(1)), unit: 'mg/dL' };
}
