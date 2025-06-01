import React from 'react'

import { CalculatorButton } from './components/CalculatorButton'
import { CalculatorHeader } from './components/CalculatorHeader'
import { useCalculator } from './useCalculator'
import styles from './styles/Calculator.module.scss'

export const Calculator = () => {
  const {
    screenValue, addToValue, addOperator, calculate, clear, deleteLast
  } = useCalculator()

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '.', '0', '=', '+'
  ];

  return (
    <div className={styles.calculatorContainer}>
      <CalculatorHeader
        screenValue={screenValue}
        clear={clear}
        deleteLast={deleteLast}
      />
      <div className={styles.gridContainer}>
        {buttons.map((label) =>
          <CalculatorButton
            key={label}
            label={label}
            clickHandler={() => {
              if (label === 'C') {
                clear();
              } else if (label === '⌫') {
                deleteLast();
              } else if (['÷', '*', '-', '+'].includes(label)) {
                addOperator(label)
              } else if (label === '=') {
                calculate()
              } else {
                addToValue(label)
              }
            }}
          />
        )}
      </div>
    </div>
  )
}
