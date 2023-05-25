import { BmiFormComp } from './components/BmiForm.comp'
import { Flex } from '@chakra-ui/react'
import { HealthHeading } from '../health/HealthHeading.comp'

export const Bmi = () => {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      alignItems="center"
      w="100%"
      h="100%"
      pt="3%"
    >
      <HealthHeading title={'BMI Calculator'} description={'Input your measures and get your BMI'}/>
      <BmiFormComp />
    </Flex>
  )
}
