import { SYMBOLS } from '@/utils/emojis'
import { atom } from 'nanostores'

export const $selectedAgentId = atom('')

export const $agents = atom([
  {
    id: Math.random().toString(),
    emoji: '😀',
    title: 'Spécialiste UX',
    role: 'Détecte les mots clés les plus pertinents pour title et la meta description',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'Identifie les mots clés les plus pertinents pour l’optimisation SEO',
  },
  {
    id: Math.random().toString(),
    emoji: '🤠',
    title: 'Expert en Rédaction',
    role: 'Critique les différents mots clés choisis',
    response_format: 'text',
    temperature: 0.7,
    desired_response: 'Fournit des critiques constructives sur les mots clés sélectionnés',
  },
  {
    id: Math.random().toString(),
    emoji: '🤠',
    title: 'Consultant SEO',
    role: 'Propose les mots clés les plus pertinents avec une phrase dexemple pour le title et la meta description',
    response_format: 'text',
    temperature: 0.7,
    desired_response: 'Génère des phrases dexemple avec les mots clés les plus pertinents',
  },
  {
    id: Math.random().toString(),
    emoji: '🤠',
    title: 'Développeur Frontend',
    role: 'Génère le fichier JSX',
    response_format: 'text',
    temperature: 0.7,
    desired_response: 'Fichier Home.jsx développé en React JSX',
  },
])

export const addAgent = (agent = {}) => {
  const agents = $agents.get()
  // if has id, then update existing,
  // else create new agent
  if (agent?.id) {
    const index = agents.findIndex((e) => e.id === agent.id)
    agents[index] = { ...agents[index], ...agent }
    $agents.set([...agents])
  } else {
    agent.id = Math.random().toString()
    agent.emoji = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    agent.temperature = 0.7
    $agents.set([agent, ...agents])
  }

  // set current as selected
  $selectedAgentId.set(agent.id)
}

export const removeAgent = (id) => {
  const agents = $agents.get()
  $agents.set(agents.filter((e) => e.id !== id))
}
