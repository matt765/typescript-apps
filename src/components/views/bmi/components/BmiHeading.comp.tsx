import styles from '../styles/BmiHeading.module.scss'

export const BmiHeadingComp = () => {
  return (
    <header className={styles.bmiHeader}>
      <h1 className={styles.mainHeading}>
        BMI Calculator
      </h1>
      <p className={styles.subHeading}>
        Input your measures and get your BMI
      </p>
    </header>
  )
}
