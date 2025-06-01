import { useRef } from 'react'

import styles from './styles/ColorPicker.module.scss' // Import SCSS module

import { ColorCard } from './components/ColorCard'
import { useColorPicker } from './useColorPicker'

export const ColorPicker = () => {
  const {
    colorPickerData,
    message,
    copyToClipboardAndSetMessage,
    hoveredColorName,
    setHoveredColorName
  } = useColorPicker()

  const bgRef = useRef<HTMLDivElement>(null) // Added type for ref

  return (
    <div
      className={styles.colorPickerContainer}
      ref={bgRef}
    >
      <div className={styles.contentWrapper}>
        <p className={styles.messageText}> {/* Changed Text to p, applied styles */}
          {message ? `Copied: ${message}` : 'Click a color to copy its code'}
        </p>
        <div className={styles.colorGrid}> {/* Changed SimpleGrid to div, applied styles */}
          {colorPickerData.map((item, index) =>
            <ColorCard
              hexValue={item.hexValue}
              rgbValue={item.rgbValue}
              colorName={item.colorName}
              copyToClipboardAndSetMessage={copyToClipboardAndSetMessage}
              key={`${item.hexValue}-${index}`}
              setHoveredColorName={setHoveredColorName}
            />
          )}
        </div>
        <p className={styles.hoveredColorText}> {/* Changed Text to p, applied styles */}
          {hoveredColorName}
        </p>
      </div>
    </div>
  )
}
