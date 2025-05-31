import { useState } from 'react'

interface UseCalculator {
  screenValue: string,
  addToValue: (value: string) => void,
  addOperator: (operator: string) => void,
  calculate: () => void,
  clear: () => void,
  deleteLast: () => void
};

export const useCalculator = (): UseCalculator => {
  const [screenValue, setScreenValue] = useState('')
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [valueCheck, setValueCheck] = useState(1)
  const [currentOperator, setCurrentOperator] = useState('')

  const addToValue = (value: string) => {
    const lastChar = screenValue.slice(-1)
    if (screenValue.length >= 20 && !isNaN(parseFloat(lastChar))) {
      return
    }
    if (valueCheck === 0) {
      clear()
    }
    if (valueCheck === 1) {
      setScreenValue((prevScreenValue) => prevScreenValue + value)
      setFirstValue((prevFirstValue) => prevFirstValue + value)
    } else {
      setSecondValue((prevSecondValue) => prevSecondValue + value)
      setScreenValue((prevScreenValue) => prevScreenValue + value)
    }
  }

  const addOperator = (operator: string) => {
    const lastChar = screenValue.slice(-1)
    const secondLastChar = screenValue.slice(-2, -1)

    if (
      operator === '.' &&
      (lastChar === '.' ||
        lastChar === operator && secondLastChar === operator)
    ) {
      return
    }

    if (isNaN(parseFloat(lastChar))) {
      if (operator === '.' && lastChar !== '.') {
        setScreenValue((prevScreenValue) => prevScreenValue + operator)
      } else if (operator !== '.') {
        setScreenValue(
          (prevScreenValue) => prevScreenValue.slice(0, -1) + operator
        )
        if (valueCheck === 1) {
          setFirstValue((prevFirstValue) => prevFirstValue.slice(0, -1))
        } else if (valueCheck === 2) {
          setSecondValue((prevSecondValue) => prevSecondValue.slice(0, -1))
        }
      }
    } else if (valueCheck === 1 && operator !== '.') {
      setScreenValue((prevScreenValue) => prevScreenValue + operator)
      setValueCheck(2)
      setCurrentOperator(operator)
    } else if (valueCheck === 2 && operator !== '.') {
      calculate()
    } else if (!isNaN(parseFloat(screenValue.slice(-1)))) {
      const isFirstValue = valueCheck === 1
      const valueToUpdate = isFirstValue ? firstValue : secondValue
      const setValue = isFirstValue ? setFirstValue : setSecondValue

      if (!valueToUpdate.includes('.')) {
        setScreenValue((prevScreenValue) => prevScreenValue + operator)
        setValue((prevValue) => prevValue + operator)
      }
    }

    if (lastChar === '.' && operator !== '.') {
      setValueCheck(2)
      setCurrentOperator(operator)
    }
  }

  type OperationsType = {
    [key: string]: (a: number, b: number) => number;
  };

  const operations: OperationsType = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '÷': (a, b) => a / b
  }

  const calculate = () => {
    if (secondValue !== '') {
      const prev = parseFloat(firstValue)
      const current = parseFloat(secondValue)
      const operator = screenValue.slice(
        firstValue.length,
        firstValue.length + 1
      )

      if (operator in operations) {
        const operation = operations[operator]
        const calculationResult = operation(prev, current)

        let result = calculationResult.toFixed(9)
        result = parseFloat(result).toString()

        setScreenValue(result)
        setFirstValue(result)
        setSecondValue('')
        setValueCheck(1)
      }
    }
  }

  const clear = () => {
    setScreenValue('')
    setFirstValue('')
    setSecondValue('')
    setValueCheck(1)
  }

  const deleteLast = () => {
    const updateScreenValue = (prevScreenValue: string) =>
      prevScreenValue.slice(0, -1)
    if (valueCheck === 0) {
      setScreenValue(updateScreenValue)
      setFirstValue(updateScreenValue)
      setSecondValue('')
      setValueCheck(1)
    } else if (valueCheck === 1) {
      setScreenValue(updateScreenValue)
      setFirstValue((prevFirstValue) => prevFirstValue.slice(0, -1))
    } else if (valueCheck === 2) {
      setScreenValue(updateScreenValue)
      setSecondValue((prevSecondValue) => prevSecondValue.slice(0, -1))
    }
  }
  return {
    screenValue,
    addToValue,
    addOperator,
    calculate,
    clear,
    deleteLast
  }
}
