import {
  Button, useColorMode
} from '@chakra-ui/react'
import {
  MoonIcon, SunIcon
} from '@chakra-ui/icons'

export const ThemeToggle = () => {
  const {
    colorMode, toggleColorMode
  } = useColorMode()
  return (
    <Button
      onClick={toggleColorMode}
      position="fixed"
      bottom={{
        base: '1rem',
        '2xl': '2rem'
      }}
      right={{
        base: '1rem',
        '2xl': '2.5rem'
      }}
      zIndex="99999"
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}
