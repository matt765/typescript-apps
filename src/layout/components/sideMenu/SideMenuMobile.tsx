import {
  Box, Flex, Icon, Link, Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { Logo } from '../logo/Logo'
import { GithubIcon } from '../../../assets/icons/GithubIcon'

interface NavbarItemProps {
  text: string;
  color?: string;
  path: string;
  onClick: () => void;
  isActive?: boolean;
}

const MobileNavbarItem = ({
  text, color, path, onClick
}: NavbarItemProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(path)
    onClick()
  }
  return (
    <Flex w="100%" justify="center" textAlign="center" alignItems="center">
      <Box _hover={{ textDecoration: 'none' }} onClick={handleClick}>
        <Text
          w="18rem"
          variant="navbarItem"
          textTransform="uppercase"
          fontWeight="400"
          letterSpacing="3px"
          fontSize="1.3rem"
          color="primaryText"
          _hover={{ color: 'coloredText' }}
          cursor="pointer"
          transition="0.2s"
        >
          {text}
        </Text>
      </Box>
    </Flex>
  )
}

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileNavItems = [
    {
      text: 'E-mail verifier',
      path: '/email-verifier',
      onClick: () => setIsOpen(false)
    },
    {
      text: 'Color picker',
      path: '/color-picker',
      onClick: () => setIsOpen(false)
    },
    {
      text: 'List of users',
      path: '/users-list',
      onClick: () => setIsOpen(false)
    },
    {
      text: 'Beers Hub',
      path: '/beers-hub',
      onClick: () => setIsOpen(false)
    },
    {
      text: 'Weather forecast',
      path: '/weather-forecast',
      onClick: () => setIsOpen(false)
    },
    {
      text: 'Health calculators',
      path: '/health',
      onClick: () => setIsOpen(false)
    },
    {
      text: 'Tic Tac Toe',
      path: '/tictactoe',
      onClick: () => setIsOpen(false)
    },
    {
      text: 'Calculator',
      path: '/calculator',
      onClick: () => setIsOpen(false)
    }
  ]
  return (
    <>
      <Flex
        w="100%"
        h="5rem"
        bg="mobileNavbarBg"
        justify="space-between"
        display={{
          base: 'flex',
          xl: 'none'
        }}
        position="fixed"
        top="0"
        left="0"
        px="1.5rem"
        py="0.3rem"
        alignItems="center"
        zIndex="999"
        backdropFilter="blur(24px)"
        borderWidth="0 0 1px 0"
        borderStyle="solid"
        borderColor="mobileNavbarBorder"
        maxW="100vw"
      >
        <Flex py="0.5rem">
          <Logo isSideMenuOpen isMobile />
        </Flex>
        <Flex
          w="2.7rem"
          h="3rem"
          bg="hamburgerBg"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="hamburgerIcon"
          borderRadius="6px"
          justify="center"
          alignItems="center"
          direction="column"
          gap="0.35rem"
          cursor="pointer"
          transition="0.2s"
          onClick={() => setIsOpen(!isOpen)}
          zIndex="99999"
        >
          <Flex w="1.3rem" h="1px" bg="hamburgerIcon"></Flex>
          <Flex w="1.3rem" h="1px" bg="hamburgerIcon"></Flex>
          <Flex w="1.3rem" h="1px" bg="hamburgerIcon"></Flex>
        </Flex>
      </Flex>
      {isOpen &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            gap="2.5rem"
            direction="column"
            alignItems="flex-start"
            w="100%"
            h="100%"
            bg="hamburgerBg"
            position="fixed"
            top="5rem"
            left="0"
            borderStyle="solid"
            borderWidth="1px 0 0 0"
            borderColor="rgb(255,255,255,0)"
            pt="3.5rem"
            display={{
              base: 'flex',
              xl: 'none'
            }}
            zIndex="99"
            backdropFilter="blur(24px)"
            overflow="scroll"
          >
            {mobileNavItems.map((mobileNavItem, index) =>
              <MobileNavbarItem
                key={index}
                text={mobileNavItem.text}
                path={mobileNavItem.path}
                onClick={mobileNavItem.onClick}
              />
            )}

            <Link
              display="flex"
              w="12rem"
              mx="auto"
              h="3rem"
              alignItems="center"
              borderStyle="solid"
              borderWidth="1px"
              borderColor="borderGray"
              borderRadius="10px"
              justifyContent="center"
              cursor="pointer"
              _hover={{ backgroundColor: 'grayHoverBg' }}
              fill="secondaryText"
              transition="0.3s"
              mt="1rem"
              href="https://github.com/matt765/typescript-apps"
              isExternal
              mb="8rem"
              py="1rem"
            >
              <Icon as={GithubIcon} boxSize={3} />
              <Flex
                fontSize="1rem"
                fontFamily="Exo"
                ml="0.5rem"
                fontWeight="500"
                letterSpacing="1px"
                color="primaryText"
              >
                Github
              </Flex>
            </Link>
          </Flex>
        </motion.div>
      }
    </>
  )
}
