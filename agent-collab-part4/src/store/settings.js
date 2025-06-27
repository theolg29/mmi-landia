import { atom } from 'nanostores'

export const $theme = atom('')
export const $layout = atom('')
export const $objectif = atom('')

export const $settings = atom({
  theme: {
    title: 'Thème',
    choices: [
      { value: '1', title: 'Startup Tech' },
      { value: '2', title: 'Minimaliste' },
      { value: '3', title: 'Autres' },
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
    case 'theme':
      $theme.set(value)
      break

    case 'layout':
      $layout.set(value)
      break

    case 'objectif':
      $objectif.set(value)
      break

    default:
      break
  }
}
