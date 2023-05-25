import {
  DetailedHTMLProps, HTMLAttributes
} from 'react'
import { Box } from '@chakra-ui/react'
import { BeersHeading } from './components/BeersHeading'

export const Beers = ({
  children, ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
  <Box as={'section'} {...rest} maxH="100%">
    <BeersHeading/>
    {children}
  </Box>

