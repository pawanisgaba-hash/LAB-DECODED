import { describe, expect, it } from 'vitest';
import { calculateRomaIndex } from './roma';

describe('calculateRomaIndex', () => {
  it('calculates a premenopausal ROMA result', () => {
    const result = calculateRomaIndex({ menopausalStatus: 'Premenopausal', he4: 50, ca125: 20 });
    expect(result).toEqual({ value: 7.6, unit: '%' });
  });

  it('calculates a postmenopausal ROMA result', () => {
    const result = calculateRomaIndex({ menopausalStatus: 'Postmenopausal', he4: 50, ca125: 20 });
    expect(result).toEqual({ value: 19.8, unit: '%' });
  });
});
