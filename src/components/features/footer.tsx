import { Container } from '@/components/layouts/container'

import { Link } from '@/components/ui/link'

export const Footer = () => {
  return (
    <footer className="mt-12 px-2 text-sm">
      <Container className="border-t border-gray py-3 pl-0">
        <Link
          href="https://github.com/bower/bower.github.io/issues"
          className="my-4"
        >
          Help improve these docs. Open an issue or pull request.
        </Link>
      </Container>
    </footer>
  )
}
