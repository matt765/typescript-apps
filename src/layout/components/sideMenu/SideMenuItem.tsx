import { FunctionComponent, useEffect, useState, SVGProps } from 'react'
import { useRouter, usePathname } from 'next/navigation' // Changed from 'next/router'
import styles from '../../styles/SideMenuItem.module.scss'
import useLayout from '../../useLayout' // Corrected path

type Props = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
  isSideMenuOpen: boolean;
};

export const SideMenuItem = ({ icon: IconComponent, title, path, isSideMenuOpen }: Props) => {
  const router = useRouter()
  const pathname = usePathname() // Added usePathname hook
  const [isActive, setIsActive] = useState(false)
  const { colorMode } = useLayout() // 'light' or 'dark'

  useEffect(() => {
    if (
      pathname === path ||
      (pathname === '/' && path === '/email-verifier') || // Assuming /email-verifier is the default for '/'
      (title === 'Beers Hub' && pathname.startsWith('/beer/'))
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [pathname, path, title])

  const handleClick = () => {
    router.push(path)
  }

  const itemClasses = [
    styles.menuItem,
    isActive ? styles.active : '',
    colorMode === 'light' ? styles.lightTheme : styles.darkTheme, // For specific light/dark overrides not covered by CSS vars
  ].join(' ').trim()

  const titleClasses = [
    styles.title,
    // isActive ? styles.activeTitle : '', // if active title needs specific style not covered by .active .title
  ].join(' ').trim()

  return (
    <div
      className={itemClasses}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      title={title} // Accessibility: provide title for the div acting as a button
    >
      <div className={styles.iconContainer}>
        <IconComponent className={styles.icon} /> {/* Apply styles.icon if needed for sizing/spacing */}
      </div>
      {isSideMenuOpen &&
        <span className={titleClasses}>
          {title}
        </span>
      }
    </div>
  )
}
