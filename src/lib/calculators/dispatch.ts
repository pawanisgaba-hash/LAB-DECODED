export type CalculatorDispatchResult = {
  value: number;
  unit: string;
};

function toNumber(
  value: unknown
): number | null {

  const parsed =
    typeof value === 'string'
      ? parseFloat(value)
      : typeof value === 'number'
        ? value
        : NaN;

  return Number.isFinite(parsed)
    ? parsed
    : null;
}
import { calculateEgfrCkdEpi2021, calculateEgfrCkdEpiCombined } from './egfr';
import { calculateCockcroftGault } from './cockcroftGault';
import { calculateRomaIndex } from './roma';
import { calculateFreeAndrogenIndex } from './freeAndrogenIndex';
import { calculateFib4 } from './fib4';
import { calculateApri } from './apri';
import { calculateAstAltRatio } from './astAltRatio';
import { calculateChildPugh } from './childPugh';
import { calculateMeld } from './meld';
import { calculateMeldNa } from './meldNa';
import { calculateNafldFibrosis } from './nafldFibrosis';
import { calculateAnionGap } from './anionGap';
import { calculateBmi } from './bmi';
import { calculateCorrectedCalcium } from './correctedCalcium';
import { calculateHomaIr } from './homaIr';
import { calculateWellsPe } from './wellsPe';
import { calculateCorrectedSodium } from './correctedSodium';
import { calculateSerumOsmolality } from './serumOsmolality';
import { calculateOsmolalGap } from './osmolalGap';
import { calculateTransferrinSaturation } from './transferrinSaturation';
import { calculateAnc } from './anc';
import { calculateAec } from './aec';
import { calculateReticulocyteProductionIndex } from './reticulocyteProductionIndex';
import { calculateCorrectedReticulocyteCount } from './correctedReticulocyteCount';
import { calculateMentzerIndex } from './mentzerIndex';
import { calculateRdwIndex } from './rdwIndex';
import { calculateRdwMcvRatio } from './rdwMcvRatio';
import { calculateTibc } from './tibc';
import { calculateTransferrin } from './transferrin';
import { calculateFePotassium } from './fePotassium';
import { calculateFePhosphate } from './fePhosphate';
import { calculateFreeWaterClearance } from './freeWaterClearance';
import { calculateQtc } from './qtc';
import { calculateCha2ds2VascScore } from './cha2ds2VascScore';
import { calculateHasBledScore } from './hasBledScore';
import { calculateHeartScore } from './heartScore';
import { calculateCurb65 } from './curb65';
import { calculateQsofa } from './qsofa';
import { calculateSofaScore } from './sofaScore';
import { calculateApacheIi } from './apacheIi';
import { calculateGcs } from './gcs';
import { calculateSirsCriteria } from './sirsCriteria';
import { calculateLdlCholesterol } from './ldlCholesterol';
import { calculateNonHdlCholesterol } from './nonHdlCholesterol';
import { mgDlToMmolL, mmolLToMgDl, gDlToGL, gLToGdl } from './conversions';

export type CalculatorDispatchResult = {
  value: number;
  unit: string;
};

function toNumber(value: unknown): number | null {
  const parsed = typeof value === 'string' ? parseFloat(value) : typeof value === 'number' ? value : NaN;
  return Number.isFinite(parsed) ? parsed : null;
}

export function calculateByCalculatorId(calculatorId: string, inputs: Record<string, unknown>): CalculatorDispatchResult | null {
  switch (calculatorId) {
    case 'egfr-ckd-epi-2021':
      return calculateEgfrCkdEpi2021({ age: toNumber(inputs.age) ?? 0, sex: (inputs.sex as 'Male' | 'Female') ?? 'Male', creatinine: toNumber(inputs.creatinine) ?? 0, creatinineUnit: (inputs.creatinineUnit as 'mg/dL' | 'µmol/L') ?? 'mg/dL' });
    case 'egfr-ckd-epi-cysc':
      return calculateEgfrCkdEpiCombined({ age: toNumber(inputs.age) ?? 0, sex: (inputs.sex as 'Male' | 'Female') ?? 'Male', creatinine: toNumber(inputs.creatinine) ?? 0, creatinineUnit: (inputs.creatinineUnit as 'mg/dL' | 'µmol/L') ?? 'mg/dL', cystatinC: toNumber(inputs.cystatinC) ?? 0, cystatinUnit: (inputs.cystatinUnit as 'mg/L' | 'mg/dL') ?? 'mg/L' });
    case 'creatinine-clearance-cockcroft-gault':
      return calculateCockcroftGault({ age: toNumber(inputs.age) ?? 0, sex: (inputs.sex as 'Male' | 'Female') ?? 'Male', weight: toNumber(inputs.weight) ?? 0, weightUnit: (inputs.weightUnit as 'kg' | 'lb') ?? 'kg', creatinine: toNumber(inputs.creatinine) ?? 0, creatinineUnit: (inputs.creatinineUnit as 'mg/dL' | 'µmol/L') ?? 'mg/dL' });
    case 'roma-index':
      return calculateRomaIndex({ menopausalStatus: (inputs.menopausalStatus as 'Premenopausal' | 'Postmenopausal') ?? 'Premenopausal', he4: toNumber(inputs.he4) ?? 0, ca125: toNumber(inputs.ca125) ?? 0 });
    case 'free-androgen-index':
      return calculateFreeAndrogenIndex({ totalTestosterone: toNumber(inputs.totalTestosterone) ?? 0, testosteroneUnit: (inputs.totalTestosteroneUnit as 'nmol/L' | 'ng/dL') ?? 'nmol/L', shbg: toNumber(inputs.shbg) ?? 0, shbgUnit: (inputs.shbgUnit as 'nmol/L' | 'µg/L') ?? 'nmol/L' });
    case 'fib-4':
      return calculateFib4(toNumber(inputs.age) ?? 0, toNumber(inputs.ast) ?? 0, toNumber(inputs.alt) ?? 0, toNumber(inputs.plt) ?? 0);
    case 'apri':
      return calculateApri(toNumber(inputs.ast) ?? 0, toNumber(inputs.alt) ?? 0, toNumber(inputs.plt) ?? 0);
    case 'ast-alt-ratio':
      return calculateAstAltRatio(toNumber(inputs.ast) ?? 0, toNumber(inputs.alt) ?? 0);
    case 'child-pugh':
      return calculateChildPugh(toNumber(inputs.albumin) ?? 0, toNumber(inputs.bilirubin) ?? 0, toNumber(inputs.inr) ?? 0, toNumber(inputs.ascites) ?? 0, toNumber(inputs.encephalopathy) ?? 0);
    case 'meld':
      return calculateMeld(toNumber(inputs.creatinine) ?? 0, toNumber(inputs.bilirubin) ?? 0, toNumber(inputs.inr) ?? 0);
    case 'meld-na':
      return calculateMeldNa(toNumber(inputs.meld) ?? 0, toNumber(inputs.sodium) ?? 0);
    case 'nafld-fibrosis':
      return calculateNafldFibrosis(toNumber(inputs.age) ?? 0, toNumber(inputs.bmi) ?? 0, toNumber(inputs.hyperglycemia) ?? 0, toNumber(inputs.ast) ?? 0, toNumber(inputs.alt) ?? 0, toNumber(inputs.platelets) ?? 0, toNumber(inputs.albumin) ?? 0);
    case '24-hour-urine-creatinine': {
      const urineCreatinine = toNumber(inputs.urineCreatinine) ?? 0;
      const volume = toNumber(inputs.volume) ?? 0;
      const urineCreatinineUnit = (inputs.urineCreatinineUnit as 'mg/dL' | 'mmol/L') ?? 'mg/dL';
      const volumeUnit = (inputs.volumeUnit as 'mL' | 'L') ?? 'mL';
      const urineCreatinineMgDl = urineCreatinineUnit === 'mmol/L' ? mmolLToMgDl(urineCreatinine) : urineCreatinine;
      const volumeDl = volumeUnit === 'L' ? volume * 10 : volume / 100;
      const value = urineCreatinineMgDl * volumeDl;
      return { value: Number(value.toFixed(0)), unit: 'mg/24h' };
    }
    case 'urine-protein-24-hour': {
      const urineProtein = toNumber(inputs.urineProtein) ?? 0;
      const volume = toNumber(inputs.volume) ?? 0;
      const urineProteinUnit = (inputs.urineProteinUnit as 'mg/dL' | 'g/L') ?? 'mg/dL';
      const volumeUnit = (inputs.volumeUnit as 'mL' | 'L') ?? 'mL';
      const urineProteinMgDl = urineProteinUnit === 'g/L' ? gLToGdl(urineProtein) : urineProtein;
      const volumeDl = volumeUnit === 'L' ? volume * 10 : volume / 100;
      const value = urineProteinMgDl * volumeDl;
      return { value: Number(value.toFixed(0)), unit: 'mg/24h' };
    }
    case 'albumin-creatinine-ratio': {
      const albumin = toNumber(inputs.urineAlbumin) ?? 0;
      const creatinine = toNumber(inputs.urineCreatinine) ?? 0;
      const albuminUnit = (inputs.urineAlbuminUnit as 'mg/L' | 'mg/dL') ?? 'mg/L';
      const creatinineUnit = (inputs.urineCreatinineUnit as 'mg/dL' | 'mmol/L') ?? 'mg/dL';
      const albuminMgL = albuminUnit === 'mg/dL' ? albumin * 10 : albumin;
      const creatinineGPerL = creatinineUnit === 'mmol/L' ? mmolLToMgDl(creatinine) / 1000 : creatinine / 100;
      const value = albuminMgL / creatinineGPerL;
      return { value: Number(value.toFixed(1)), unit: 'mg/g' };
    }
    case 'protein-creatinine-ratio': {
      const protein = toNumber(inputs.urineProtein) ?? 0;
      const creatinine = toNumber(inputs.urineCreatinine) ?? 0;
      const proteinUnit = (inputs.urineProteinUnit as 'mg/dL' | 'g/L') ?? 'mg/dL';
      const creatinineUnit = (inputs.urineCreatinineUnit as 'mg/dL' | 'mmol/L') ?? 'mg/dL';
      const proteinMgDl = proteinUnit === 'g/L' ? gLToGdl(protein) : protein;
      const creatinineMgDl = creatinineUnit === 'mmol/L' ? mmolLToMgDl(creatinine) : creatinine;
      const value = (proteinMgDl * 10) / (creatinineMgDl / 100);
      return { value: Number(value.toFixed(0)), unit: 'mg/g' };
    }
    case 'fena': {
      const urineNa = toNumber(inputs.urineNa) ?? 0;
      const plasmaNa = toNumber(inputs.plasmaNa) ?? 0;
      const urineCreatinine = toNumber(inputs.urineCreatinine) ?? 0;
      const plasmaCreatinine = toNumber(inputs.plasmaCreatinine) ?? 0;
      const value = ((urineNa * plasmaCreatinine) / (plasmaNa * urineCreatinine)) * 100;
      return { value: Number(value.toFixed(2)), unit: '%' };
    }
    case 'feurea': {
      const urineUrea = toNumber(inputs.urineUrea) ?? 0;
      const plasmaUrea = toNumber(inputs.plasmaUrea) ?? 0;
      const urineCreatinine = toNumber(inputs.urineCreatinine) ?? 0;
      const plasmaCreatinine = toNumber(inputs.plasmaCreatinine) ?? 0;
      const value = ((urineUrea * plasmaCreatinine) / (plasmaUrea * urineCreatinine)) * 100;
      return { value: Number(value.toFixed(2)), unit: '%' };
    }
    case 'bun-creatinine-ratio': {
      const bun = toNumber(inputs.bun) ?? 0;
      const creatinine = toNumber(inputs.creatinine) ?? 0;
      const value = bun / creatinine;
      return { value: Number(value.toFixed(2)), unit: 'ratio' };
    }
    case 'anion-gap':
      return calculateAnionGap({ sodium: toNumber(inputs.sodium) ?? 0, chloride: toNumber(inputs.chloride) ?? 0, bicarbonate: toNumber(inputs.bicarbonate) ?? 0 });
    case 'bmi':
      return calculateBmi({ weight: toNumber(inputs.weight) ?? 0, height: toNumber(inputs.height) ?? 0, weightUnit: (inputs.weightUnit as 'kg' | 'lb') ?? 'kg', heightUnit: (inputs.heightUnit as 'm' | 'cm' | 'in') ?? 'm' });
    case 'corrected-calcium':
      return calculateCorrectedCalcium({ calcium: toNumber(inputs.calcium) ?? 0, albumin: toNumber(inputs.albumin) ?? 0 });
    case 'homa-ir':
      return calculateHomaIr({ fastingGlucose: toNumber(inputs.fastingGlucose) ?? 0, fastingInsulin: toNumber(inputs.fastingInsulin) ?? 0 });
    case 'wells-pe':
      return calculateWellsPe({ clinicalSignsDvt: toNumber(inputs.clinicalSignsDvt) ?? 0, peMostLikely: toNumber(inputs.peMostLikely) ?? 0, heartRate: toNumber(inputs.heartRate) ?? 0, immobilization: toNumber(inputs.immobilization) ?? 0, previousDvtPe: toNumber(inputs.previousDvtPe) ?? 0, hemoptysis: toNumber(inputs.hemoptysis) ?? 0, malignancy: toNumber(inputs.malignancy) ?? 0 });
    case 'corrected-sodium':
      return calculateCorrectedSodium({ sodium: toNumber(inputs.sodium) ?? 0, glucose: toNumber(inputs.glucose) ?? 0, bun: toNumber(inputs.bun) ?? 0 });
    case 'serum-osmolality':
      return calculateSerumOsmolality({ sodium: toNumber(inputs.sodium) ?? 0, glucose: toNumber(inputs.glucose) ?? 0, bun: toNumber(inputs.bun) ?? 0 });
    case 'osmolal-gap':
      return calculateOsmolalGap({ measuredOsmolality: toNumber(inputs.measuredOsmolality) ?? 0, calculatedOsmolality: toNumber(inputs.calculatedOsmolality) ?? 0 });
    case 'transferrin-saturation':
      return calculateTransferrinSaturation({ serumIron: toNumber(inputs.serumIron) ?? 0, tibc: toNumber(inputs.tibc) ?? 0 });
    case 'anc':
      return calculateAnc({ wbc: toNumber(inputs.wbc) ?? 0, neutrophils: toNumber(inputs.neutrophils) ?? 0 });
    case 'aec':
      return calculateAec({ wbc: toNumber(inputs.wbc) ?? 0, eosinophils: toNumber(inputs.eosinophils) ?? 0 });
    case 'rpi':
      return calculateReticulocyteProductionIndex({ reticulocyteCount: toNumber(inputs.reticulocyteCount) ?? 0, maturationIndex: toNumber(inputs.maturationIndex) ?? 0 });
    case 'corrected-reticulocyte-count':
      return calculateCorrectedReticulocyteCount({ reticulocytePercent: toNumber(inputs.reticulocytePercent) ?? 0, hematocrit: toNumber(inputs.hematocrit) ?? 0 });
    case 'mentzer-index':
      return calculateMentzerIndex({ mcv: toNumber(inputs.mcv) ?? 0, rbc: toNumber(inputs.rbc) ?? 0 });
    case 'rdw-index':
      return calculateRdwIndex({ rdwPercent: toNumber(inputs.rdwPercent) ?? 0, meanCellVolume: toNumber(inputs.meanCellVolume) ?? 0 });
    case 'rdw-mcv-ratio':
      return calculateRdwMcvRatio({ rdwPercent: toNumber(inputs.rdwPercent) ?? 0, mcv: toNumber(inputs.mcv) ?? 0 });
    case 'tibc':
      return calculateTibc({ serumIron: toNumber(inputs.serumIron) ?? 0, transferrinSaturation: toNumber(inputs.transferrinSaturation) ?? 0 });
    case 'transferrin':
      return calculateTransferrin({ tibc: toNumber(inputs.tibc) ?? 0 });
    case 'fe-potassium':
      return calculateFePotassium({ urinePotassium: toNumber(inputs.urinePotassium) ?? 0, plasmaPotassium: toNumber(inputs.plasmaPotassium) ?? 0, urineCreatinine: toNumber(inputs.urineCreatinine) ?? 0, plasmaCreatinine: toNumber(inputs.plasmaCreatinine) ?? 0 });
    case 'fe-phosphate':
      return calculateFePhosphate({ urinePhosphate: toNumber(inputs.urinePhosphate) ?? 0, plasmaPhosphate: toNumber(inputs.plasmaPhosphate) ?? 0, urineCreatinine: toNumber(inputs.urineCreatinine) ?? 0, plasmaCreatinine: toNumber(inputs.plasmaCreatinine) ?? 0 });
    case 'free-water-clearance':
      return calculateFreeWaterClearance({ urineOutput: toNumber(inputs.urineOutput) ?? 0, urineOsmolality: toNumber(inputs.urineOsmolality) ?? 0, plasmaOsmolality: toNumber(inputs.plasmaOsmolality) ?? 0 });
    case 'qtc':
      return calculateQtc({ qtMs: toNumber(inputs.qtMs) ?? 0, heartRate: toNumber(inputs.heartRate) ?? 0, formula: (inputs.formula as 'bazett' | 'fridericia') ?? 'bazett' });
    case 'cha2ds2-vasc':
      return calculateCha2ds2VascScore({ age: toNumber(inputs.age) ?? 0, heartFailure: Number(inputs.heartFailure) || 0, hypertension: Number(inputs.hypertension) || 0, diabetes: Number(inputs.diabetes) || 0, strokeTia: Number(inputs.strokeTia) || 0, vascularDisease: Number(inputs.vascularDisease) || 0, female: Number(inputs.female) || 0 });
    case 'has-bled':
      return calculateHasBledScore({ hypertension: Number(inputs.hypertension) || 0, renalDisease: Number(inputs.renalDisease) || 0, liverDisease: Number(inputs.liverDisease) || 0, stroke: Number(inputs.stroke) || 0, bleedingHistory: Number(inputs.bleedingHistory) || 0, labAbnormality: Number(inputs.labAbnormality) || 0, elderly: Number(inputs.elderly) || 0, drugsAlcohol: Number(inputs.drugsAlcohol) || 0 });
    case 'heart-score':
      return calculateHeartScore({ history: Number(inputs.history) || 0, ecg: Number(inputs.ecg) || 0, age: Number(inputs.age) || 0, riskFactors: Number(inputs.riskFactors) || 0, troponin: Number(inputs.troponin) || 0 });
    case 'curb-65':
      return calculateCurb65({ confusion: Number(inputs.confusion) || 0, urea: toNumber(inputs.urea) ?? 0, respiratoryRate: toNumber(inputs.respiratoryRate) ?? 0, systolicBp: toNumber(inputs.systolicBp) ?? 0, diastolicBp: toNumber(inputs.diastolicBp) ?? 0, age: toNumber(inputs.age) ?? 0 });
    case 'qsofa':
      return calculateQsofa({ respiratoryRate: toNumber(inputs.respiratoryRate) ?? 0, alteredMentalStatus: Number(inputs.alteredMentalStatus) || 0, systolicBp: toNumber(inputs.systolicBp) ?? 0 });
    case 'sofa':
      return calculateSofaScore({ pao2: toNumber(inputs.pao2) ?? 0, platelets: toNumber(inputs.platelets) ?? 0, bilirubin: toNumber(inputs.bilirubin) ?? 0, map: toNumber(inputs.map) ?? 0, gcs: toNumber(inputs.gcs) ?? 0, creatinine: toNumber(inputs.creatinine) ?? 0, urineOutput: toNumber(inputs.urineOutput) ?? 0 });
    case 'apache-ii':
      return calculateApacheIi({ age: toNumber(inputs.age) ?? 0, temp: toNumber(inputs.temp) ?? 0, map: toNumber(inputs.map) ?? 0, heartRate: toNumber(inputs.heartRate) ?? 0, respiratoryRate: toNumber(inputs.respiratoryRate) ?? 0, sodium: toNumber(inputs.sodium) ?? 0, potassium: toNumber(inputs.potassium) ?? 0, creatinine: toNumber(inputs.creatinine) ?? 0, hematocrit: toNumber(inputs.hematocrit) ?? 0, wbc: toNumber(inputs.wbc) ?? 0, gcs: toNumber(inputs.gcs) ?? 0 });
    case 'gcs':
      return calculateGcs({ eye: toNumber(inputs.eye) ?? 0, verbal: toNumber(inputs.verbal) ?? 0, motor: toNumber(inputs.motor) ?? 0 });
    case 'sirs':
      return calculateSirsCriteria({ tempC: toNumber(inputs.tempC) ?? 0, heartRate: toNumber(inputs.heartRate) ?? 0, respiratoryRate: toNumber(inputs.respiratoryRate) ?? 0, wbc: toNumber(inputs.wbc) ?? 0 });
    case 'ldl-cholesterol':
      return calculateLdlCholesterol({ totalCholesterol: toNumber(inputs.totalCholesterol) ?? 0, hdlCholesterol: toNumber(inputs.hdlCholesterol) ?? 0, triglycerides: toNumber(inputs.triglycerides) ?? 0 });
    case 'non-hdl-cholesterol':
      return calculateNonHdlCholesterol({ totalCholesterol: toNumber(inputs.totalCholesterol) ?? 0, hdlCholesterol: toNumber(inputs.hdlCholesterol) ?? 0 });
    default:
  console.error(
    `Unknown calculator ID: ${calculatorId}`,
    inputs
  );
  return null;
  }
}
