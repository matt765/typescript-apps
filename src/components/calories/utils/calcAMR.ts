interface CalcARM {
    BMR: string
    activity: string
}

export const calcAMR = ({
  BMR, activity
}: CalcARM) => (Number(BMR) * Number(activity)).toFixed(0)

