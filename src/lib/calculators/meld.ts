import { safeNumber } from './conversions';

export type LiverResult = {
  value: number;
  unit: string;
};

export function calculateMeld(creatinine: number, bilirubin: number, inr: number): LiverResult | null {
  const cr = safeNumber(creatinine);
  const bil = safeNumber(bilirubin);
  const inrv = safeNumber(inr);
  if (cr === null || bil === null || inrv === null || cr <= 0 || bil <= 0 || inrv <= 0) return null;
  const value = 3.78 * Math.log(cr) + 11.2 * Math.log(bil) + 9.57 * Math.log(inrv) + 6.43;
  return { value: Number(value.toFixed(0)), unit: 'points' };
}
