// components/layout/Header.tsx

import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const Header = () => {
  const router = useRouter()
  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Posts', path: '/posts' },
  ]

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <nav className="flex gap-6 items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={clsx(
              'hover:underline transition duration-150',
              router.pathname === item.path ? 'font-bold underline' : ''
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
