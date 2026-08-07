export type AnionGapInput = {
  sodium: number;
  chloride: number;
  bicarbonate: number;
};

export type AnionGapResult = {
  value: number;
  unit: string;
};

export function calculateAnionGap(input: AnionGapInput): AnionGapResult | null {
  const sodium = Number(input.sodium);
  const chloride = Number(input.chloride);
  const bicarbonate = Number(input.bicarbonate);

  if (![sodium, chloride, bicarbonate].every((value) => Number.isFinite(value))) {
    return null;
  }

  const value = sodium - chloride - bicarbonate;
  return { value: Number(value.toFixed(1)), unit: 'mEq/L' };
}
