import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateQtc(input: { qtMs: number; heartRate: number; formula?: 'bazett' | 'fridericia' }): CalculationResult | null {
  const qt = safeNumber(input.qtMs);
  const hr = safeNumber(input.heartRate);
  if (qt === null || hr === null || hr <= 0) return null;
  const value = input.formula === 'fridericia' ? qt / Math.cbrt(hr) : qt / Math.sqrt(hr);
  return { value: Number(value.toFixed(1)), unit: 'ms' };
}
