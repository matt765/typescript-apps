import {
  extendTheme, type ThemeConfig
} from '@chakra-ui/react'

import { colors } from './colors'
import { Text } from './components/text'
import { Input } from './components/input'

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
  styles: { global: {
    body: {
      fontFamily: 'Jost',
      backgroundColor: 'black'
    },
    '*': {
      scrollbarWidth: 'thin',
      scrollbarColor: 'red',
      '&::-webkit-scrollbar': { width: '10px' },
      '&::-webkit-scrollbar-thumb': {
        background: 'green',
        _hover: { background: 'rgb(255,255,255,0.1)' },
        borderRadius: '30px',
        border: 'none'
      },
      '&::-webkit-scrollbar-track': { background: 'red' }
    },
    ':root': {
      scrollbarColor: 'red blue',
      scrollbarWidth: 'thin'
    },
    '::-webkit-scrollbar-corner': { background: 'rgba(0,0,0,0)' },
    '::-webkit-input-placeholder': { color: 'rgb(255,255,255,0.4) !important' },
    'option, optgroup': { '-webkit-appearance': 'none !important' }
  } },
  components: {
    Text,
    Input
  },
  semanticTokens: { colors },
  layerStyles: { transparentInput: {
    backgroundColor: 'inputBg',
    borderWidth: '2px',
    borderRadius: '10px',
    borderColor: 'red !important',
    borderStyle: 'solid'
  } }
})
