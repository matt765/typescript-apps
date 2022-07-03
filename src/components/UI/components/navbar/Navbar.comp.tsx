import * as React from 'react'
import Link from 'next/link'
import {
  Link as ChakraLink, Flex
} from '@chakra-ui/react'
import { Github } from '@chakra-icons/bootstrap'
import {
  headerLinks, headerGitlabIicon, activeLink, link
} from './styles/Navbar.styles'
import { useRouter } from 'next/router'

export const Navbar: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <Flex justifyContent="center">
      <Flex sx={headerLinks}>
        <Link href="/email-verifier"><a style={pathname.includes('email-verifier') ? activeLink : link}>
            E-mail Verifier
        </a></Link>
        <Link href="/color-picker"><a style={pathname.includes('color-picker') ? activeLink : link}>
            Color picker
        </a></Link>
        <Link href="/users-list" ><a style={pathname.includes('users-list') ? activeLink : link}>
            List of users
        </a></Link>
        <Link href="/beers" ><a style={pathname.includes('beer') ? activeLink : link}>
            Beers
        </a></Link>
      </Flex>
      <Flex alignItems="center">
        <ChakraLink href="https://github.com/matt765/typescript-apps" sx={headerGitlabIicon} isExternal>
          <Github/>
        </ChakraLink>
      </Flex>
    </Flex>
  )
}

