import {
  extendTheme, type ThemeConfig
} from '@chakra-ui/react'

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
  semanticTokens: { colors: {
    primaryBg: {
      default: 'white',
      _dark: '#3f4450'
    },
    primaryBgFullScreen: {
      default: 'white',
      _dark: '#3f4450'
    },
    secondaryBg: {
      default: '#BCC5DD',
      _dark: '#2f323a'
    },
    mobileNavbarBg: {
      default: 'rgb(107, 169, 225, 0)',
      _dark: '#383d47'
    },
    contentBg: {
      default: 'white',
      _dark: '#3f4450'
    },
    spinnerBg: {
      default: 'white',
      _dark: '#2f323a'
    },
    contentFullScreenBg: {
      default: '#f6f6f6',
      _dark: '#3f4450'
    },
    activeBg: {
      default: 'rgb(107, 169, 225, 0.1)',
      _dark: 'rgb(107, 169, 225, 0.1)'
    },
    grayHoverBg: {
      default: 'rgb(0,0,0,0.04)',
      _dark: 'rgb(107, 169, 225, 0.07)'
    },
    primaryText: {
      default: '#25272a',
      _dark: 'white'
    },
    secondaryText: {
      default: 'rgb(0,0,0,0.4)',
      _dark: 'rgb(255,255,255,0.7)'
    },
    coloredText: {
      default: '#2683d9',
      _dark: '#7eb3e5'
    },
    coloredTextLight: {
      default: '#5ca2e2',
      _dark: '#5ca2e2'
    },
    coloredButtonBg: {
      default: '#3784c8',
      _dark: '#2683d9'
    },
    coloredButtonText: {
      default: 'rgb(255,255,255,0.9)',
      _dark: 'rgb(255,255,255,0.9)'
    },
    coloredButtonBgHover: {
      default: '#3784c8',
      _dark: 'rgb(37, 116, 114)'
    },
    transparentButtonBg: {
      default: 'rgba(45, 53, 80, 0)',
      _dark: 'rgba(45, 53, 80, 0)'
    },
    transparentButtoBgHover: {
      default: 'rgb(255,255,255,0.1)',
      _dark: 'rgb(255,255,255,0.1)'
    },
    titleColor: {
      default: 'rgb(255,255,255,0.1)',
      _dark: 'rgb(255,255,255,0.1)'
    },
    borderGray: {
      default: 'rgb(0,0,0,0.2)',
      _dark: 'rgb(255,255,255,0.15)'
    },
    grayBorderLight: {
      default: 'rgb(0,0,0,0.1)',
      _dark: '#444850'
    },
    borderMain: {
      default: 'rgb(0,0,0,0.2)',
      _dark: 'rgb(255,255,255,0.15)'
    },
    grayIcon: {
      default: 'rgb(99, 115, 129)',
      _dark: 'rgb(255,255,255,0.5)'
    },
    hamburgerIcon: {
      default: 'rgba(168, 176, 183, 0.8)',
      _dark: 'rgb(255,255,255,0.4)'
    }
  } }
})
