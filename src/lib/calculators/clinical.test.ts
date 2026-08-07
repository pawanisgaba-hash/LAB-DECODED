import { describe, expect, it } from 'vitest';
import { calculateFreeAndrogenIndex } from './freeAndrogenIndex';

describe('calculateFreeAndrogenIndex', () => {
  it('calculates a free androgen index from testosterone and SHBG', () => {
    const result = calculateFreeAndrogenIndex({ totalTestosterone: 6.8, testosteroneUnit: 'nmol/L', shbg: 30, shbgUnit: 'nmol/L' });
    expect(result).toEqual({ value: 22.7, unit: '' });
  });
});
