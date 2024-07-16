import { z } from 'zod'

// Define the schema as an object with all of the env
// variables and their types
const envSchema = z.object({
  BOWER_WEBSITE_URL: z.string(),
  API_URL: z.string(),
  API_KEY: z.string(),
})

// remove §VITE_§ prefix from envVariable name
const formatEnvVars = Object.entries(import.meta.env).reduce<
  Record<string, string>
>((acc, [key, value]) => {
  if (key.startsWith('VITE_')) {
    acc[key.replace('VITE_', '')] = value
  }
  return acc
}, {})

// Validate `env` variables against our schema and return the result
export const env = envSchema.parse(formatEnvVars)
