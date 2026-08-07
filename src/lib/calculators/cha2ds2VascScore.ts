import { safeNumber } from './conversions';

export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateCha2ds2VascScore(input: { age: number; heartFailure: number; hypertension: number; diabetes: number; strokeTia: number; vascularDisease: number; female: number }): CalculationResult | null {
  const age = safeNumber(input.age);
  if (age === null) return null;
  let score = age >= 75 ? 2 : age >= 65 ? 1 : 0;
  score += input.heartFailure ? 1 : 0;
  score += input.hypertension ? 1 : 0;
  score += input.diabetes ? 1 : 0;
  score += input.strokeTia ? 2 : 0;
  score += input.vascularDisease ? 1 : 0;
  score += input.female ? 1 : 0;
  return { value: Number(score.toFixed(0)), unit: 'points' };
}
