import type { Project } from '@/types/api'
import { getFormattedCount } from '@/utils/getFormattedCount'
import { getOwnerFromRepoUrl } from '@/utils/getOwnerFromRepoUrl'
import { ReactNode } from 'react'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      className="flex max-h-fit min-h-28 w-full flex-col overflow-hidden rounded-md border border-gray bg-white hover:border-blue-light"
      href={project.repository_url}
      target="_blank"
      rel="noopener"
    >
      <div className="flex flex-wrap-reverse items-center justify-between bg-white-accent p-2">
        <div className="flex items-baseline gap-1 truncate">
          <h2 className="pb-0.5 text-lg font-bold">{project.name}</h2>
          <Subtitle>by {getOwnerFromRepoUrl(project.repository_url)}</Subtitle>
        </div>
        <Subtitle>
          <span role="img" aria-label="number of stars">
            ⭐
          </span>{' '}
          {getFormattedCount(project.stars)}
        </Subtitle>
      </div>

      <p className="my-auto p-2">{project.description}</p>
    </a>
  )
}

const Subtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-xs text-black/60">{children}</p>
)

// README: ideally rather than repeating myself common code for the
// project card and placeholder,should be reused in a common skeleton component
const Placeholder = () => {
  return (
    <div className="flex max-h-fit min-h-28 w-full animate-pulse flex-col overflow-hidden rounded-md border border-gray bg-white">
      <div className="flex flex-wrap-reverse items-center justify-between bg-white-accent p-2">
        <div className="h-4 w-1/4 bg-gray/40" />

        <div className="h-4 w-8 rounded bg-gray/40"></div>
      </div>
      <div className="my-auto p-2">
        <div className="h-4 w-full rounded bg-gray/40"></div>
      </div>
    </div>
  )
}

ProjectCard.Placeholder = Placeholder
export { ProjectCard }
