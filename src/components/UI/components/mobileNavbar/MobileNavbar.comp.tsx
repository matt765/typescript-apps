import * as React from 'react'
import {
  Flex, IconButton
} from '@chakra-ui/react'
import {
  activeLink, link
} from '../navbar/styles/Navbar.styles'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  mobileNavbarWrapper, mobileNavbar, mobileNavbarList
} from './styles/MobileNavbar.styles'

export const MobileNavbar = () => {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  const handleMenu = () => setIsOpen(!isOpen)

  return (
    <Flex alignItems={'center'} sx={mobileNavbarWrapper} onClick={handleMenu}>
      <IconButton icon={<HamburgerIcon />} onClick={handleMenu} aria-label={'handle mobile menu'} variant={'outline'} boxShadow={'sm'} />
      {isOpen &&
          <Flex justifyContent="center" sx={mobileNavbar}>
            <Flex sx={mobileNavbarList}>
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
          </Flex>
      }
    </Flex>
  )
}

