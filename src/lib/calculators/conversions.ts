export function mgDlToUmolL(value: number): number {
  return value * 88.4;
}

export function umolLToMgDl(value: number): number {
  return value / 88.4;
}

export function mgDlToMmolL(value: number): number {
  return value / 18;
}

export function mmolLToMgDl(value: number): number {
  return value * 18;
}

export function gDlToGL(value: number): number {
  return value * 10;
}

export function gLToGdl(value: number): number {
  return value / 10;
}

export function safeNumber(value: unknown): number | null {
  const parsed = typeof value === 'string' ? parseFloat(value) : typeof value === 'number' ? value : NaN;
  if (Number.isFinite(parsed)) return parsed;
  return null;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
