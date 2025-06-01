import { BmiHeadingComp } from './components/BmiHeading.comp'
import { BmiFormComp } from './components/BmiForm.comp'
import styles from './styles/Bmi.module.scss'

export const Bmi = () => {
  return (
    <div className={styles.bmiContainer}>
      <BmiHeadingComp />
      <BmiFormComp />
    </div>
  )
}
