export type CalculatorInput = {
  id: string;
  label: string;
  type: 'number' | 'select';

  /**
   * For number inputs this represents the available units.
   * For select inputs this represents the choices.
   */
  unitOptions?: string[];

  defaultValue?: number | string;

  min?: number;
  max?: number;
  step?: string;

  placeholder?: string;
};

export type CalculatorReference = {
  label: string;
  url?: string;
};

export type CalculatorEntry = {
  id: string;
  slug: string;
  name: string;

  shortDescription: string;

  category: string;

  icon: string;

  keywords: string[];

  featured?: boolean;

  formula: string;

  inputs: CalculatorInput[];

  output: {
    label: string;
    unit: string;
  };

  interpretation: string[];

  references: CalculatorReference[];

  lastReviewed: string;

  clinicalNotes: string;
};

export {
  calculatorDefinitions as calculators,
  calculatorDefinitions,
  getCalculatorBySlug,
  getCalculatorById,
  getCalculatorsByCategory,
  getFeaturedCalculators,
  getCalculatorCategories,
  searchCalculators,
  calculatorCount
} from '~/lib/calculators/registry';