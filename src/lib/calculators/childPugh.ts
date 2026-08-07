import { safeNumber } from './conversions';

export type LiverResult = {
  value: number;
  unit: string;
};

export function calculateChildPugh(albumin: number, bilirubin: number, inr: number, ascites: number, encephalopathy: number): LiverResult | null {
  const alb = safeNumber(albumin);
  const bil = safeNumber(bilirubin);
  const inrv = safeNumber(inr);
  if (alb === null || bil === null || inrv === null || alb <= 0 || bil <= 0 || inrv <= 0) return null;
  const score = albuminScore(alb) + bilirubinScore(bil) + inrScore(inrv) + ascites + encephalopathy;
  return { value: score, unit: 'points' };
}

function albuminScore(albumin: number) {
  if (albumin >= 3.5) return 1;
  if (albumin >= 2.8) return 2;
  return 3;
}

function bilirubinScore(bilirubin: number) {
  if (bilirubin < 2) return 1;
  if (bilirubin < 3) return 2;
  return 3;
}

function inrScore(inr: number) {
  if (inr < 1.7) return 1;
  if (inr <= 2.3) return 2;
  return 3;
}
