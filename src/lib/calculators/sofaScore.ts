export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateSofaScore(input: { pao2: number; platelets: number; bilirubin: number; map: number; gcs: number; creatinine: number; urineOutput: number }): CalculationResult | null {
  let score = 0;
  if (input.pao2 < 100) score += 1;
  if (input.platelets < 150) score += 1;
  if (input.bilirubin >= 1.2) score += 1;
  if (input.map < 70) score += 1;
  if (input.gcs < 15) score += 1;
  if (input.creatinine >= 1.2) score += 1;
  if (input.urineOutput < 500) score += 1;
  return { value: Number(score.toFixed(0)), unit: 'points' };
}
