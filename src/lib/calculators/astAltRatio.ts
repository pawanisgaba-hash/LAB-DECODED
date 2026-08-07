import { safeNumber } from './conversions';

export type LiverResult = {
  value: number;
  unit: string;
};

export function calculateAstAltRatio(ast: number, alt: number): LiverResult | null {
  const asv = safeNumber(ast);
  const al = safeNumber(alt);
  if (asv === null || al === null || asv <= 0 || al <= 0) return null;
  const value = asv / al;
  return { value: Number(value.toFixed(2)), unit: '' };
}
