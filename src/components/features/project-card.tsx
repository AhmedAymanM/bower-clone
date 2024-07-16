import type { ReactNode } from 'react'

import type { Project } from '@/types/api'
import { type ClassValue, cn } from '@/utils/cn'
import { getFormattedCount } from '@/utils/getFormattedCount'
import { getOwnerFromRepoUrl } from '@/utils/getOwnerFromRepoUrl'
import { isValidUrl as checkIsValidUrl } from '@/utils/isValidUrl'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isValidUrl = checkIsValidUrl(project.repository_url)
  return (
    <a
      className="flex max-h-fit min-h-28 w-full flex-col overflow-hidden rounded-md border border-gray bg-white hover:border-blue-light"
      href={isValidUrl ? project.repository_url : '#'}
      target="_blank"
      rel="noopener"
      data-testid="project-card"
    >
      <div className="flex flex-wrap items-center justify-between bg-white-accent p-2">
        <div className="flex items-baseline gap-1 truncate">
          <h2 className="pb-0.5 text-lg font-bold">{project.name}</h2>
          {isValidUrl && (
            <Subtitle>
              by {getOwnerFromRepoUrl(project.repository_url)}
            </Subtitle>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <Subtitle>
            <span role="img" aria-label="number of stars">
              ⭐
            </span>{' '}
            {getFormattedCount(project.stars)}
          </Subtitle>
          <Subtitle className="rounded bg-black/10 px-1 py-px">
            v{project.latest_stable_release_number}
          </Subtitle>
        </div>
      </div>
      <div className="my-auto p-2">
        <p className="line-clamp-2 text-black-accent">{project.description}</p>
      </div>
    </a>
  )
}

const Subtitle = ({
  children,
  className,
}: {
  children: ReactNode
  className?: ClassValue
}) => <p className={cn('text-xs text-black/60', className)}>{children}</p>

// README: ideally rather than repeating myself common code for the
// project card and placeholder,should be reused in a common skeleton component
const Placeholder = () => {
  return (
    <div
      className="flex max-h-fit min-h-28 w-full animate-pulse flex-col overflow-hidden rounded-md border border-gray bg-white"
      data-testid="project-card-placeholder"
    >
      <div className="flex flex-wrap items-center justify-between bg-white-accent p-2">
        <div className="h-4 w-1/4 bg-gray/40" />

        <div className="h-4 w-12 rounded bg-gray/40"></div>
      </div>
      <div className="my-auto p-2">
        <div className="h-4 w-full rounded bg-gray/40"></div>
      </div>
    </div>
  )
}

ProjectCard.Placeholder = Placeholder
export { ProjectCard }
