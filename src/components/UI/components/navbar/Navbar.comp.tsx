import * as React from 'react'
import Link from 'next/link'
import {
  Link as ChakraLink, Flex, Box
} from '@chakra-ui/react'
import { Github } from '@chakra-icons/bootstrap'
import {
  headerLinks, headerGitlabIicon
} from './styles/Navbar.styles'

export const Navbar: React.FC = () => {
  return (
    <Flex justifyContent="center">
      <Flex sx={headerLinks}>
        <Link href="/email-verifier">E-mail Verifier</Link>
        <Link href="/color-picker">Color picker</Link>
        <Link href="/users-list">List of users</Link>
        <Link href="/beers">Beers</Link>
      </Flex>
      <Flex alignItems="center">
        <ChakraLink href="https://github.com/matt765/typescript-apps" sx={headerGitlabIicon} isExternal>
          <Github/>
        </ChakraLink>
      </Flex>
    </Flex>
  )
}

