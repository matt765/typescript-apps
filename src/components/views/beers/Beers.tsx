import * as React from 'react'
import {
  Box, Heading, Text
} from '@chakra-ui/react'

export const Beers = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) =>
  <Box as="section" {...rest} maxH="100%" p="3rem" color="primaryText" borderRadius={{
    base: '0',
    xl: '15px'
  }}>
    <Box as="header" mb={10}>
      <Text variant ="h1" as="h1" size="3xl" fontWeight={300} mb="1rem">
        View our beers
      </Text>
      <Text variant ="h3" as="h3" fontWeight={300}>
        Choose your beverage and find out the details
      </Text>
    </Box>
    {children}
  </Box>

