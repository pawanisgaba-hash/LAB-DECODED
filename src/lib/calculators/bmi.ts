export type BmiInput = {: 
  weight: number;
  height: number;
  weightUnit?: 'kg' | 'lb';
  heightUnit?: 'm' | 'cm' | 'in';
};

export type BmiResult = {
  value: number;
  unit: string;
};

export function calculateBmi(input: BmiInput): BmiResult | null {
  const weight = Number(input.weight);
  const height = Number(input.height);

  if (![weight, height].every((value) => Number.isFinite(value))) return null;
  if (weight <= 0 || height <= 0) return null;

  let weightKg = input.weightUnit === 'lb' ? weight * 0.45359237 : weight;
  let heightM = input.heightUnit === 'cm' ? height / 100 : input.heightUnit === 'in' ? height * 0.0254 : height;

  const value = weightKg / (heightM * heightM);
  return { value: Number(value.toFixed(1)), unit: 'kg/m²' };
}
