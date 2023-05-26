import {
  Flex, Heading, Text
} from '@chakra-ui/react'

export const CaloriesHeading = () =>
  <Flex as="header" flexDirection="column" alignItems="center">
    <Heading as="h1" fontWeight={300} fontSize="5xl" textAlign="center" mb="1rem">
      Calories Calculator
    </Heading>
    <Text fontSize="lg" textAlign="center">Input your measures and get your daily calories</Text>
  </Flex>

