import React from 'react'
import {
  Badge, Flex, Text
} from '@chakra-ui/react'

import { useCaloriesCounter } from '../utils/useCaloriesCounter'

export const CaloriesResult = () => {
  const {
    BMR, AMR
  } = useCaloriesCounter()

  if (!AMR && !BMR) {
    return <></>
  }

  return (
    <Flex flexDirection="column" alignItems="center" pb="3rem" pt="1rem">
      <Text fontSize="4xl" color="primaryText">Your results</Text>
      <Flex flexDirection="column" alignItems="center" mt={4} gap={2}>
        <Badge textTransform="capitalize" color="primaryText">
          Total daily energy expenditure rete:
        </Badge>
        <Text display="flex" alignItems="center" fontSize="2xl" color="primaryText">
          {AMR} Kcal
        </Text>
        <Badge textTransform="capitalize" color="primaryText">Base metabolic rete: </Badge>
        <Text display="flex" alignItems="center" fontSize="2xl" color="primaryText">
          {BMR} Kcal
        </Text>
      </Flex>
    </Flex>
  )
}
