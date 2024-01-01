/* eslint-disable @typescript-eslint/naming-convention */
import { ThemeSettings } from './ThemeSettings'

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
  '.jumbotron': [
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
