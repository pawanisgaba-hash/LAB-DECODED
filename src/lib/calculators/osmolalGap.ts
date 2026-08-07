import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateOsmolalGap(input: { measuredOsmolality: number; calculatedOsmolality: number }): CalculationResult | null {
  const measured = safeNumber(input.measuredOsmolality);
  const calculated = safeNumber(input.calculatedOsmolality);
  if (measured === null || calculated === null) return null;
  const value = measured - calculated;
  return { value: Number(value.toFixed(1)), unit: 'mOsm/kg' };
}
