interface CalcBMI {
  height: string
  weight: string
  isImperial: boolean
}

export const calcBMI = ({
  height, weight, isImperial
}: CalcBMI) => {
  if (isImperial) {
    return (703 * Number(weight) / Math.pow(Number(height), 2)).toFixed(2)
  }
  return (Number(weight) / Math.pow(Number(height) / 100, 2)).toFixed(2)
}
