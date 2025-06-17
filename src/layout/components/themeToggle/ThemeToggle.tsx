import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "../../styles/ThemeToggle.module.scss";
import { SunIcon } from "../../../assets/icons/SunIcon";
import { MoonIcon } from "../../../assets/icons/MoonIcon";
// Możesz dodać nowe ikony dla nowych motywów
// import { OceanIcon } from '../../../assets/icons/OceanIcon'
// import { SunsetIcon } from '../../../assets/icons/SunsetIcon'

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Definiujemy kolejność motywów
  const themes = ["light", "dark", "ocean", "sunset"] as const;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(
      resolvedTheme as (typeof themes)[number]
    );
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Funkcja do uzyskania odpowiedniej ikony dla każdego motywu
  const getThemeIcon = () => {
    switch (resolvedTheme) {
      case "light":
        return <SunIcon className={styles.icon} />;
      case "dark":
        return <MoonIcon className={styles.icon} />;
      case "ocean":
        // Możesz użyć dedykowanej ikony lub emoji
        return <span className={styles.emoji}>🌊</span>;
      case "sunset":
        // Możesz użyć dedykowanej ikony lub emoji
        return <span className={styles.emoji}>🌅</span>;
      default:
        return <SunIcon className={styles.icon} />;
    }
  };

  // Function to get the next theme name for aria-label
  const getNextThemeName = () => {
    const currentIndex = themes.indexOf(
      resolvedTheme as (typeof themes)[number]
    );
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    switch (nextTheme) {
      case "light":
        return "light mode";
      case "dark":
        return "dark mode";
      case "ocean":
        return "ocean mode";
      case "sunset":
        return "sunset mode";
      default:
        return "next theme";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggleButton}
      aria-label={`Switch to ${getNextThemeName()}`}
      title={`Current theme: ${resolvedTheme}. Click to switch to ${getNextThemeName()}`}
    >
      {getThemeIcon()}
    </button>
  );
};
