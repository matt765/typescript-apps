import * as React from 'react'
import NextLink from 'next/link'
import {
  Flex, Link
} from '@chakra-ui/react'
import {
  headerLinks, activeLink, link, headerLinksWrapper
} from './styles/Navbar.styles'
import { useRouter } from 'next/router'

export const Navbar: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <Flex justifyContent="center" sx={headerLinksWrapper}>
      <Flex sx={headerLinks}>
        <NextLink href="/email-verifier" passHref><Link style={pathname.includes('email-verifier') ? activeLink : link} _hover={{ boxShadow: 'outline' }}>
            E-mail Verifier
        </Link></NextLink>
        <NextLink href="/color-picker" passHref><Link style={pathname.includes('color-picker') ? activeLink : link} _hover={{ boxShadow: 'outline' }}>
            Color picker
        </Link></NextLink>
        <NextLink href="/users-list" passHref><Link style={pathname.includes('users-list') ? activeLink : link} _hover={{ boxShadow: 'outline' }}>
            List of users
        </Link></NextLink>
        <NextLink href="/beers" passHref><Link style={pathname.includes('beer') ? activeLink : link} _hover={{ boxShadow: 'outline' }}>
            Beers
        </Link></NextLink>
        <NextLink href="/weather" passHref><Link style={pathname.includes('weather') ? activeLink : link} _hover={{ boxShadow: 'outline' }}>
              Weather
        </Link></NextLink>
      </Flex>
    </Flex>
  )
}

