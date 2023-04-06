(function () {
  let currentTheme

  function changeTheme(inputTheme) {
    if (inputTheme === 'dark') {
      const theme = themeConfig.dark
      for (const key in theme) {
        setCSSVar(key, theme[key])
      }
      localStorage.setItem('theme', inputTheme)
    } else {
      const theme = themeConfig.light
      for (const key in theme) {
        setCSSVar(key, theme[key])
      }
      localStorage.setItem('theme', inputTheme)
    }
  }

  function setCSSVar(property, color) {
    document.documentElement.style.setProperty(property, color)
  }
  try {
    currentTheme = localStorage.getItem('theme') || 'light'

    var themeConfig = {
      dark: {
        '--color-homepage-bg': '#0e141b',
        '--color-text': '#fff',
        '--code': '#ccc',
        '--color-blue': '#f300e0',
        '--color-grey': '#ccc'
      },
      light: {
        '--color-homepage-bg': '#fff',
        '--color-text': '#000',
        '--code': '#f1f1f1',
        '--color-blue': '#0070f3',
        '--color-grey': '#eaeaea'
      }
    }

    changeTheme(currentTheme)
  } catch (err) {
    console.log(new Error('accessing theme has been denied'))
  }
}())
