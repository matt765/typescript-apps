import {
  ReactNode, useContext, useEffect, useState
} from 'react'
import {
  Flex, useColorMode
} from '@chakra-ui/react'

import { ThemeToggle } from './components/themeToggle/ThemeToggle'
import { SideMenu } from './components/sideMenu/SideMenu.comp'
import {
  Context, InitialSettings
} from '../pages/_app'
import { MobileNavbar } from './components/sideMenu/SideMenuMobile'

export const Layout = ({ children }: { children: ReactNode }) => {
  const {
    settingsData = InitialSettings, setSettingsData = () => undefined
  } =
    useContext(Context) || {}

  const {
    isFullScreen, isSideMenuOpen
  } = settingsData
  const [isLoading, setIsLoading] = useState(true)

  const {
    colorMode, toggleColorMode
  } = useColorMode()

  useEffect(() => {
    const mode = localStorage.getItem('chakra-ui-color-mode')
    if (mode) {
      setIsLoading(false)
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
          xl: '4rem',
          '2xl': '10rem'
        }}
        bgImage={colorMode === 'light' ? 'url(lightbg.jpg)' : ''}
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
        bg={colorMode === 'light' ? '' : 'secondaryBg'}
        overflow="hidden"
      >
        <SideMenu
          isFullScreen={isFullScreen}
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={handleSideMenu}
        />
        <MobileNavbar />
        <Flex
          backdropFilter="blur(20px)"
          bg={colorMode === 'light' ? 'rgb(255,255,255,0.3)' : 'contentBg'}
          flex="1"
          justifyContent="center"
          alignItems="center"
          p="3rem"
          ml={{
            base: 0,
            xl: '1.6rem'
          }}
          borderRadius={{
            base: '0',
            xl: '15px'
          }}
          boxShadow={settingsData.isFullScreen ? 'none' : 'xl'}
          overflow="auto"
          overflowX="hidden"
          transition="0s"
          borderWidth="0px"
          borderStyle="solid"
          borderColor="borderMain"
          h="100%"
        >
          {children}
        </Flex>
      </Flex>
      <ThemeToggle />
      {/* <Button
        onClick={() => handleFullScreen()}
        position="fixed"
        cursor="pointer"
        right="2.5rem"
        bottom="5.5rem"
        width="3rem"
        fill="primaryText"
      >
        {settingsData.isFullScreen
          ? <FullScreenIcon />
          : <FullScreenExitIcon />
        }
      </Button> */}
    </>
  )
}
