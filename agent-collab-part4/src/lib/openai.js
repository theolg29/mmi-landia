import OpenAI from 'openai'

export async function getAIClient({
  baseURL = '',
  apiKey = import.meta.env.VITE_OPENAI_API_KEY,
  model = 'gpt-4o-mini',
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
