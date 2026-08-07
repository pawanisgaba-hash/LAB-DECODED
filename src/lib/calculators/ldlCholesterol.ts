import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateLdlCholesterol(input: { totalCholesterol: number; hdlCholesterol: number; triglycerides: number }): CalculationResult | null {
  const total = safeNumber(input.totalCholesterol);
  const hdl = safeNumber(input.hdlCholesterol);
  const triglycerides = safeNumber(input.triglycerides);
  if (total === null || hdl === null || triglycerides === null || triglycerides < 0) return null;
  const value = total - hdl - triglycerides / 5;
  return { value: Number(value.toFixed(1)), unit: 'mg/dL' };
}
