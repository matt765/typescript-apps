import { BmiHeadingComp } from './components/BmiHeading.comp'
import { BmiFormComp } from './components/BmiForm.comp'
import { Flex } from '@chakra-ui/react'

export const Bmi = () => {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      alignItems="center"
      w="100%"
      h="100%"
      pt="7%"
    >
      <BmiHeadingComp />
      <BmiFormComp />
    </Flex>
  )
}
