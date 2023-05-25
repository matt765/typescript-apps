import {
  Box, Heading
} from '@chakra-ui/react'

export const BeersHeading = () =>

  <Box as={'header'} mb={4} p={4}>
    <Heading as={'h1'} size="xl" fontWeight={300}>View our beers</Heading>
    <Heading as={'h2'} size="md" fontWeight={300}>Choose your beverage and find out the details</Heading>
  </Box >

