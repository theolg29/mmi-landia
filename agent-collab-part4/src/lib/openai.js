// Package crée par OpenAI open source
// Utlisé côté serveur ou côté client

import OpenAI from 'openai'

export async function getAIClient({
  baseURL = localStorage.getItem('ia_base_url') || import.meta.env.VITE_IA_BASE_URL,
  apiKey = import.meta.env.VITE_OPENAI_API_KEY,
  model = localStorage.getItem('ia_model') || import.meta.env.VITE_IA_MODEL,
  role = 'Your are a wonderful assistant',
  temperature = 0.7,
} = {}) {
  return {
    openai: new OpenAI({
      baseURL,
      apiKey,
      dangerouslyAllowBrowser: true,
    }),
    cfg: {
      model,
      role,
      temperature,
    },
  }
}
