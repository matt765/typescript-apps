import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useSettingsStore } from '../store/settingsStore'

const useLayout = () => {
  const {
    isFullScreen,
    isSideMenuOpen,
    toggleSideMenu
  } = useSettingsStore()
  const [isLoading, setIsLoading] = useState(true) // This loading state might be for initial app load, not theme loading
  const { theme, setTheme, resolvedTheme } = useTheme()

  // useEffect for initial loading, can be kept if it serves a purpose beyond theme
  useEffect(() => {
    // Example: Simulate initial data loading or setup
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500) // Adjust timing as needed
    return () => clearTimeout(timer)
  }, [])

  const handleSideMenu = () => {
    toggleSideMenu()
  }

  // Determine current color mode based on resolvedTheme for explicit light/dark
  const colorMode = resolvedTheme === 'dark' ? 'dark' : 'light'

  return {
    isFullScreen,
    isSideMenuOpen,
    colorMode, // 'light' or 'dark'
    currentTheme: theme, // actual theme value (system, light, dark)
    setTheme, // function to change theme
    isLoading, // App loading state
    handleSideMenu
  }
}

export default useLayout
