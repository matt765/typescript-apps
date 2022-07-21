import { CalcARM } from '../interface/BMR.interface'

export const calcAMR = ({
  BMR, activity
}: CalcARM) => (Number(BMR) * Number(activity)).toFixed(0)

