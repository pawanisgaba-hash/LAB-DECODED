import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateTibc(input: { serumIron: number; transferrinSaturation: number }): CalculationResult | null {
  const iron = safeNumber(input.serumIron);
  const saturation = safeNumber(input.transferrinSaturation);
  if (iron === null || saturation === null || saturation <= 0) return null;
  const value = iron / (saturation / 100);
  return { value: Number(value.toFixed(1)), unit: 'µg/dL' };
}
