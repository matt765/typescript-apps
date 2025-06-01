import * as React from 'react'
import styles from './styles/ColorCard.module.scss' // Import SCSS module

interface ColorCardProps {
  hexValue: string;
  rgbValue: string;
  copyToClipboardAndSetMessage: (value: string) => void;
  colorName: string;
  setHoveredColorName: (value: string) => void;
}

export const ColorCard = ({
  hexValue,
  rgbValue,
  copyToClipboardAndSetMessage,
  colorName,
  setHoveredColorName
}: ColorCardProps) => {
  return (
    <>
      <div
        className={styles.colorCardContainer}
        onMouseEnter={() => setHoveredColorName(colorName)}
        onMouseLeave={() => setHoveredColorName('')}
      >
        <div
          className={styles.colorBox}
          style={{ backgroundColor: hexValue }} // Apply background color directly
          onClick={() => copyToClipboardAndSetMessage(rgbValue)}
        />
        <div className={styles.linksContainer}>
          <span // Changed Text to span
            className={`${styles.linkText} ${styles.hexLink}`}
            onClick={() => copyToClipboardAndSetMessage(hexValue)}
          >
            Hex
          </span>
          <span className={styles.separator}>|</span> {/* Changed Box to span */}
          <span // Changed Text to span
            className={`${styles.linkText} ${styles.rgbLink}`}
            onClick={() => copyToClipboardAndSetMessage(rgbValue)}
          >
            Rgb
          </span>
        </div>
      </div>
    </>
  )
}
