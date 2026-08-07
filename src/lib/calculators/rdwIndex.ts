import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateRdwIndex(input: { rdwPercent: number; meanCellVolume: number }): CalculationResult | null {
  const rdw = safeNumber(input.rdwPercent);
  const mcv = safeNumber(input.meanCellVolume);
  if (rdw === null || mcv === null) return null;
  const value = (rdw * mcv) / 100;
  return { value: Number(value.toFixed(1)), unit: 'fL' };
}
