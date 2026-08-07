import type { CalculatorEntry } from '~/data/calculators';

export const renalCalculators: CalculatorEntry[] = [
  {
    id: 'anion-gap',
    slug: 'anion-gap',
    name: 'Anion Gap',
    shortDescription: 'Calculate the anion gap from serum sodium, chloride, and bicarbonate values.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['anion gap', 'electrolytes', 'metabolic acidosis', 'renal'],
    formula: 'Anion Gap = Na⁺ − (Cl⁻ + HCO₃⁻)',
    inputs: [
      { id: 'sodium', label: 'Sodium', type: 'number', unitOptions: ['mEq/L'], min: 100, max: 180, step: '0.1' },
      { id: 'chloride', label: 'Chloride', type: 'number', unitOptions: ['mEq/L'], min: 80, max: 140, step: '0.1' },
      { id: 'bicarbonate', label: 'Bicarbonate', type: 'number', unitOptions: ['mEq/L'], min: 5, max: 40, step: '0.1' }
    ],
    output: { label: 'Anion Gap', unit: 'mEq/L' },
    interpretation: [
      'Normal: 8–12 mEq/L',
      'Elevated: suggests unmeasured anions or metabolic acidosis',
      'Low/negative: uncommon and may reflect hypoalbuminemia or lab artifact'
    ],
    references: [
      { label: 'Anion gap interpretation', url: 'https://www.ncbi.nlm.nih.gov/books/NBK441807/' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Use alongside albumin, lactate, and clinical context for interpretation.'
  },
  {
    id: 'bmi',
    slug: 'bmi',
    name: 'BMI',
    shortDescription: 'Calculate body mass index from height and weight.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['bmi', 'weight', 'height', 'body mass index'],
    formula: 'BMI = weight (kg) / height² (m²)',
    inputs: [
      { id: 'weight', label: 'Weight', type: 'number', unitOptions: ['kg', 'lb'], min: 30, max: 300, step: '0.1' },
      { id: 'height', label: 'Height', type: 'number', unitOptions: ['m', 'cm', 'in'], min: 1, max: 250, step: '0.1' }
    ],
    output: { label: 'BMI', unit: 'kg/m²' },
    interpretation: [
      'Underweight: <18.5',
      'Normal: 18.5–24.9',
      'Overweight: 25–29.9',
      'Obesity: ≥30'
    ],
    references: [{ label: 'BMI definitions', url: 'https://www.cdc.gov/healthyweight/assessing/bmi/index.html' }],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'BMI is a screening tool and does not capture body composition.'
  },
  {
    id: 'corrected-calcium',
    slug: 'corrected-calcium',
    name: 'Corrected Calcium',
    shortDescription: 'Adjust serum calcium for albumin concentration.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['corrected calcium', 'albumin', 'hypocalcemia', 'hypercalcemia'],
    formula: 'Corrected calcium = measured calcium + 0.8 × (4 − albumin)',
    inputs: [
      { id: 'calcium', label: 'Calcium', type: 'number', unitOptions: ['mg/dL'], min: 4, max: 15, step: '0.1' },
      { id: 'albumin', label: 'Albumin', type: 'number', unitOptions: ['g/dL'], min: 1, max: 6, step: '0.1' }
    ],
    output: { label: 'Corrected Calcium', unit: 'mg/dL' },
    interpretation: [
      'Normal: ~8.5–10.5 mg/dL',
      'Low: may suggest hypocalcemia',
      'High: may suggest hypercalcemia'
    ],
    references: [{ label: 'Calcium correction formula', url: 'https://www.ncbi.nlm.nih.gov/books/NBK430900/' }],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Useful when albumin is abnormal and total calcium is measured.'
  },
  {
    id: 'egfr-ckd-epi-2021',
    slug: 'egfr-ckd-epi-2021',
    name: 'eGFR — CKD-EPI 2021 Creatinine',
    shortDescription: 'Estimate glomerular filtration rate using the CKD-EPI 2021 creatinine equation.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['egfr', 'ckd-epi', 'creatinine', 'renal', 'kidney'],
    featured: true,
    formula: 'eGFR = 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^-1.200 × 0.9938^Age × 1.012 [if female]',
    inputs: [
      { id: 'age', label: 'Age', type: 'number', unitOptions: ['years'], min: 18, max: 120, step: '1' },
      { id: 'sex', label: 'Sex', type: 'select', unitOptions: ['Male', 'Female'] },
      { id: 'creatinine', label: 'Serum Creatinine', type: 'number', unitOptions: ['mg/dL', 'µmol/L'], min: 0.1, max: 20, step: '0.01' }
    ],
    output: { label: 'Estimated GFR', unit: 'mL/min/1.73 m²' },
    interpretation: [
      '≥90: Normal or high',
      '60–89: Mildly decreased',
      '45–59: Mild to moderately decreased',
      '30–44: Moderately to severely decreased',
      '15–29: Severely decreased',
      '<15: Kidney failure range'
    ],
    references: [
      { label: 'CKD-EPI 2021 creatinine equation', url: 'https://www.kidney-international.org/article/S0085-2538(20)30198-3/fulltext' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Use for adults 18 years and older. Interpretation depends on clinical context and chronicity.'
  },
  {
    id: 'egfr-ckd-epi-cysc',
    slug: 'egfr-ckd-epi-cysc',
    name: 'eGFR — CKD-EPI Creatinine-Cystatin C',
    shortDescription: 'Estimate eGFR using the CKD-EPI combined creatinine and cystatin C equation.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['egfr', 'ckd-epi', 'cystatin c', 'renal', 'kidney'],
    formula: 'eGFR = 135 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^-0.544 × min(CysC/0.8, 1)^-0.323 × max(CysC/0.8, 1)^-0.778 × 0.996^Age × 0.963 [if female]',
    inputs: [
      { id: 'age', label: 'Age', type: 'number', unitOptions: ['years'], min: 18, max: 120, step: '1' },
      { id: 'sex', label: 'Sex', type: 'select', unitOptions: ['Male', 'Female'] },
      { id: 'creatinine', label: 'Serum Creatinine', type: 'number', unitOptions: ['mg/dL', 'µmol/L'], min: 0.1, max: 20, step: '0.01' },
      { id: 'cystatinC', label: 'Cystatin C', type: 'number', unitOptions: ['mg/L', 'mg/dL'], min: 0.2, max: 10, step: '0.01' }
    ],
    output: { label: 'Estimated GFR', unit: 'mL/min/1.73 m²' },
    interpretation: [
      '≥90: Normal or high',
      '60–89: Mildly decreased',
      '45–59: Mild to moderately decreased',
      '30–44: Moderately to severely decreased',
      '15–29: Severely decreased',
      '<15: Kidney failure range'
    ],
    references: [
      { label: 'CKD-EPI combined creatinine-cystatin C equation', url: 'https://www.kidney-international.org/article/S0085-2538(20)30198-3/fulltext' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Prefer when cystatin C is available to improve accuracy in uncertain muscle mass states.'
  },
  {
    id: 'cockcroft-gault',
    slug: 'creatinine-clearance-cockcroft-gault',
    name: 'Creatinine Clearance — Cockcroft-Gault',
    shortDescription: 'Estimate creatinine clearance using Cockcroft-Gault for drug dosing and renal assessment.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['creatinine clearance', 'cockcroft-gault', 'renal', 'kidney'],
    formula: 'CrCl = [(140 − age) × weight (kg) × 1.23 (male) or 1.04 (female)] / Scr (µmol/L)',
    inputs: [
      { id: 'age', label: 'Age', type: 'number', unitOptions: ['years'], min: 18, max: 120, step: '1' },
      { id: 'sex', label: 'Sex', type: 'select', unitOptions: ['Male', 'Female'] },
      { id: 'weight', label: 'Weight', type: 'number', unitOptions: ['kg', 'lb'], min: 30, max: 220, step: '0.1' },
      { id: 'creatinine', label: 'Serum Creatinine', type: 'number', unitOptions: ['mg/dL', 'µmol/L'], min: 0.2, max: 20, step: '0.01' }
    ],
    output: { label: 'Creatinine Clearance', unit: 'mL/min' },
    interpretation: [
      '≥90: Normal',
      '60–89: Mildly reduced',
      '30–59: Moderately reduced',
      '15–29: Severely reduced',
      '<15: Kidney failure range'
    ],
    references: [
      { label: 'Cockcroft-Gault equation', url: 'https://pubmed.ncbi.nlm.nih.gov/6053647/' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Use ideal or actual body weight based on muscle mass and obesity. Not identical to GFR.'
  },
  {
    id: 'fena',
    slug: 'fractional-excretion-of-sodium',
    name: 'Fractional Excretion of Sodium',
    shortDescription: 'Estimate fractional excretion of sodium to distinguish prerenal vs intrinsic renal injury.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['feNa', 'fractional excretion', 'sodium', 'renal'],
    formula: 'FeNa = (Urine Na × Plasma Cr) / (Plasma Na × Urine Cr) × 100',
    inputs: [
      { id: 'urineNa', label: 'Urine Sodium', type: 'number', unitOptions: ['mmol/L', 'mEq/L'], min: 1, max: 500, step: '0.1' },
      { id: 'plasmaNa', label: 'Plasma Sodium', type: 'number', unitOptions: ['mmol/L', 'mEq/L'], min: 120, max: 180, step: '0.1' },
      { id: 'urineCreatinine', label: 'Urine Creatinine', type: 'number', unitOptions: ['mg/dL', 'mmol/L'], min: 1, max: 3000, step: '0.1' },
      { id: 'plasmaCreatinine', label: 'Plasma Creatinine', type: 'number', unitOptions: ['mg/dL', 'µmol/L'], min: 0.1, max: 20, step: '0.01' }
    ],
    output: { label: 'Fractional Excretion of Sodium', unit: '%' },
    interpretation: [
      '<1%: Suggests prerenal azotemia',
      '1–2%: Indeterminate',
      '>2%: Suggests intrinsic renal injury'
    ],
    references: [
      { label: 'Fractional excretion of sodium review', url: 'https://pubmed.ncbi.nlm.nih.gov/2069465/' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Interpreted in context of volume status and diuretic use.'
  },
  {
    id: 'feurea',
    slug: 'fractional-excretion-of-urea',
    name: 'Fractional Excretion of Urea',
    shortDescription: 'Calculate fractional excretion of urea for patients on diuretics.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['feUrea', 'fractional excretion', 'urea', 'renal'],
    formula: 'FeUrea = (Urine Urea × Plasma Cr) / (Plasma Urea × Urine Cr) × 100',
    inputs: [
      { id: 'urineUrea', label: 'Urine Urea', type: 'number', unitOptions: ['mmol/L', 'mg/dL'], min: 1, max: 500, step: '0.1' },
      { id: 'plasmaUrea', label: 'Plasma Urea', type: 'number', unitOptions: ['mmol/L', 'mg/dL'], min: 1, max: 200, step: '0.1' },
      { id: 'urineCreatinine', label: 'Urine Creatinine', type: 'number', unitOptions: ['mg/dL', 'mmol/L'], min: 1, max: 3000, step: '0.1' },
      { id: 'plasmaCreatinine', label: 'Plasma Creatinine', type: 'number', unitOptions: ['mg/dL', 'µmol/L'], min: 0.1, max: 20, step: '0.01' }
    ],
    output: { label: 'Fractional Excretion of Urea', unit: '%' },
    interpretation: [
      '<35%: Suggests prerenal azotemia',
      '≥35%: Suggests intrinsic renal injury'
    ],
    references: [
      { label: 'FEUrea in diuretic use', url: 'https://pubmed.ncbi.nlm.nih.gov/10333907/' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Useful when diuretics may confound FeNa interpretation.'
  },
  {
    id: 'bun-creatinine-ratio',
    slug: 'bun-creatinine-ratio',
    name: 'BUN/Creatinine Ratio',
    shortDescription: 'Calculate the blood urea nitrogen to creatinine ratio for renal function assessment.',
    category: 'Renal',
    icon: 'activity',
    keywords: ['bun creatinine ratio', 'bun/cr', 'renal', 'kidney'],
    formula: 'BUN/Cr = BUN (mg/dL) / Creatinine (mg/dL)',
    inputs: [
      { id: 'bun', label: 'BUN', type: 'number', unitOptions: ['mg/dL', 'mmol/L'], min: 1, max: 150, step: '0.1' },
      { id: 'creatinine', label: 'Serum Creatinine', type: 'number', unitOptions: ['mg/dL', 'µmol/L'], min: 0.1, max: 20, step: '0.01' }
    ],
    output: { label: 'BUN/Creatinine Ratio', unit: 'ratio' },
    interpretation: [
      '<10: Low',
      '10–20: Normal',
      '>20: High; suggests prerenal azotemia or GI bleed'
    ],
    references: [
      { label: 'BUN/Cr ratio clinical use', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538272/' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Interpret with clinical findings and hydration status. Not diagnostic alone.'
  }
];
