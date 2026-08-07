import { safeNumber } from './conversions';

export type FreeAndrogenIndexInput = {
  totalTestosterone: number;
  testosteroneUnit: 'nmol/L' | 'ng/dL';
  shbg: number;
  shbgUnit: 'nmol/L' | 'µg/L';
};

export type FreeAndrogenIndexResult = {
  value: number;
  unit: string;
};

export function calculateFreeAndrogenIndex(input: FreeAndrogenIndexInput): FreeAndrogenIndexResult | null {
  const testosterone = safeNumber(input.totalTestosterone);
  const shbg = safeNumber(input.shbg);
  if (testosterone === null || shbg === null || testosterone <= 0 || shbg <= 0) return null;

  const testosteroneNmolL = input.testosteroneUnit === 'ng/dL' ? testosterone * 0.0347 : testosterone;
  const value = (testosteroneNmolL / shbg) * 100;
  return { value: Number(value.toFixed(1)), unit: '' };
}
