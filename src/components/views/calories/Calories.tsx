import * as React from 'react'
import styles from './styles/Calories.module.scss' // Added

import { CaloriesProvider } from './utils/useCaloriesCounter'
import { CaloriesHeading } from './components/CaloriesHeading'
import { CaloriesForm } from './components/CaloriesForm'
import { CaloriesResult } from './components/CaloriesResult'

export const CaloriesComp = () => {
  return (
    <CaloriesProvider>
      <main className={styles.caloriesContainer}> {/* Changed from Flex */}
        <CaloriesHeading />
        <CaloriesForm />
        <CaloriesResult />
      </main>
    </CaloriesProvider>
  )
}
