import { atom } from 'nanostores'

export const $settings = atom({
  theme: {
    title: 'Thème',
    choices: [
      { value: 1, title: 'Thème 1' },
      { value: 2, title: 'Thème 2' },
      { value: 3, title: 'Thème 3' },
    ],
  },
  layout: {
    title: 'Layout',
    choices: [
      { value: 1, title: 'Layout 1' },
      { value: 2, title: 'Layout 2' },
      { value: 3, title: 'Layout 3' },
    ],
  },
  objectifs: {
    title: 'Objectifs',
    choices: [
      { value: 1, title: 'Conversion' },
      { value: 2, title: 'Présentation' },
      { value: 3, title: 'Engagement' },
    ],
  },
})
