import { mgDlToUmolL, safeNumber } from './conversions';

export type EgfrInput = {
  age: number;
  sex: 'Male' | 'Female';
  creatinine: number;
  creatinineUnit: 'mg/dL' | 'µmol/L';
};

export type EgfrResult = {
  value: number;
  unit: string;
};

export function calculateEgfrCkdEpi2021(input: EgfrInput): EgfrResult | null {
  const age = safeNumber(input.age);
  const creatinine = safeNumber(input.creatinine);
  if (age === null || creatinine === null || age <= 0 || creatinine <= 0) return null;
  const scr = input.creatinineUnit === 'mg/dL' ? mgDlToUmolL(creatinine) : creatinine;
  const kappa = input.sex === 'Female' ? 44 : 52;
  const alpha = input.sex === 'Female' ? -0.241 : -0.302;
  const scrKappa = scr / kappa;
  const minTerm = Math.min(scrKappa, 1) ** alpha;
  const maxTerm = Math.max(scrKappa, 1) ** -1.2;
  const sexFactor = input.sex === 'Female' ? 1.012 : 1;
  const value = 142 * minTerm * maxTerm * Math.pow(0.9938, age) * sexFactor;
  return { value: Number(value.toFixed(1)), unit: 'mL/min/1.73 m²' };
}

export function calculateEgfrCkdEpiCombined(input: EgfrInput & { cystatinC: number; cystatinUnit: 'mg/L' | 'mg/dL' }): EgfrResult | null {
  const age = safeNumber(input.age);
  const creatinine = safeNumber(input.creatinine);
  const cystatin = safeNumber(input.cystatinC);
  if (age === null || creatinine === null || cystatin === null || age <= 0 || creatinine <= 0 || cystatin <= 0) return null;
  const scr = input.creatinineUnit === 'mg/dL' ? mgDlToUmolL(creatinine) : creatinine;
  const cysc = input.cystatinUnit === 'mg/L' ? cystatin : cystatin * 10;
  const kappa = input.sex === 'Female' ? 44 : 52;
  const alpha = input.sex === 'Female' ? -0.241 : -0.302;
  const scrKappa = scr / kappa;
  const cyscDiv = cysc / 0.8;
  const value = 135 * Math.min(scrKappa, 1) ** alpha * Math.max(scrKappa, 1) ** -0.544 * Math.min(cyscDiv, 1) ** -0.323 * Math.max(cyscDiv, 1) ** -0.778 * Math.pow(0.996, age) * (input.sex === 'Female' ? 0.963 : 1);
  return { value: Number(value.toFixed(1)), unit: 'mL/min/1.73 m²' };
}
