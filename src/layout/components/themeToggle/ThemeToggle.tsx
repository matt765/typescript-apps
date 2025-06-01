import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import styles from '../../styles/ThemeToggle.module.scss'
import { SunIcon } from '../../../assets/icons/SunIcon' // Adjusted path
import { MoonIcon } from '../../../assets/icons/MoonIcon' // Adjusted path

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggleButton}
      aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className={styles.icon} />
      ) : (
        <MoonIcon className={styles.icon} />
      )}
    </button>
  )
}
