import React from 'react'
import styles from '../styles/CaloriesResult.module.scss' // Added

import { useCaloriesCounter } from '../utils/useCaloriesCounter'

export const CaloriesResult = () => {
  const {
    BMR, AMR
  } = useCaloriesCounter()

  if (!AMR && !BMR) {
    return null // Changed from <></> to null for clarity
  }

  return (
    <div className={styles.resultsContainer}> {/* Changed from Flex */}
      <p className={styles.resultsTitle}>Your results</p> {/* Changed from Text */}
      <div className={styles.resultsGroup}> {/* Changed from Flex */}
        <span className={styles.badge}> {/* Changed from Badge */}
          Total daily energy expenditure rate:
        </span>
        <p className={styles.resultValue}> {/* Changed from Text */}
          {AMR} Kcal
        </p>
        <span className={styles.badge}>Base metabolic rate: </span> {/* Changed from Badge */}
        <p className={styles.resultValue}> {/* Changed from Text */}
          {BMR} Kcal
        </p>
      </div>
    </div>
  )
}
