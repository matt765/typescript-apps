import { CalcAMR } from '../types/types'

export const calcAMR = ({
  BMR, activity
}: CalcAMR) => (Number(BMR) * Number(activity)).toFixed(0)

