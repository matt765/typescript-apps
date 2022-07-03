import {
  extendTheme, type ThemeConfig
} from '@chakra-ui/react'

const config: ThemeConfig = { initialColorMode: 'light' }

const theme = extendTheme({ config })

export { theme }
