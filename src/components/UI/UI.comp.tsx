import { ReactNode } from 'react'
import {
  Flex, SimpleGrid
} from '@chakra-ui/react'
import { Navbar } from './components/navbar/Navbar.comp'
import { Logo } from './components/logo/Logo.comp'
import { Header } from './styles/UI.styles'
import { GitlabIcon } from './components/GitlabIcon.comp'
import { MobileNavbar } from './components/mobileNavbar/MobileNavbar.comp'
import { ThemeToggle } from './components/themeToggle/ThemeToggle'

export const UI = ({ children }: { children: ReactNode }) =>
  <>
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="max-content"
      padding={0}
    >
      <Flex
        alignItems="center"
        direction="column"
        w="100%"
        h="100%"
        padding="1rem"
        id="app"
      >
        <SimpleGrid sx={Header}>
          <MobileNavbar/>
          <Logo/>
          <Navbar/>
          <GitlabIcon/>
        </SimpleGrid>
        <Flex justifyContent="center"
          width="100%"
          height="100%"
          padding="1.5rem"
        >
          <>
            {children}
            <ThemeToggle/>
          </>
        </Flex>
      </Flex>
    </Flex>
  </>

