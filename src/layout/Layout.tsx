import { ReactNode } from 'react'
import {
  Flex, Spinner
} from '@chakra-ui/react'

import { ThemeToggle } from './components/themeToggle/ThemeToggle'
import { SideMenu } from './components/sideMenu/SideMenu'
import { MobileNavbar } from './components/sideMenu/SideMenuMobile'
import useLayout from './useLayout'

export const Layout = ({ children }: { children: ReactNode }) => {
  const {
    isFullScreen,
    isSideMenuOpen,
    isRouteChanging,
    colorMode,
    handleSideMenu
  } = useLayout()

  return (
    <>
      <Flex
        width="100%"
        height="100%"
        pt={{
          base: '5rem',
          xl: '6vh'
        }}
        pb={{
          base: '0rem',
          xl: '6vh'
        }}
        px={{
          base: '0rem',
          xl: '6rem',
          '2xl': '10rem'
        }}
        bgImage={colorMode === 'light' ? 'url(lightbg.jpg)' : ''}
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
        bg={colorMode === 'light' ? '' : 'secondaryBg'}
        overflow="auto"
      >
        <SideMenu
          isFullScreen={isFullScreen}
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={handleSideMenu}
        />
        <Flex
          backdropFilter="blur(10px)"
          bg={colorMode === 'light' ? '#efeef8a3' : 'contentBg'}
          flex="1"
          justifyContent="center"
          alignItems="center"
          px={{
            base: '0',
            xl: '0.5rem'
          }}
          ml={{
            base: 0,
            xl: '1.6rem'
          }}
          borderRadius={{
            base: '0',
            xl: '15px'
          }}
          boxShadow={isFullScreen ? 'none' : 'xl'}
          overflow="hidden"
          transition="0s"
          borderWidth="0px"
          borderStyle="solid"
          borderColor="borderMain"
          h="100%"
        >
          <Flex
            flex="1"
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            overflowY="scroll"
            overflowX="hidden"
          >
            {isRouteChanging ? <Spinner size="xl" mb="2rem" /> : children}
          </Flex>
        </Flex>
      </Flex>
      <MobileNavbar />
      <ThemeToggle />
    </>
  )
}
