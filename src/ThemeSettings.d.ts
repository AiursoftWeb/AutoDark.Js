export interface ItemChanges {
  classToAdd: string[]
  classToRemove: string[]
}
export interface ThemeSettings {
  [key: string]: ItemChanges[]
}
