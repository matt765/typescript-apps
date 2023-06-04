import type { ComponentStyleConfig } from '@chakra-ui/react'
import { Heading } from './heading'

export const Text: ComponentStyleConfig = { variants: {
  primaryText: {
    fontSize: {
      base: '1.1rem',
      lg: '1.1rem'
    },
    fontWeight: 400,
    color: 'primaryText'
  },
  primaryTextLarge: {
    fontSize: {
      base: '1.1rem',
      lg: '1.2rem'
    },
    fontWeight: 400,
    color: 'primaryText'
  },
  secondaryText: {
    fontSize: {
      base: '1.4rem',
      lg: '1rem'
    },
    fontWeight: 400,
    color: 'welcomePrimaryText'
  },
  inputLabel: {
    fontSize: {
      base: '1.1rem',
      lg: '1rem'
    },
    fontWeight: 400,
    color: 'primaryText'
  },
  ...Heading

} }
