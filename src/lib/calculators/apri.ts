import { safeNumber } from './conversions';

export type LiverResult = {
  value: number;
  unit: string;
};

export function calculateApri(ast: number, alt: number, plt: number): LiverResult | null {
  const asv = safeNumber(ast);
  const al = safeNumber(alt);
  const p = safeNumber(plt);
  if (asv === null || al === null || p === null || asv <= 0 || al <= 0 || p <= 0) return null;
  const value = ((asv / al) / p) * 100;
  return { value: Number(value.toFixed(2)), unit: '' };
}
