import { safeNumber } from './conversions';

export type LiverResult = {
  value: number;
  unit: string;
};

export function calculateMeldNa(meld: number, sodium: number): LiverResult | null {
  const m = safeNumber(meld);
  const na = safeNumber(sodium);
  if (m === null || na === null || m <= 0 || na <= 0) return null;
  const value = meld + 1.32 * (137 - na) - (0.033 * meld * (137 - na));
  return { value: Number(value.toFixed(0)), unit: 'points' };
}
