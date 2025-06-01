import React from 'react' // Imported React for JSX
import styles from '../../styles/SideMenu.module.scss'
import useLayout from '../../useLayout'
import { Logo } from '../logo/Logo'
import { SideMenuItem } from './SideMenuItem'
import { menuItems } from './menuItemsData' // Import menuItems
import { ArrowsLeftIcon } from '../../../assets/icons/ArrowsLeftIcon'
import { ArrowsRightIcon } from '../../../assets/icons/ArrowsRightIcon'
import { GithubIcon } from '../../../assets/icons/GithubIcon'

interface SideMenuProps {
  isFullScreen: boolean;
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (value: boolean) => void; // Kept this prop for direct control if needed
}

export const SideMenu = ({ isFullScreen, isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) => {
  const { colorMode } = useLayout()

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen)
  }

  const sideMenuContainerClasses = [
    styles.sideMenuContainer,
    isSideMenuOpen ? styles.sideMenuOpen : styles.sideMenuClosed,
    isFullScreen ? styles.fullScreen : styles.notFullScreen,
    colorMode === 'light' ? styles.lightTheme : styles.darkTheme, // For specific light/dark overrides
  ].join(' ').trim()

  const menuItemsListClasses = [
    styles.menuItemsList,
    isSideMenuOpen ? styles.menuItemsListOpen : styles.menuItemsListClosed,
  ].join(' ').trim()

  const footerClasses = [
    styles.sideMenuFooter,
    isSideMenuOpen ? styles.footerOpen : styles.footerClosed,
  ].join(' ').trim()

  return (
    <div className={sideMenuContainerClasses}>
      <div> {/* Top part container (Logo + MenuItems) */}
        <Logo isSideMenuOpen={isSideMenuOpen} />
        <div className={menuItemsListClasses}>
          {menuItems.map((item, index) => (
            <SideMenuItem
              key={`${item.title} - ${index}`}
              icon={item.icon}
              title={item.title}
              path={item.path}
              isSideMenuOpen={isSideMenuOpen}
            />
          ))}
        </div>
      </div>

      <div className={footerClasses}>
        {isSideMenuOpen && (
          <a // Changed Link to a
            href="https://github.com/matt765/typescript-apps"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <GithubIcon className={styles.githubIcon} /> {/* Apply styles.icon if needed */}
            <span style={{ marginLeft: '0.5rem' }}>GitHub</span>
          </a>
        )}
        <button onClick={toggleSideMenu} className={styles.toggleButton} aria-label={isSideMenuOpen ? 'Close menu' : 'Open menu'}>
          {isSideMenuOpen ? <ArrowsLeftIcon /> : <ArrowsRightIcon />}
        </button>
      </div>
    </div>
  )
}
