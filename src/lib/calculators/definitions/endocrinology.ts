import type { CalculatorEntry } from '~/data/calculators';

export const endocrinologyCalculators: CalculatorEntry[] = [
  {
    id: 'free-androgen-index',
    slug: 'free-androgen-index',
    name: 'Free Androgen Index',
    shortDescription: 'Estimate the free androgen index from total testosterone and SHBG levels.',
    category: 'Endocrinology',
    icon: 'activity',
    keywords: ['free androgen index', 'fai', 'testosterone', 'shbg', 'endocrinology'],
    formula: 'FAI = (Total testosterone / SHBG) × 100',
    inputs: [
      { id: 'totalTestosterone', label: 'Total Testosterone', type: 'number', unitOptions: ['nmol/L', 'ng/dL'], min: 0.1, max: 100, step: '0.1' },
      { id: 'shbg', label: 'SHBG', type: 'number', unitOptions: ['nmol/L', 'µg/L'], min: 1, max: 200, step: '0.1' }
    ],
    output: { label: 'Free Androgen Index', unit: '' },
    interpretation: [
      'Elevated FAI suggests higher androgen activity',
      'Low FAI suggests lower androgen activity',
      'Interpret with clinical context and sex-specific reference ranges'
    ],
    references: [
      { label: 'Free androgen index in endocrine practice', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC522055/' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'FAI is commonly used in evaluation of androgen excess and hirsutism.'
  },
  {
    id: 'homa-ir',
    slug: 'homa-ir',
    name: 'HOMA-IR',
    shortDescription: 'Estimate insulin resistance from fasting glucose and insulin.',
    category: 'Endocrinology',
    icon: 'activity',
    keywords: ['homa', 'insulin resistance', 'glucose', 'insulin'],
    formula: 'HOMA-IR = (Glucose × Insulin) / 405',
    inputs: [
      { id: 'fastingGlucose', label: 'Fasting Glucose', type: 'number', unitOptions: ['mg/dL'], min: 40, max: 400, step: '0.1' },
      { id: 'fastingInsulin', label: 'Fasting Insulin', type: 'number', unitOptions: ['µIU/mL'], min: 1, max: 200, step: '0.1' }
    ],
    output: { label: 'HOMA-IR', unit: '' },
    interpretation: [
      'Higher values suggest greater insulin resistance',
      'Interpret with clinical context and lab reference ranges'
    ],
    references: [{ label: 'HOMA model overview', url: 'https://doi.org/10.1007/BF00280883' }],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'Commonly used in metabolic syndrome and diabetes research.'
  }
];
