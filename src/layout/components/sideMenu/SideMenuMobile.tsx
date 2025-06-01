import React, { useState, useEffect } from 'react' // Added React, useEffect
import { useRouter, usePathname } from 'next/navigation' // Changed from 'next/router'
import styles from '../../styles/SideMenuMobile.module.scss'
import { Logo } from '../logo/Logo'
import { GithubIcon } from '../../../assets/icons/GithubIcon'
import { menuItems as mobileNavItems } from './menuItemsData' // Use the shared menu items

interface MobileNavbarItemProps {
  text: string;
  path: string;
  onClick: () => void;
}

const MobileNavbarItem = ({ text, path, onClick }: MobileNavbarItemProps) => {
  const router = useRouter()
  // No need for usePathname here as it's only for navigation

  const handleClick = () => {
    router.push(path)
    onClick() // Close the menu
  }

  return (
    <div className={styles.mobileNavbarItem} onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}>
      <span className={styles.mobileNavbarItemText}>{text}</span>
    </div>
  )
}

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
 
  const pathname = usePathname() // Added for route change detection

  const toggleMenu = () => setIsOpen(!isOpen)

  // Close menu on route change
  useEffect(() => {
    // router.events is not available in next/navigation, using pathname for dependency
    setIsOpen(false)
  }, [pathname]) // Listen to pathname changes

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = '' // Cleanup on unmount
    }
  }, [isOpen])


  return (
    <>
      <div className={styles.mobileNavbarContainer}>
        <Logo isSideMenuOpen={true} isMobile={true} /> {/* Assuming Logo adapts or isSideMenuOpen can be true for mobile logo version */}
        <button
          className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileMenuOverlay} onClick={() => setIsOpen(false)} role="dialog" aria-modal="true">
          <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside content */}
            <div className={styles.mobileNavItemsContainer}>
              {mobileNavItems.map((item) => (
                <MobileNavbarItem
                  key={item.path}
                  text={item.title}
                  path={item.path}
                  onClick={toggleMenu} // Close menu on item click
                />
              ))}
            </div>
            <a
              href="https://github.com/matt765/typescript-apps"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLinkMobile}
            >
              <GithubIcon className={styles.githubIconMobile} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </>
  )
}
