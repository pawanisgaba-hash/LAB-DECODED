import type { CalculatorEntry } from '~/data/calculators';

export const oncologyCalculators: CalculatorEntry[] = [
  {
    id: 'roma-index',
    slug: 'roma-index',
    name: 'ROMA Index',
    shortDescription: 'Estimate the risk of ovarian malignancy using HE4 and CA-125 with menopausal status.',
    category: 'Oncology',
    icon: 'activity',
    keywords: ['roma', 'he4', 'ca125', 'ovarian', 'oncology'],
    formula: 'ROMA = exp(PI) / (1 + exp(PI)) × 100, where PI = -12.0 + 2.38 × ln(HE4) + 0.0626 × ln(CA125) + 1.1 × menopause',
    inputs: [
      { id: 'menopausalStatus', label: 'Menopausal Status', type: 'select', unitOptions: ['Premenopausal', 'Postmenopausal'] },
      { id: 'he4', label: 'HE4', type: 'number', unitOptions: ['pmol/L'], min: 1, max: 1000, step: '0.1' },
      { id: 'ca125', label: 'CA-125', type: 'number', unitOptions: ['U/mL'], min: 1, max: 1000, step: '0.1' }
    ],
    output: { label: 'ROMA Index', unit: '%' },
    interpretation: [
      'Low risk: below the menopausal-specific threshold',
      'High risk: above the menopausal-specific threshold',
      'Use alongside clinical exam, imaging, and pathology results'
    ],
    references: [
      { label: 'ROMA algorithm overview', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3038459/' }
    ],
    lastReviewed: '2026-08-07',
    clinicalNotes: 'ROMA is a risk stratification tool for epithelial ovarian cancer and should not be used alone for diagnosis.'
  }
];
