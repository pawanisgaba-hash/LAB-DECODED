import type { CalculatorEntry } from '~/data/calculators';

export const liverCalculators: CalculatorEntry[] = [

  {
    id: 'fib-4',

    slug: 'fib-4',

    name: 'FIB-4 Index',

    shortDescription:
      'Estimate the likelihood of advanced liver fibrosis using age, AST, ALT and platelet count.',

    category: 'Liver',

    icon: 'activity',

    keywords: [
      'fib-4',
      'fib4',
      'liver fibrosis',
      'fibrosis',
      'ast',
      'alt',
      'platelets'
    ],

    formula:
      'FIB-4 = Age × AST / (Platelets × √ALT)',

    inputs: [

      {
        id: 'age',
        label: 'Age',
        type: 'number',
        unitOptions: ['years'],
        min: 18,
        max: 120,
        step: '1',
        placeholder: 'Enter age'
      },

      {
        id: 'ast',
        label: 'AST',
        type: 'number',
        unitOptions: ['U/L'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter AST'
      },

      {
        id: 'alt',
        label: 'ALT',
        type: 'number',
        unitOptions: ['U/L'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter ALT'
      },

      {
        id: 'plt',
        label: 'Platelet Count',
        type: 'number',
        unitOptions: ['×10⁹/L'],
        min: 1,
        max: 1000,
        step: '1',
        placeholder: 'Enter platelet count'
      }

    ],

    output: {
      label: 'FIB-4 Index',
      unit: ''
    },

    interpretation: [

      '<1.3: Low risk of advanced fibrosis',

      '1.3–2.67: Intermediate risk',

      '>2.67: Higher risk of advanced fibrosis'

    ],

    references: [

      {
        label: 'FIB-4 clinical use',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26653048/'
      }

    ],

    lastReviewed: '2026-08-07',

    clinicalNotes:
      'FIB-4 is a non-invasive fibrosis risk assessment tool and should be interpreted with clinical context.'
  },


  {
    id: 'apri',

    slug: 'apri',

    name: 'APRI Score',

    shortDescription:
      'Calculate the AST to Platelet Ratio Index for liver fibrosis assessment.',

    category: 'Liver',

    icon: 'activity',

    keywords: [
      'apri',
      'ast platelet ratio',
      'liver fibrosis',
      'fibrosis'
    ],

    formula:
      'APRI = [(AST / AST ULN) / Platelet count] × 100',

    inputs: [

      {
        id: 'ast',
        label: 'AST',
        type: 'number',
        unitOptions: ['U/L'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter AST'
      },

      {
        id: 'alt',
        label: 'ALT',
        type: 'number',
        unitOptions: ['U/L'],
        min: 1,
        max: 2000,
        step: '0.1',
        placeholder: 'Enter ALT'
      },

      {
        id: 'plt',
        label: 'Platelet Count',
        type: 'number',
        unitOptions: ['×10⁹/L'],
        min: 1,
        max: 1000,
        step: '1',
        placeholder: 'Enter platelet count'
      }

    ],

    output: {
      label: 'APRI',
      unit: ''
    },

    interpretation: [

      '<0.5: Low likelihood of significant fibrosis',

      '0.5–1.5: Intermediate range',

      '>1.5: Increased likelihood of significant fibrosis'

    ],

    references: [],

    lastReviewed: '2026-08-07',

    clinicalNotes:
      'Interpret using the laboratory AST upper reference limit and clinical context.'
  },


  {
    id: 'ast-alt-ratio',

    slug: 'ast-alt-ratio',

    name: 'AST/ALT Ratio',

    shortDescription:
      'Calculate the ratio of AST to ALT.',

    category: 'Liver',

    icon: 'activity',

    keywords: [
      'ast alt ratio',
      'de ritis ratio',
      'liver'
    ],

    formula:
      'AST/ALT ratio = AST ÷ ALT',

    inputs: [

      {
        id: 'ast',
        label: 'AST',
        type: 'number',
        unitOptions: ['U/L'],
        min: 1,
        max: 2000,
        step: '0.1'
      },

      {
        id: 'alt',
        label: 'ALT',
        type: 'number',
        unitOptions: ['U/L'],
        min: 1,
        max: 2000,
        step: '0.1'
      }

    ],

    output: {
      label: 'AST/ALT Ratio',
      unit: ''
    },

    interpretation: [

      '<1: ALT predominance',

      '≈1: Similar AST and ALT activity',

      '>2: May be seen in certain clinical settings including alcoholic liver disease'

    ],

    references: [],

    lastReviewed: '2026-08-07',

    clinicalNotes:
      'AST/ALT ratio is not diagnostic by itself.'
  }

];