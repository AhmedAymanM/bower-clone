// README: for convince and efficacy I used record type for any param is not
// used in the task
export type Project = Record<string, unknown> & {
  name: string
  description: string
  repository_url: string
  stars: number
  latest_stable_release_number: string
}
