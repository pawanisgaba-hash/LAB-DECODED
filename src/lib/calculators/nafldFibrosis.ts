import { safeNumber } from './conversions';

export type LiverResult = {
  value: number;
  unit: string;
};

export function calculateNafldFibrosis(age: number, bmi: number, hyperglycemia: number, ast: number, alt: number, platelets: number, albumin: number): LiverResult | null {
  const a = safeNumber(age);
  const b = safeNumber(bmi);
  const h = safeNumber(hyperglycemia);
  const asv = safeNumber(ast);
  const al = safeNumber(alt);
  const p = safeNumber(platelets);
  const alb = safeNumber(albumin);
  if ([a, b, h, asv, al, p, alb].some((v) => v === null || v <= 0)) return null;
  const value = -1.675 + 0.037 * a + 0.094 * b + 1.13 * (h === 1 ? 1 : 0) + 0.99 * Math.log(asv) - 0.013 * p - 0.66 * alb;
  return { value: Number(value.toFixed(3)), unit: '' };
}
