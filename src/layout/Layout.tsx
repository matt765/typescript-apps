import { ReactNode } from 'react'
import styles from './styles/Layout.module.scss' // Main layout styles
import { ThemeToggle } from './components/themeToggle/ThemeToggle'
import { SideMenu } from './components/sideMenu/SideMenu'
import { MobileNavbar } from './components/sideMenu/SideMenuMobile'
import useLayout from './useLayout'
import { Loader } from '../components/loader/Loader' // Refactored Loader

export const Layout = ({ children }: { children: ReactNode }) => {
  const {
    isFullScreen,
    isSideMenuOpen,
    colorMode, // 'light' or 'dark' from useLayout (next-themes)
    isLoading, // App loading state from useLayout
    handleSideMenu,
  } = useLayout()

  const getThemeSpecificClass = () => {
    switch (colorMode) {
      case 'light':
        return styles.lightThemeSpecific
      case 'dark':
        return styles.darkThemeSpecific
      case 'ocean':
        return styles.oceanThemeSpecific
      case 'sunset':
        return styles.sunsetThemeSpecific
      default:
        return styles.lightThemeSpecific // fallback
    }
  }

  const layoutContainerClasses = [
    styles.layoutContainer,
    getThemeSpecificClass(),
    // Nota: globalna klasa light/dark/ocean/sunset jest aplikowana na <html> przez next-themes
  ].join(' ').trim()
  
  const contentWrapperClasses = [
    styles.contentWrapper,
    isFullScreen ? styles.fullScreenContent : '', // Optional: if content needs to change in fullscreen
  ].join(' ').trim()

  if (isLoading) {
    return (
      <div className={styles.loadingOverlay}> {/* Optional: for a full page loader style */}
        <Loader size="xl" />
      </div>
    )
  }

  return (
    <>
      <div className={layoutContainerClasses}>
        <SideMenu
          isFullScreen={isFullScreen}
          isSideMenuOpen={isSideMenuOpen}
          setIsSideMenuOpen={handleSideMenu} // Pass the handler from useLayout
        />
        <div className={styles.overlay}></div>
        <main className={contentWrapperClasses}> {/* Changed Flex to main for semantics */}
          <div className={styles.contentBox}>
            {/* isLoading check is now at the top for the whole layout */}
            {children}
          </div>
        </main>
      </div>
      <MobileNavbar />
      <ThemeToggle />
    </>
  )
}
