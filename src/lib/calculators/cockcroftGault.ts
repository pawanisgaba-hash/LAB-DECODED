import { mgDlToUmolL, safeNumber } from './conversions';

export type CockcroftGaultInput = {
  age: number;
  sex: 'Male' | 'Female';
  weight: number;
  weightUnit: 'kg' | 'lb';
  creatinine: number;
  creatinineUnit: 'mg/dL' | 'µmol/L';
};

export type CockcroftGaultResult = {
  value: number;
  unit: string;
};

export function calculateCockcroftGault(input: CockcroftGaultInput): CockcroftGaultResult | null {
  const age = safeNumber(input.age);
  const weight = safeNumber(input.weight);
  const creatinine = safeNumber(input.creatinine);
  if (age === null || weight === null || creatinine === null || age <= 0 || weight <= 0 || creatinine <= 0) return null;
  const weightKg = input.weightUnit === 'lb' ? weight * 0.45359237 : weight;
  const scr = input.creatinineUnit === 'mg/dL' ? mgDlToUmolL(creatinine) : creatinine;
  const sexFactor = input.sex === 'Female' ? 1.04 : 1.23;
  const value = ((140 - age) * weightKg * sexFactor) / scr;
  return { value: Number(value.toFixed(1)), unit: 'mL/min' };
}
