import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateMentzerIndex(input: { mcv: number; rbc: number }): CalculationResult | null {
  const mcv = safeNumber(input.mcv);
  const rbc = safeNumber(input.rbc);
  if (mcv === null || rbc === null || rbc <= 0) return null;
  const value = mcv / rbc;
  return { value: Number(value.toFixed(1)), unit: '' };
}
