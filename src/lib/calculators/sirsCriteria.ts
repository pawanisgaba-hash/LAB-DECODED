export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateSirsCriteria(input: { tempC: number; heartRate: number; respiratoryRate: number; wbc: number }): CalculationResult | null {
  let score = 0;
  if (input.tempC >= 38 || input.tempC <= 36) score += 1;
  if (input.heartRate >= 90) score += 1;
  if (input.respiratoryRate >= 20) score += 1;
  if (input.wbc >= 12 || input.wbc <= 4) score += 1;
  return { value: Number(score.toFixed(0)), unit: 'criteria' };
}
