export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateHeartScore(input: { history: number; ecg: number; age: number; riskFactors: number; troponin: number }): CalculationResult | null {
  const score = Number(input.history) + Number(input.ecg) + Number(input.age) + Number(input.riskFactors) + Number(input.troponin);
  return { value: Number(score.toFixed(0)), unit: 'points' };
}
