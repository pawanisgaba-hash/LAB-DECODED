import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateTransferrinSaturation(input: { serumIron: number; tibc: number }): CalculationResult | null {
  const iron = safeNumber(input.serumIron);
  const tibcValue = safeNumber(input.tibc);
  if (iron === null || tibcValue === null || tibcValue <= 0) return null;
  const value = (iron / tibcValue) * 100;
  return { value: Number(value.toFixed(1)), unit: '%' };
}
