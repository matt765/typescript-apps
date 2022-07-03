import { ReactNode } from 'react'
import {
  Flex, SimpleGrid
} from '@chakra-ui/react'
import { Navbar } from './components/navbar/Navbar.comp'
import { Logo } from './components/logo/Logo.comp'
import { Header } from './styles/UI.styles'
import { GitlabIcon } from './components/GitlabIcon.comp'
import { MobileNavbar } from './components/mobileNavbar/MobileNavbar.comp'

export const UI = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        backgroundColor="#f0f0f0"
        width="100vw"
        height="100%"
        padding={0}
      >
        <Flex
          alignItems="center"
          direction="column"
          w="100%"
          h="100%"
          backgroundColor="#ffffff"
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
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

