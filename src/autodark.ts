import { ItemChanges } from './ThemeSettings'
import { darkThemeSettings } from './dark'
import { lightThemeSettings } from './light'

const autoSwitchTheme = (): void => {
  // Replace dark theme class
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    switchTheme('dark')

    // Hack body
    const bodyElement = document.querySelector('body')
    if (bodyElement) {
      bodyElement.style.color = 'white'
    }
  } else {
    switchTheme('light')

    // Hack body
    const bodyElement = document.querySelector('body')
    if (bodyElement) {
      bodyElement.style.color = 'black'
    }
  }
}

const switchTheme = (theme: string): void => {
  const isDark = theme === 'dark'
  const themeSettings = isDark ? darkThemeSettings : lightThemeSettings

  // Apply the theme Settings:
  Object.keys(themeSettings).forEach((key) => {
    const settings = themeSettings[key]

    // Get the elements:
    const elements = key.startsWith('.')
      ? document.querySelectorAll(key)
      : document.getElementsByTagName(key)
    Array.from(elements).forEach((el: Element) => {
      if (!Array.isArray(settings)) {
        throw new Error('Invalid settings')
      }

      console.log(document.getElementsByClassName('navbar')[0].classList)

      // Apply the settings:
      settings.forEach((itemChanges: ItemChanges) => {
        itemChanges.classToAdd.forEach((className: string) => {
          // Log which element added which class:
          // console.log(`Adding class ${className} to element ${el}`)
          el.classList.add(className)
        })
        itemChanges.classToRemove.forEach((className: string) => {
          // console.log(`Removing class ${className} from element ${el}`)
          el.classList.remove(className)
        })
      })
    })
  })
}

const autoTheme = (): void => {
  autoSwitchTheme()
  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', autoSwitchTheme)
  window.addEventListener('load', autoSwitchTheme)
}

export { autoTheme, switchTheme }
