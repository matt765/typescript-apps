interface CalcBMI {
    height: string
    weight: string
    isImperial: boolean
}

export const calcBMI = ({
  height, weight, isImperial
}: CalcBMI) => {
  if (isImperial) {
    // eslint-disable-next-line no-magic-numbers
    return (703 * Number(weight) / Math.pow(Number(height), 2)).toFixed(2)
  }

  // eslint-disable-next-line no-magic-numbers
  return (Number(weight) / Math.pow(Number(height) / 100, 2)).toFixed(2)
}
