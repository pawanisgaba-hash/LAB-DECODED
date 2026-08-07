import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateRdwMcvRatio(input: { rdwPercent: number; mcv: number }): CalculationResult | null {
  const rdw = safeNumber(input.rdwPercent);
  const mcv = safeNumber(input.mcv);
  if (rdw === null || mcv === null || mcv <= 0) return null;
  const value = rdw / mcv;
  return { value: Number(value.toFixed(2)), unit: '' };
}
