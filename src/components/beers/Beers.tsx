import * as React from 'react'
import {
  Box, Heading
} from '@chakra-ui/react'

export const Beers = ({
  children, ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
  <Box as={'section'} {...rest} maxWidth={1200} margin={'0 auto'}>
    <>
      <Box as={'header'} mb={10}>
        <Heading as={'h1'} size={'3xl'} fontWeight={500}>View our beers</Heading>
        <Heading as={'h2'} size={'xl'} fontWeight={300}>Choose your beverage and find out the details</Heading>
      </Box >
      {children}
    </>
  </Box>

