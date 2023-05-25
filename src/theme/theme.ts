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
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '1xl': '88.75em', // 1420px
    '2xl': '102em', // 1632px
    '3xl': '110em' // 1760px
  },
  styles: { global: { body: {
    fontFamily: 'Jost',
    backgroundColor: 'spinnerBg'
  } } },
  semanticTokens: { colors }
})
