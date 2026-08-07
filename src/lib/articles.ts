export type ArticleEntry = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readingTime: string;
  reviewedBy: string;
  status: string;
  body: string;
};

export const articles: ArticleEntry[] = [
  {
    slug: 'understanding-egfr',
    title: 'Understanding eGFR',
    description: 'A practical overview of estimated glomerular filtration rate and its role in kidney assessment.',
    date: '2026-08-07',
    updated: '2026-08-07',
    author: 'LabDecoded',
    category: 'Renal',
    tags: ['egfr', 'kidney', 'renal'],
    readingTime: '5 min',
    reviewedBy: 'LabDecoded',
    status: 'Published',
    body: `## What is eGFR?

Estimated glomerular filtration rate (eGFR) is an approximation of kidney filtration function calculated from serum biomarkers.

## Why eGFR matters

Clinicians use eGFR to stage chronic kidney disease, adjust medication dosing, and monitor renal function over time.

## Common equations

- CKD-EPI 2021 creatinine equation
- CKD-EPI creatinine-cystatin C equation

## Interpretation

eGFR values are interpreted together with clinical context, chronicity, and patient characteristics.
`
  }
];
