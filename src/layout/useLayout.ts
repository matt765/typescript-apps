import {
  useEffect, useState, useContext
} from 'react'
import { useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import {
  Context, InitialSettings
} from '../pages/_app'

const useLayout = () => {
  const {
    settingsData = InitialSettings, setSettingsData = () => undefined
  } = useContext(Context) || {}
  const {
    isFullScreen, isSideMenuOpen
  } = settingsData
  const [isLoading, setIsLoading] = useState(true)
  const [isRouteChanging, setIsRouteChanging] = useState(false)
  const { colorMode } = useColorMode()
  const router = useRouter()

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

  return {
    isFullScreen,
    isSideMenuOpen,
    isLoading,
    isRouteChanging,
    colorMode,
    handleSideMenu
  }
}

export default useLayout
