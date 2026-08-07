export type WellsPeInput = {
  clinicalSignsDvt: number;
  peMostLikely: number;
  heartRate: number;
  immobilization: number;
  previousDvtPe: number;
  hemoptysis: number;
  malignancy: number;
};

export type WellsPeResult = {
  value: number;
  unit: string;
};

export function calculateWellsPe(input: WellsPeInput): WellsPeResult | null {
  const score = Number(input.clinicalSignsDvt) + Number(input.peMostLikely) + Number(input.heartRate) + Number(input.immobilization) + Number(input.previousDvtPe) + Number(input.hemoptysis) + Number(input.malignancy);

  if (!Number.isFinite(score)) return null;

  return { value: Number(score.toFixed(0)), unit: 'points' };
}
