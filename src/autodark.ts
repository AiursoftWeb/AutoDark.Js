/* eslint-disable @typescript-eslint/naming-convention */

const initTheme = (): void => {
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

    // Hack navbar
    const navElement = document.querySelector('.navbar')
    if (navElement) {
      navElement.classList.remove('border-bottom')
      navElement.classList.remove('shadow-sm')
    }

  } else {
    switchTheme('light')

    // Hack body
    const bodyElement = document.querySelector('body')
    if (bodyElement) {
      bodyElement.style.color = 'black'
    }

    // Hack navbar
    const navElement = document.querySelector('.navbar')
    if (navElement) {
      navElement.classList.add('border-bottom')
      navElement.classList.add('shadow-sm')
    }
  }
}

const switchTheme = (theme: string): void => {
  const isDark = theme === 'dark'
  const themeSettings: { [key: string]: string[] } = {
    body: isDark ? ['bg-dark', 'bg-light'] : ['bg-light', 'bg-dark'],
    table: isDark
      ? ['table-dark', 'table-light']
      : ['table-light', 'table-dark'],
    '.navbar': isDark
      ? ['navbar-dark', 'navbar-light']
      : ['navbar-light', 'navbar-dark'],
    '.navbar-expand-md': isDark
      ? ['bg-dark', 'bg-light']
      : ['bg-light', 'bg-dark'],
    '.modal-content': isDark
      ? ['bg-dark', 'bg-light']
      : ['bg-light', 'bg-dark'],
    '.container-fluid': isDark
      ? ['bg-dark', 'bg-light']
      : ['bg-light', 'bg-dark'],
    '.list-group-item': isDark
      ? ['bg-dark', 'bg-light']
      : ['bg-light', 'bg-dark'],
    '.content-wrapper': isDark
      ? ['bg-dark', 'bg-light']
      : ['bg-light', 'bg-dark'],
    '.card': isDark ? ['bg-dark', 'bg-light'] : ['bg-light', 'bg-dark'],
    '.bg-light': isDark ? ['bg-dark', 'bg-light'] : ['bg-light', 'bg-dark'],
    '.bg-white': isDark ? ['bg-dark', 'bg-light'] : ['bg-light', 'bg-dark'],
    '.bd-footer': isDark ? ['bg-dark', 'bg-light'] : ['bg-light', 'bg-dark'],
    '.bg': isDark ? ['bg-dark', 'bg-light'] : ['bg-light', 'bg-dark'],
  }

  Object.keys(themeSettings).forEach((key) => {
    const settings = themeSettings[key]
    const elements = key.startsWith('.')
      ? document.querySelectorAll(key)
      : document.getElementsByTagName(key)
    Array.from(elements).forEach((el: Element) => {
      if (Array.isArray(settings)) {
        el.classList.add(settings[0])
        el.classList.remove(settings[1])
      } else {
        throw new Error('Invalid settings')
      }
    })
  })
}

const autoTheme = (): void => {
  initTheme()
  window
    .matchMedia('(prefers-color-scheme: light)')
    .addEventListener('change', initTheme)
  window.addEventListener('load', initTheme)
}

export { autoTheme, switchTheme }
