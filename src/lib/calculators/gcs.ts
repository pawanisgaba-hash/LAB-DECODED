import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateGcs(input: { eye: number; verbal: number; motor: number }): CalculationResult | null {
  const eye = safeNumber(input.eye);
  const verbal = safeNumber(input.verbal);
  const motor = safeNumber(input.motor);
  if (eye === null || verbal === null || motor === null) return null;
  const value = eye + verbal + motor;
  return { value: Number(value.toFixed(0)), unit: 'points' };
}
