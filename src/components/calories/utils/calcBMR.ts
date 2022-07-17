import { Gender } from '../types/Gender.type'

interface CalcBMR {
    age: string;
    weight: string;
    height: string;
    gender: Gender
}

export const calcBMR = ({
  age, weight, height, gender
}: CalcBMR) => {
  if (gender === 'male') {
    // eslint-disable-next-line no-magic-numbers
    return (88.4 + 13.4 * Number(weight) + 4.8 * Number(height) - 5.68 * Number(age)).toFixed(0)
  }
  // eslint-disable-next-line no-magic-numbers
  return (447.6 + 9.25 * Number(weight) + 3.1 * Number(height) - 4.33 * Number(age)).toFixed(0)
}

