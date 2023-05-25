import {
  ReactNode, useContext, useEffect, useState
} from 'react'
import {
  Flex, Spinner, useColorMode
} from '@chakra-ui/react'

import { ThemeToggle } from './components/themeToggle/ThemeToggle'
import { SideMenu } from './components/sideMenu/SideMenu'
import {
  Context, InitialSettings
} from '../pages/_app'
import { MobileNavbar } from './components/sideMenu/SideMenuMobile'
import { useRouter } from 'next/router'

export const Layout = ({ children }: { children: ReactNode }) => {
  const {
    settingsData = InitialSettings, setSettingsData = () => undefined
  } =
    useContext(Context) || {}
  const router = useRouter()
  const {
    isFullScreen, isSideMenuOpen
  } = settingsData
  const [isLoading, setIsLoading] = useState(true)
  const [isRouteChanging, setIsRouteChanging] = useState(false)
  const {
    colorMode, toggleColorMode
  } = useColorMode()

  useEffect(() => {
    const mode = localStorage.getItem('chakra-ui-color-mode')
    if (mode) {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsRouteChanging(true)
    }
    const handleRouteChangeComplete = () => {
      setIsRouteChanging(false)
    }
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  const handleSideMenu = () => {
    const modifiedSettings = { ...settingsData }
    modifiedSettings.isSideMenuOpen = !isSideMenuOpen
    setSettingsData(modifiedSettings)
  }

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
        overflow="scroll"

      >
        <SideMenu
          isFullScreen={isFullScreen}
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={handleSideMenu}
        />

        <Flex
          backdropFilter="blur(20px)"
          bg={colorMode === 'light' ? 'rgb(255,255,255,0.3)' : 'contentBg'}
          flex="1"
          justifyContent="center"
          alignItems="center"
          px={{
            base: '0',
            xl: '1rem'
          }}
          ml={{
            base: 0,
            xl: '1.6rem'
          }}
          borderRadius={{
            base: '0',
            xl: '15px'
          }}
          boxShadow={settingsData.isFullScreen ? 'none' : 'xl'}
          overflow="scroll"
          overflowX="hidden"
          transition="0s"
          borderWidth="0px"
          borderStyle="solid"
          borderColor="borderMain"
          h="100%"
        >
          {isRouteChanging ? <Spinner size="xl" /> : children}
        </Flex>
      </Flex>
      <MobileNavbar />
      <ThemeToggle />
    </>
  )
}
