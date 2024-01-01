/* eslint-disable @typescript-eslint/naming-convention */
import { ThemeSettings } from './ThemeSettings'

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
      classToAdd: ['border-bottom', 'navbar-dark', 'bg-dark'],
      classToRemove: ['navbar-light', 'bg-light', 'shadow-sm'],
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
  '.jumbotron': [
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
