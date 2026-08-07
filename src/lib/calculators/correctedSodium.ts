import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateCorrectedSodium(input: { sodium: number; glucose: number; bun: number }): CalculationResult | null {
  const sodium = safeNumber(input.sodium);
  const glucose = safeNumber(input.glucose);
  const bun = safeNumber(input.bun);
  if (sodium === null || glucose === null || bun === null) return null;
  const value = sodium + 1.6 * ((glucose - 100) / 100) + 0.4 * ((bun - 20) / 10);
  return { value: Number(value.toFixed(1)), unit: 'mEq/L' };
}
