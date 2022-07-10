import {
  extendTheme, type ThemeConfig
} from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const config: ThemeConfig = { initialColorMode: 'light' }

const theme = extendTheme({
  config,
  colors:{ brand: { 500: '#00d2ff' } },
  components:{ Button: {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: { primary: (props: StyleFunctionProps) => ({
      bgGradient: 'linear(to-l, #00d2ff, #3a7bd5)',
      backgroundSize: '100%',
      transition: 'background 250ms ease-in',
      color: '#fff',
      borderRadius: '3rem',
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      _hover:{ backgroundSize: '140%' }
    }) },
    // The default `size` or `variant` values
    defaultProps: {}
    //
  } }

})

export { theme }
