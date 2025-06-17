import * as React from "react";

import styles from "../../styles/Logo.module.scss";
import { LogoIcon } from "../../../assets/icons/LogoIcon";

interface Props {
  isSideMenuOpen: boolean;
  isMobile?: boolean;
}

export const Logo = ({ isSideMenuOpen, isMobile }: Props) => {
  const containerClasses = [
    styles.logoContainer,
    isMobile ? styles.logoContainerMobile : styles.logoContainerDefault,
    isSideMenuOpen ? styles.logoOpen : styles.logoClosed,
  ].join(" ");

  return (
    <div className={containerClasses}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Inner flex container for image and text */}
        <div className={styles.imageContainer}>
          <LogoIcon />
        </div>
        {isSideMenuOpen && (
          <div className={styles.logoTextContainer}>
            <span className={styles.logoTextTypeScript}>Starlight</span>
            <span className={styles.logoTextApps}>Forge</span>
          </div>
        )}
      </div>
    </div>
  );
};
