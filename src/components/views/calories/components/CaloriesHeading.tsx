import {
  Flex, Heading, Text
} from '@chakra-ui/react'

export const CaloriesHeading = () =>
  <Flex as="header" flexDirection="column" alignItems="center">
    <Text variant="h2" as="h2" mb="1rem" textAlign="center">
      Calories Calculator
    </Text>
    <Text variant="primaryText" textAlign="center">Input your measures and get your daily calories</Text>
  </Flex>

