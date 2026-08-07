export type CalculationResult = {
  value: number;
  unit: string;
};

export function calculateApacheIi(input: { age: number; temp: number; map: number; heartRate: number; respiratoryRate: number; sodium: number; potassium: number; creatinine: number; hematocrit: number; wbc: number; gcs: number }): CalculationResult | null {
  const ageScore = input.age >= 55 ? 1 : 0;
  const tempScore = input.temp >= 41 || input.temp < 33 ? 4 : input.temp >= 39 ? 3 : input.temp >= 38.5 ? 2 : input.temp >= 36 ? 1 : 0;
  const mapScore = input.map < 70 ? 2 : 0;
  const hrScore = input.heartRate >= 180 ? 4 : input.heartRate >= 140 ? 3 : input.heartRate >= 110 ? 2 : input.heartRate >= 70 ? 1 : 0;
  const rrScore = input.respiratoryRate >= 35 ? 4 : input.respiratoryRate >= 25 ? 3 : input.respiratoryRate >= 12 ? 1 : 0;
  const sodiumScore = input.sodium >= 160 || input.sodium < 120 ? 4 : input.sodium >= 155 ? 3 : input.sodium >= 150 ? 2 : input.sodium >= 145 ? 1 : 0;
  const potassiumScore = input.potassium >= 7 || input.potassium < 3 ? 4 : input.potassium >= 6 ? 3 : input.potassium >= 5.5 ? 2 : input.potassium >= 3.5 ? 1 : 0;
  const creatinineScore = input.creatinine >= 3.5 ? 4 : input.creatinine >= 2 ? 3 : input.creatinine >= 1.5 ? 2 : input.creatinine >= 1 ? 1 : 0;
  const hematocritScore = input.hematocrit < 20 ? 2 : 0;
  const wbcScore = input.wbc >= 40 || input.wbc < 1 ? 4 : input.wbc >= 20 ? 3 : input.wbc >= 15 ? 2 : input.wbc >= 3 ? 1 : 0;
  const gcsScore = input.gcs < 15 ? 15 - input.gcs : 0;
  const total = ageScore + tempScore + mapScore + hrScore + rrScore + sodiumScore + potassiumScore + creatinineScore + hematocritScore + wbcScore + gcsScore;
  return { value: Number(total.toFixed(0)), unit: 'points' };
}
