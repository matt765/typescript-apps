import {
  Button, useColorMode
} from '@chakra-ui/react'
import {
  MoonIcon, SunIcon
} from '@chakra-ui/icons'
import { ThemeToggleStyles } from './ThemeToggleStyles'

export const ThemeToggle = () => {
  const {
    colorMode, toggleColorMode
  } = useColorMode()
  return (
    <Button onClick={toggleColorMode} sx={ThemeToggleStyles}>
      {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
    </Button>
  )
}

