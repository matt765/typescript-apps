import {
  extendTheme, type ThemeConfig
} from '@chakra-ui/react'
import { colors } from './colors'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  styles: { global: { body: {
    fontFamily: 'Jost',
    backgroundColor: 'spinnerBg'
  } } },
  semanticTokens: { colors }
})
