export type CategoryEntry = {
  slug: string;
  name: string;
  description: string;
  keywords: string[];
};

export const categories: CategoryEntry[] = [
  { slug: 'renal', name: 'Renal', description: 'Calculators for kidney function, filtration, and fluid balance.', keywords: ['egfr', 'creatinine', 'dialysis', 'urine'] },
  { slug: 'liver', name: 'Liver', description: 'Scores and indices for liver fibrosis, synthetic function, and hepatic injury.', keywords: ['fib-4', 'apri', 'meld', 'child-pugh'] },
  { slug: 'diabetes', name: 'Diabetes', description: 'Glucose, insulin resistance, HbA1c and metabolic control calculators.', keywords: ['hba1c', 'homa', 'glucose', 'insulin'] },
  { slug: 'lipids', name: 'Lipids', description: 'Lipid profile calculators and cardiovascular risk-related indices.', keywords: ['ldl', 'hdl', 'cholesterol', 'triglycerides'] },
  { slug: 'electrolytes', name: 'Electrolytes', description: 'Acid-base, osmolality and corrected electrolyte calculations.', keywords: ['anion gap', 'osmolality', 'calcium', 'sodium'] },
  { slug: 'hematology', name: 'Hematology', description: 'Blood count indices, reticulocyte metrics and immune cell ratios.', keywords: ['anc', 'nlr', 'platelet ratio', 'reticulocyte'] },
  { slug: 'endocrinology', name: 'Endocrinology', description: 'Hormone, body composition and reproductive hormone calculations.', keywords: ['testosterone', 'bmi', 'bsa', 'androgen'] },
  { slug: 'oncology', name: 'Oncology', description: 'Risk scoring and tumor marker tools for oncology and reproductive medicine.', keywords: ['roma', 'psa', 'ovarian', 'cancer'] },
  { slug: 'urinalysis', name: 'Urinalysis', description: 'Spot urine and 24-hour urine calculators for protein, albumin and creatinine.', keywords: ['urine', 'protein', 'albumin', 'collection'] },
  { slug: 'immunology', name: 'Immunology', description: 'Markers and ratios for immune function and inflammatory response.', keywords: ['igg', 'ige', 'neutrophil'] },
  { slug: 'molecular-diagnostics', name: 'Molecular Diagnostics', description: 'Foundational calculators for molecular test interpretation and assay performance.', keywords: ['pcr', 'ct', 'sensitivity'] },
  { slug: 'nutrition', name: 'Nutrition', description: 'Nutritional indices and body composition estimates.', keywords: ['bmi', 'bsa', 'body surface area'] },
  { slug: 'reproductive-medicine', name: 'Reproductive Medicine', description: 'Pregnancy dating, ovarian markers, and fertility-related calculations.', keywords: ['pregnancy', 'gestational age', 'roma'] },
  { slug: 'acid-base', name: 'Acid-Base', description: 'Acid-base balance and metabolic compensation calculators.', keywords: ['winter formula', 'delta gap', 'anion gap'] },
  { slug: 'general-laboratory', name: 'General Laboratory', description: 'Common lab conversions and general clinical laboratory calculators.', keywords: ['conversion', 'unit', 'reference'] }
];
