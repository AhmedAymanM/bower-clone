import { cn, type ClassValue } from '@/utils/cn'
import { env } from '@/utils/env'
import { Link } from '@/components/ui/link'
import { Button } from '@/components/ui/button'
import { useToggle } from '@/hooks/useToggle'

type SidebarLayoutProps = {
  className?: ClassValue
}

const NAV_ITEMS = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/docs/creating-packages',
    title: 'Creating Packages',
  },
  {
    href: '/docs/api',
    title: 'API',
  },
  {
    href: '/docs/config',
    title: 'configuration',
  },
  {
    href: '/docs/pluggable-resolvers',
    title: 'Pluggable Resolvers',
  },
  {
    href: '/docs/bower-tools',
    title: 'Tools',
  },
  {
    href: '/docs/about',
    title: 'About',
  },
]

export const Sidebar = ({ className }: SidebarLayoutProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <section className={cn('flex flex-col gap-4', className)}>
      <Button
        onClick={toggleIsOpen}
        className="m-auto w-full max-w-64 md:hidden"
      >
        Menu
      </Button>
      <nav className="flex flex-col font-bold text-lg md:w-[200px]">
        <ul
          className={cn(
            'hidden flex-col gap-2 text-center md:flex md:text-left',
            isOpen && 'flex'
          )}
        >
          {NAV_ITEMS.map(({ href, title }) => (
            <li key={href}>
              <Link
                className="text-blue-light"
                href={env.BOWER_WEBSITE_URL + href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
