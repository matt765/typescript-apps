// components/Calculator.tsx
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'

type ButtonType = {
  label: string;
  clickHandler: () => void;
};

const CalculatorButton: React.FC<ButtonType> = ({
  label, clickHandler
}) =>
  <Button
    onClick={clickHandler}
    w="100%"
    h="5rem"
    fontSize="2rem"
    backgroundColor="#425062"
    color="white"
    _hover={{ backgroundColor: '#5d6a7a' }}
    borderRadius="5px"
  >
    {label}
  </Button>

export const Calculator = () => {
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

    // Fix for when the last character is a dot and is replaced with an operator
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
        const result = Math.round(operation(prev, current) * 100) / 100

        setScreenValue(result.toString())
        setFirstValue(result.toString())
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

  return (
    <Container
      backgroundColor="#3a4655"
      borderRadius="md"
      boxShadow="xl"
      px="0"
      maxW="22rem"
      mt="-2rem"
    >
      <Box minHeight="3rem" textAlign="center" fontSize="2rem" mb={0}>
        <Input
          id="screen"
          type="text"
          value={screenValue}
          readOnly
          backgroundColor="#556475"
          color="white"
          textAlign="center"
          p={2}
          variant="unstyled"
          _focus={{ outline: 'none' }}
          h="6rem"
          fontSize="1.5rem"
          borderRadius="5px 5px 0 0"
        />
      </Box>
      <Flex>
        <Button
          onClick={() => clear()}
          w="50%"
          h="5rem"
          fontSize="1.5rem"
          borderRadius={0}
          bg="rgb(0,0,0,0)"
          color="white"
          _hover={{ backgroundColor: '#455262' }}
        >
          C
        </Button>
        <Button
          onClick={() => deleteLast()}
          w="50%"
          h="5rem"
          fontSize="1.5rem"
          color="rgb(65, 138, 167)"
          borderRadius={0}
          bg="rgb(0,0,0,0)"
          _hover={{ backgroundColor: '#455262' }}
        >
          ⌫
        </Button>
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={1}>
        {[
          '7',
          '8',
          '9',
          '÷',
          '4',
          '5',
          '6',
          '*',
          '1',
          '2',
          '3',
          '-',
          '.',
          '0',
          '=',
          '+'
        ].map((label) =>
          <CalculatorButton
            key={label}
            label={label}
            clickHandler={() => {
              if (isNaN(parseFloat(label)) && label !== '=') {
                addOperator(label)
              } else if (label === '=') {
                calculate()
              } else {
                addToValue(label)
              }
            }}
          />
        )}
      </Grid>
    </Container>
  )
}
