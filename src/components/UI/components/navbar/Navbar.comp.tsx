import * as React from 'react'
import Link from 'next/link'
import { Flex } from '@chakra-ui/react'
import {
  headerLinks, activeLink, link, headerLinksWrapper
} from './styles/Navbar.styles'
import { useRouter } from 'next/router'

export const Navbar: React.FC = () => {
  const { pathname } = useRouter()
  return (
    <Flex justifyContent="center" sx={headerLinksWrapper}>
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
        <Link href="/weather" ><a style={pathname.includes('weather') ? activeLink : link}>
              Weather
        </a></Link>
      </Flex>
    </Flex>
  )
}

