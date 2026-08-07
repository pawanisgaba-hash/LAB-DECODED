import { safeNumber } from './conversions';

export type RomaInput = {
  menopausalStatus: 'Premenopausal' | 'Postmenopausal';
  he4: number;
  ca125: number;
};

export type RomaResult = {
  value: number;
  unit: string;
};

export function calculateRomaIndex(input: RomaInput): RomaResult | null {
  const he4 = safeNumber(input.he4);
  const ca125 = safeNumber(input.ca125);
  if (he4 === null || ca125 === null || he4 <= 0 || ca125 <= 0) return null;

  const he4Log = Math.log(he4);
  const ca125Log = Math.log(ca125);
  const menopausalFactor = input.menopausalStatus === 'Postmenopausal' ? 1.1 : 0;
  const pi = -12.0 + 2.38 * he4Log + 0.0626 * ca125Log + menopausalFactor;
  const roma = (100 * Math.exp(pi)) / (1 + Math.exp(pi));

  return { value: Number(roma.toFixed(1)), unit: '%' };
}
