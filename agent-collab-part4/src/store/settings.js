import { atom } from 'nanostores'

export const $theme = atom('')
export const $layout = atom('')
export const $objectif = atom('')

export const $settings = atom({
  theme: {
    title: 'Thème',
    choices: [
      { value: 'Startup Tech', title: 'Startup Tech' },
      { value: 'Minimaliste', title: 'Minimaliste' },
      { value: '3', title: 'Minimaliste' },
    ],
  },
  layout: {
    title: 'Layout',
    choices: [
      { value: 1, title: 'Hero + 3 colonnes' },
      { value: 2, title: 'Scroll narratif' },
      { value: 3, title: 'Fiche produit' },
    ],
  },
  objectif: {
    title: 'Objectif',
    choices: [
      { value: 1, title: 'Conversion' },
      { value: 2, title: 'Présentation' },
      { value: 3, title: 'Engagement' },
    ],
  },
})

export const setUserSettings = (category, value) => {
  switch (category) {
    case 'Thème':
      $theme.set(value)
      break

    case 'Layout':
      $layout.set(value)
      break

    case 'Objectifs':
      $objectif.set(value)
      break

    default:
      break
  }
}
