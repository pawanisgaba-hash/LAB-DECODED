import { describe, expect, it } from 'vitest';
import { calculateAnionGap } from './anionGap';

describe('calculateAnionGap', () => {
  it('calculates anion gap from sodium, chloride and bicarbonate values', () => {
    const result = calculateAnionGap({ sodium: 140, chloride: 102, bicarbonate: 24 });
    expect(result).toEqual({ value: 14, unit: 'mEq/L' });
  });
});
