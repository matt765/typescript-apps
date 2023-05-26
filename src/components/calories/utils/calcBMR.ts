import { CalcBMR } from '../types/types'

export const calcBMR = ({
  age,
  weight,
  height,
  gender,
  isImperial
}: CalcBMR) => {
  const LBS_TO_KG = 0.45
  const INCH_TO_CM = 2.54
  if (isImperial) {
    height = (Number(height) * INCH_TO_CM).toString()
    weight = (Number(weight) * LBS_TO_KG).toString()
  }
  if (gender === 'male') {
    return (88.4 + 13.4 * Number(weight) + 4.8 * Number(height) - 5.68 * Number(age)).toFixed(0)
  }
  return (447.6 + 9.25 * Number(weight) + 3.1 * Number(height) - 4.33 * Number(age)).toFixed(0)
}

