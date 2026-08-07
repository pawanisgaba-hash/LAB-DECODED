export type CorrectedCalciumInput = {
  calcium: number;
  albumin: number;
};

export type CorrectedCalciumResult = {
  value: number;
  unit: string;
};

export function calculateCorrectedCalcium(input: CorrectedCalciumInput): CorrectedCalciumResult | null {
  const calcium = Number(input.calcium);
  const albumin = Number(input.albumin);

  if (![calcium, albumin].every((value) => Number.isFinite(value))) return null;
  if (albumin < 0) return null;

  const value = calcium + 0.8 * (4 - albumin);
  return { value: Number(value.toFixed(1)), unit: 'mg/dL' };
}
