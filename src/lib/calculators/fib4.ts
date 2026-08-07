import { safeNumber } from './conversions';

export type LiverResult = {
  value: number;
  unit: string;
};

export function calculateFib4(age: number, ast: number, alt: number, plt: number): LiverResult | null {
  const a = safeNumber(age);
  const asv = safeNumber(ast);
  const al = safeNumber(alt);
  const p = safeNumber(plt);
  if (a === null || asv === null || al === null || p === null || a <= 0 || asv <= 0 || al <= 0 || p <= 0) return null;
  const value = (a * asv) / (p * Math.sqrt(al));
  return { value: Number(value.toFixed(2)), unit: '' };
}
