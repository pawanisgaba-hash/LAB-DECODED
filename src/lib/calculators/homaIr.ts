export type HomaIrInput = {
  fastingGlucose: number;
  fastingInsulin: number;
};

export type HomaIrResult = {
  value: number;
  unit: string;
};

export function calculateHomaIr(input: HomaIrInput): HomaIrResult | null {
  const glucose = Number(input.fastingGlucose);
  const insulin = Number(input.fastingInsulin);

  if (![glucose, insulin].every((value) => Number.isFinite(value))) return null;
  if (glucose <= 0 || insulin <= 0) return null;

  const value = (glucose * insulin) / 405;
  return { value: Number(value.toFixed(1)), unit: '' };
}
