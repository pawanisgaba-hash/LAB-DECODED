import type { CalculatorEntry } from '~/data/calculators';

import { renalCalculators } from './definitions/renal';
import { urinalysisCalculators } from './definitions/urinalysis';
import { oncologyCalculators } from './definitions/oncology';
import { endocrinologyCalculators } from './definitions/endocrinology';

import { liverCalculators } from './definitions/liver';
import { hematologyCalculators } from './definitions/hematology';
import { electrolytesCalculators } from './definitions/electrolytes';
import { cardiologyCalculators } from './definitions/cardiology';
import { criticalCareCalculators } from './definitions/criticalCare';
import { lipidCalculators } from './definitions/lipid';


/**
 * MASTER CALCULATOR REGISTRY
 *
 * Every CalculatorEntry imported here becomes:
 *
 * 1. Visible on /calculators
 * 2. Available through /calculators/[slug]
 * 3. Searchable
 * 4. Available to the calculator engine
 */

export const calculatorDefinitions: CalculatorEntry[] = [

  ...renalCalculators,

  ...urinalysisCalculators,

  ...oncologyCalculators,

  ...endocrinologyCalculators,

  ...liverCalculators,

  ...hematologyCalculators,

  ...electrolytesCalculators,

  ...cardiologyCalculators,

  ...criticalCareCalculators,

  ...lipidCalculators,

];


/**
 * Remove duplicate IDs.
 */
const uniqueCalculators = new Map<string, CalculatorEntry>();

for (const calculator of calculatorDefinitions) {

  if (!uniqueCalculators.has(calculator.id)) {

    uniqueCalculators.set(
      calculator.id,
      calculator
    );

  } else {

    console.warn(
      `[LabDecoded] Duplicate calculator ID: ${calculator.id}`
    );

  }

}


/**
 * Final calculator list.
 */
export const calculators: CalculatorEntry[] = [
  ...uniqueCalculators.values()
];


/**
 * Find by slug.
 */
export function getCalculatorBySlug(
  slug: string
): CalculatorEntry | undefined {

  return calculators.find(
    calculator =>
      calculator.slug === slug
  );

}


/**
 * Find by ID.
 */
export function getCalculatorById(
  id: string
): CalculatorEntry | undefined {

  return calculators.find(
    calculator =>
      calculator.id === id
  );

}


/**
 * Get calculators by category.
 */
export function getCalculatorsByCategory(
  category: string
): CalculatorEntry[] {

  const searchCategory =
    category.trim().toLowerCase();

  return calculators.filter(
    calculator =>
      calculator.category
        .trim()
        .toLowerCase() === searchCategory
  );

}


/**
 * Featured calculators.
 */
export function getFeaturedCalculators(): CalculatorEntry[] {

  return calculators.filter(
    calculator =>
      calculator.featured === true
  );

}


/**
 * Get categories.
 */
export function getCalculatorCategories(): string[] {

  return [
    ...new Set(
      calculators.map(
        calculator =>
          calculator.category
      )
    )
  ];

}


/**
 * Search calculators.
 */
export function searchCalculators(
  query: string
): CalculatorEntry[] {

  const searchTerm =
    query.trim().toLowerCase();

  if (!searchTerm) {

    return calculators;

  }

  return calculators.filter(
    calculator => {

      const searchableText = [

        calculator.name,

        calculator.shortDescription,

        calculator.category,

        calculator.slug,

        ...calculator.keywords

      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(
        searchTerm
      );

    }
  );

}


/**
 * Total number of calculators.
 */
export const calculatorCount =
  calculators.length;