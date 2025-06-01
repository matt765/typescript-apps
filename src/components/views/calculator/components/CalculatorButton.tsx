import React from 'react'
import styles from '../styles/CalculatorButton.module.scss'

interface ButtonProps {
  label: string;
  clickHandler: () => void;
};

export const CalculatorButton = ({
  label, clickHandler
}: ButtonProps) => {
  let buttonClass = styles.calculatorButton;
  if (['÷', '*', '-', '+'].includes(label)) {
    buttonClass = `${styles.calculatorButton} ${styles.operatorButton}`;
  } else if (label === '=') {
    buttonClass = `${styles.calculatorButton} ${styles.equalsButton}`;
  }

  return (
    <button
      onClick={clickHandler}
      className={buttonClass}
    >
      {label}
    </button>
  )
}

