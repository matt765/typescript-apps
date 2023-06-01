import {
  Container,
  Grid
} from '@chakra-ui/react'
import React from 'react'

import { CalculatorButton } from './CalculatorButton'
import { CalculatorHeader } from './CalculatorHeader'
import { useCalculator } from './useCalculator'

export const Calculator = () => {
  const {
    screenValue, addToValue, addOperator, calculate, clear, deleteLast
  } = useCalculator()

  return (
    <Container
      backgroundColor="#3a4655"
      borderRadius="md"
      boxShadow="xl"
      px="0"
      maxW="22rem"
      mt="-2rem"
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
