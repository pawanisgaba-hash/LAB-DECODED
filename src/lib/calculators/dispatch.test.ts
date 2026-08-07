import { describe, expect, it } from 'vitest';
import { calculateByCalculatorId } from './dispatch';

describe('calculateByCalculatorId', () => {
  it('calculates 24-hour urine creatinine', () => {
    const result = calculateByCalculatorId('24-hour-urine-creatinine', {
      urineCreatinine: 100,
      urineCreatinineUnit: 'mg/dL',
      volume: 1000,
      volumeUnit: 'mL'
    });
    expect(result).toEqual({ value: 1000, unit: 'mg/24h' });
  });

  it('calculates a protein creatinine ratio', () => {
    const result = calculateByCalculatorId('protein-creatinine-ratio', {
      urineProtein: 100,
      urineProteinUnit: 'mg/dL',
      urineCreatinine: 100,
      urineCreatinineUnit: 'mg/dL'
    });
    expect(result).toEqual({ value: 1000, unit: 'mg/g' });
  });
});
