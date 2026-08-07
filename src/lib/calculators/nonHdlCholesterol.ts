import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateNonHdlCholesterol(input: { totalCholesterol: number; hdlCholesterol: number }): CalculationResult | null {
  const total = safeNumber(input.totalCholesterol);
  const hdl = safeNumber(input.hdlCholesterol);
  if (total === null || hdl === null) return null;
  const value = total - hdl;
  return { value: Number(value.toFixed(1)), unit: 'mg/dL' };
}
