import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateSerumOsmolality(input: { sodium: number; glucose: number; bun: number }): CalculationResult | null {
  const sodium = safeNumber(input.sodium);
  const glucose = safeNumber(input.glucose);
  const bun = safeNumber(input.bun);
  if (sodium === null || glucose === null || bun === null) return null;
  const value = 2 * sodium + glucose / 18 + bun / 2.8;
  return { value: Number(value.toFixed(1)), unit: 'mOsm/kg' };
}
