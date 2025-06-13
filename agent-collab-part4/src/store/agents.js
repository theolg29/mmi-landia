import { SYMBOLS } from '@/utils/emojis'
import { atom } from 'nanostores'

export const $selectedAgentId = atom('')

export const $agents = atom([
  {
    id: Math.random().toString(),
    emoji: '😀',
    title: 'Space Scifi Writer',
    role: 'your are a wonderful writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'Exo-planets epic scifi stories',
  },
  {
    id: Math.random().toString(),
    emoji: '🤠',
    title: 'Scientist',
    role: 'your are a wonderful scientist',
    response_format: 'text',
    temperature: 0.7,
    desired_response: 'analysis and respond using science-based facts',
  },
  {
    id: Math.random().toString(),
    emoji: '🤠',
    title: 'Emojier',
    role: 'your are a wonderful emoji text enhencer',
    response_format: 'text',
    temperature: 0.7,
    desired_response: 'add a lot of emoji to content',
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
