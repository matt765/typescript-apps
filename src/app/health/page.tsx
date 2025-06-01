import NextLink from 'next/link'

import styles from './HealthPage.module.scss'

const HealthPage = () => {
  return (
    <nav
      className={styles.healthNav}
    >
      <div className={styles.navLink}>
        <NextLink href="/health/calories" passHref>
          Calories calculator
        </NextLink>
      </div>
      <div className={styles.navLink}>
        <NextLink href="/health/bmi" passHref>
          BMI calculator
        </NextLink>
      </div>
    </nav>
  )
}

export default HealthPage
