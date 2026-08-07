export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateQsofa(input: { respiratoryRate: number; alteredMentalStatus: number; systolicBp: number }): CalculationResult | null {
  const score = Number(input.respiratoryRate >= 22 ? 1 : 0) + Number(input.alteredMentalStatus ? 1 : 0) + Number(input.systolicBp <= 100 ? 1 : 0);
  return { value: Number(score.toFixed(0)), unit: 'points' };
}
