import type { CalculatorEntry } from '~/data/calculators';

export const urinalysisCalculators: CalculatorEntry[] = [
  {
    id: '24-hour-urine-creatinine',
    slug: '24-hour-urine-creatinine',
    name: '24-Hour Urine Creatinine',
    shortDescription:
      'Calculate total 24-hour urine creatinine excretion from concentration and volume.',
    category: 'Urinalysis',
    icon: 'activity',
    keywords: [
      '24 hour urine',
      'urine creatinine',
      'renal',
      'urinalysis'
    ],
    formula:
      'Total excretion = urine creatinine concentration × urine volume',

    inputs: [
      {
        id: 'urineCreatinine',
        label: 'Urine Creatinine',
        type: 'number',
        unitOptions: ['mg/dL', 'mmol/L'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter urine creatinine'
      },
      {
        id: 'volume',
        label: 'Urine Volume',
        type: 'number',
        unitOptions: ['mL', 'L'],
        min: 100,
        max: 10000,
        step: '1',
        placeholder: 'Enter 24-hour urine volume'
      }
    ],

    output: {
      label: '24-Hour Urine Creatinine',
      unit: 'mg/24h'
    },

    interpretation: [
      'Normal adult range: 800–2000 mg/24h in men and 600–1800 mg/24h in women',
      'Low values may indicate incomplete collection or reduced muscle mass',
      'High values may reflect high muscle mass or overcollection'
    ],

    references: [
      {
        label: 'Urine creatinine collection interpretation',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK538272/'
      }
    ],

    lastReviewed: '2026-08-07',

    clinicalNotes:
      'Ensure complete 24-hour collection for valid results. Use mg/dL times volume in dL to preserve units.'
  },

  {
    id: 'urine-protein-24-hour',
    slug: 'urine-protein-24-hour',
    name: 'Urine Protein 24-Hour',
    shortDescription:
      'Estimate 24-hour urine protein from concentration and collection volume.',
    category: 'Urinalysis',
    icon: 'activity',
    keywords: [
      'urine protein',
      '24 hour urine',
      'proteinuria',
      'renal'
    ],

    formula:
      'Protein excretion = urine protein concentration × urine volume',

    inputs: [
      {
        id: 'urineProtein',
        label: 'Urine Protein',
        type: 'number',
        unitOptions: ['mg/dL', 'g/L'],
        min: 1,
        max: 3000,
        step: '0.1',
        placeholder: 'Enter urine protein'
      },
      {
        id: 'volume',
        label: 'Urine Volume',
        type: 'number',
        unitOptions: ['mL', 'L'],
        min: 100,
        max: 10000,
        step: '1',
        placeholder: 'Enter 24-hour urine volume'
      }
    ],

    output: {
      label: '24-Hour Urine Protein',
      unit: 'mg/24h'
    },

    interpretation: [
      '<150 mg/24h: Normal',
      '150–299 mg/24h: Mild proteinuria',
      '≥300 mg/24h: Overt proteinuria'
    ],

    references: [
      {
        label: 'Urine protein excretion interpretation',
        url: 'https://www.kidney.org/atoz/content/proteinuria'
      }
    ],

    lastReviewed: '2026-08-07',

    clinicalNotes:
      'Use complete collection and consistent units. A spot albumin-to-creatinine ratio is often preferred clinically.'
  },

  {
    id: 'albumin-creatinine-ratio',
    slug: 'albumin-creatinine-ratio',
    name: 'Albumin Creatinine Ratio',
    shortDescription:
      'Calculate spot urine albumin-to-creatinine ratio for kidney damage screening.',
    category: 'Urinalysis',
    icon: 'activity',
    keywords: [
      'albumin creatinine ratio',
      'uacr',
      'urine albumin',
      'renal'
    ],

    formula:
      'ACR = urine albumin (mg) / urine creatinine (g)',

    inputs: [
      {
        id: 'urineAlbumin',
        label: 'Urine Albumin',
        type: 'number',
        unitOptions: ['mg/L', 'mg/dL'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter urine albumin'
      },
      {
        id: 'urineCreatinine',
        label: 'Urine Creatinine',
        type: 'number',
        unitOptions: ['mg/dL', 'mmol/L'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter urine creatinine'
      }
    ],

    output: {
      label: 'Albumin Creatinine Ratio',
      unit: 'mg/g'
    },

    interpretation: [
      '<30 mg/g: Normal to mildly increased',
      '30–300 mg/g: Moderately increased',
      '>300 mg/g: Severely increased'
    ],

    references: [
      {
        label: 'KDIGO CKD Evaluation and Management',
        url: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/'
      }
    ],

    lastReviewed: '2026-08-07',

    clinicalNotes:
      'Use a spot urine collection and consistent laboratory units. Confirm abnormal results with repeat testing before clinical staging.'
  },

  {
    id: 'protein-creatinine-ratio',
    slug: 'protein-creatinine-ratio',
    name: 'Protein Creatinine Ratio',
    shortDescription:
      'Estimate spot urine protein-to-creatinine ratio from urine protein and creatinine concentrations.',
    category: 'Urinalysis',
    icon: 'activity',
    keywords: [
      'protein creatinine ratio',
      'upcr',
      'urinalysis',
      'proteinuria'
    ],

    formula:
      'PCR = urine protein concentration / urine creatinine concentration',

    inputs: [
      {
        id: 'urineProtein',
        label: 'Urine Protein',
        type: 'number',
        unitOptions: ['mg/dL', 'g/L'],
        min: 1,
        max: 3000,
        step: '0.1',
        placeholder: 'Enter urine protein'
      },
      {
        id: 'urineCreatinine',
        label: 'Urine Creatinine',
        type: 'number',
        unitOptions: ['mg/dL', 'mmol/L'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter urine creatinine'
      }
    ],

    output: {
      label: 'Protein Creatinine Ratio',
      unit: 'mg/g'
    },

    interpretation: [
      '<150 mg/g: Normal',
      '150–500 mg/g: Mild proteinuria',
      '>500 mg/g: Significant proteinuria'
    ],

    references: [
      {
        label: 'Spot urine protein-creatinine ratio',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2919685/'
      }
    ],

    lastReviewed: '2026-08-07',

    clinicalNotes:
      'Useful for monitoring proteinuria when a 24-hour urine collection is impractical.'
  }
];