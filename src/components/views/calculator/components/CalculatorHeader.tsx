import React from 'react'
import styles from '../styles/CalculatorHeader.module.scss'

interface CalculatorHeaderProps {
    screenValue: string;
    clear: () => void;
    deleteLast: () => void;
}

export const CalculatorHeader = ({
  screenValue, clear, deleteLast
}: CalculatorHeaderProps) => {
  return (
    <>
      <div className={styles.screenContainer}>
        <input
          id="screen"
          type="text"
          value={screenValue}
          readOnly
          className={styles.screenInput}
        />
      </div>
      <div className={styles.buttonsContainer}>
        <button
          onClick={clear}
          className={`${styles.headerButton} ${styles.clearButton}`}
        >
          C
        </button>
        <button
          onClick={deleteLast}
          className={`${styles.headerButton} ${styles.deleteButton}`}
        >
          ⌫
        </button>
      </div>
    </>
  )
}
