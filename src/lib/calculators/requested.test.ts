import { describe, expect, it } from 'vitest';
import { calculateBmi } from './bmi';
import { calculateCorrectedCalcium } from './correctedCalcium';
import { calculateHomaIr } from './homaIr';
import { calculateWellsPe } from './wellsPe';

describe('requested calculators', () => {
  it('calculates BMI from height and weight', () => {
    expect(calculateBmi({ weight: 70, height: 1.75 })).toEqual({ value: 22.9, unit: 'kg/m²' });
  });

  it('calculates corrected calcium', () => {
    expect(calculateCorrectedCalcium({ calcium: 8.8, albumin: 3.0 })).toEqual({ value: 9.6, unit: 'mg/dL' });
  });

  it('calculates HOMA-IR', () => {
    expect(calculateHomaIr({ fastingGlucose: 100, fastingInsulin: 8 })).toEqual({ value: 2, unit: '' });
  });

  it('calculates Wells PE score', () => {
    expect(calculateWellsPe({ clinicalSignsDvt: 1, peMostLikely: 1, heartRate: 1, immobilization: 0, previousDvtPe: 0, hemoptysis: 0, malignancy: 0 })).toEqual({ value: 3, unit: 'points' });
  });
});
