/* eslint-disable @typescript-eslint/naming-convention */

export interface ItemChanges {
  classToAdd: string[]
  classToRemove: string[]
}
export interface ThemeSettings {
  [key: string]: ItemChanges[]
}

export const darkThemeSettings: ThemeSettings = {
  body: [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
  table: [
    {
      classToAdd: ['table-dark'],
      classToRemove: ['table-light'],
    },
  ],
  '.navbar': [
    {
      classToAdd: ['navbar-dark', 'bg-dark'],
      classToRemove: ['navbar-light', 'bg-light', 'border-bottom', 'shadow-sm'],
    },
  ],
  '.modal-content': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
  '.container-fluid': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
  '.list-group-item': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
  '.content-wrapper': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
  '.card': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
  '.bg-dark': [
    {
      classToAdd: [],
      classToRemove: ['bg-light'],
    },
  ],
  '.bg-light': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
  '.bg-white': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-white', 'bg-light'],
    },
  ],
  '.bg': [
    {
      classToAdd: ['bg-dark'],
      classToRemove: ['bg-light'],
    },
  ],
}

export const lightThemeSettings: ThemeSettings = {
  body: [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
  table: [
    {
      classToAdd: ['table-light'],
      classToRemove: ['table-dark'],
    },
  ],
  '.navbar': [
    {
      classToAdd: ['navbar-light', 'bg-light', 'border-bottom', 'shadow-sm'],
      classToRemove: ['navbar-dark', 'bg-dark'],
    },
  ],

  '.modal-content': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
  '.container-fluid': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
  '.list-group-item': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
  '.content-wrapper': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
  '.card': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
  '.bg-dark': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
  '.bg-light': [
    {
      classToAdd: [],
      classToRemove: ['bg-dark'],
    },
  ],
  '.bg-white': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-white', 'bg-dark'],
    },
  ],
  '.bg': [
    {
      classToAdd: ['bg-light'],
      classToRemove: ['bg-dark'],
    },
  ],
}

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

      // Apply the settings:
      settings.forEach((itemChanges: ItemChanges) => {
        itemChanges.classToAdd.forEach((className: string) => {
          el.classList.add(className)
        })
        itemChanges.classToRemove.forEach((className: string) => {
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
