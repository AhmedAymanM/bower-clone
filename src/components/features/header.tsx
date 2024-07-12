import { Container } from '@/components/layouts/container'

import { Link } from '@/components/ui/link'
import bowerLogo from '@/assets/BowerLogo.svg'

export const Header = () => {
  return (
    <header className="bg-header-bg px-2 py-4 text-header-text md:py-8">
      <Container className="center flex items-center gap-2 md:gap-10">
        <Link
          href="bower.io"
          className="transition-transform duration-200 hover:scale-110"
        >
          <img src={bowerLogo} className="w-10 md:w-[140px]" alt="Bower Logo" />
        </Link>
        <div className="font-bold tracking-tight">
          <h1 className="text-3xl md:text-6xl">Bower Search</h1>
          <h4 className="hidden text-xl md:block">
            Powered by <Link href="https://libraries.io/">libraries.io</Link>
          </h4>
        </div>
      </Container>
    </header>
  )
}
