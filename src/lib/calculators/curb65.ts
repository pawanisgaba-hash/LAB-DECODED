export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateCurb65(input: { confusion: number; urea: number; respiratoryRate: number; systolicBp: number; diastolicBp: number; age: number }): CalculationResult | null {
  const score = Number(input.confusion) + Number(input.urea >= 20 ? 1 : 0) + Number(input.respiratoryRate >= 30 ? 1 : 0) + Number(input.systolicBp < 90 || input.diastolicBp <= 60 ? 1 : 0) + Number(input.age >= 65 ? 1 : 0);
  return { value: Number(score.toFixed(0)), unit: 'points' };
}
