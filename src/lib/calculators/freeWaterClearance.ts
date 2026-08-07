import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateFreeWaterClearance(input: { urineOutput: number; urineOsmolality: number; plasmaOsmolality: number }): CalculationResult | null {
  const urineOutput = safeNumber(input.urineOutput);
  const urineOsm = safeNumber(input.urineOsmolality);
  const plasmaOsm = safeNumber(input.plasmaOsmolality);
  if (urineOutput === null || urineOsm === null || plasmaOsm === null || plasmaOsm <= 0) return null;
  const value = urineOutput - ((urineOsm / plasmaOsm) * urineOutput);
  return { value: Number(value.toFixed(1)), unit: 'mL/day' };
}
