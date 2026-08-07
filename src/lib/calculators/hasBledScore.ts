export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateHasBledScore(input: { hypertension: number; renalDisease: number; liverDisease: number; stroke: number; bleedingHistory: number; labAbnormality: number; elderly: number; drugsAlcohol: number }): CalculationResult | null {
  const score = Number(input.hypertension) + Number(input.renalDisease) + Number(input.liverDisease) + Number(input.stroke) + Number(input.bleedingHistory) + Number(input.labAbnormality) + Number(input.elderly) + Number(input.drugsAlcohol);
  return { value: Number(score.toFixed(0)), unit: 'points' };
}
