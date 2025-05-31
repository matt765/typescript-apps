import {
  Container,
  Grid
} from '@chakra-ui/react'
import React from 'react'

import { CalculatorButton } from './components/CalculatorButton'
import { CalculatorHeader } from './components/CalculatorHeader'
import { useCalculator } from './useCalculator'

export const Calculator = () => {
  const {
    screenValue, addToValue, addOperator, calculate, clear, deleteLast
  } = useCalculator()

  return (
    <Container
      backgroundColor="calculatorBg"
      borderRadius="md"
      boxShadow="xl"
      py="0"
      mx={{
        base: '0rem',
        md: '0'
      }}
      maxW={{
        base: '21.5rem',
        md: '22.5rem'
      }}
      mt={{
        base: '1rem',
        md: '-2rem'
      }}
      mb={{
        base: '2rem',
        md: 'unset'
      }}
      px="0"

    >
      <CalculatorHeader
        screenValue={screenValue}
        clear={clear}
        deleteLast={deleteLast}
      />
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
