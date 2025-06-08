import * as React from 'react'
import Image from 'next/image'
import LogoImage from '../../../assets/images/tslogo.png'
import styles from '../../styles/Logo.module.scss'

interface Props {
  isSideMenuOpen: boolean;
  isMobile?: boolean;
}

export const Logo = ({ isSideMenuOpen, isMobile }: Props) => {
  const containerClasses = [
    styles.logoContainer,
    isMobile ? styles.logoContainerMobile : styles.logoContainerDefault,
    isSideMenuOpen ? styles.logoOpen : styles.logoClosed,
  ].join(' ')

  return (
    <div className={containerClasses}>
      <div style={{ display: 'flex', alignItems: 'center' }}> {/* Inner flex container for image and text */}
        <div className={styles.imageContainer}>
          <Image src={LogoImage} alt="TypeScript logo" width={32} height={32} /> {/* Added width/height for Next/Image */}
        </div>
        {isSideMenuOpen && (
          <div className={styles.logoTextContainer}>
            <span className={styles.logoTextTypeScript}>Alveron</span>
            <span className={styles.logoTextApps}>Bay</span>
          </div>
        )}
      </div>
    </div>
  )
}
