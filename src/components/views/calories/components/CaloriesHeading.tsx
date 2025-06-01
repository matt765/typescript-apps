import styles from '../styles/CaloriesHeading.module.scss' // Added

export const CaloriesHeading = () => (
  <header className={styles.caloriesHeadingContainer}> {/* Changed from Flex, as="header" */}
    <h2 className={styles.headingText}> {/* Changed from Text, as="h2" */}
      Calories Calculator
    </h2>
    <p className={styles.subHeadingText}> {/* Changed from Text */}
      Input your measures and get your daily calories
    </p>
  </header>
)

