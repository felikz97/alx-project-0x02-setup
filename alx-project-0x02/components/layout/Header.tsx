// components/layout/Header.tsx
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">ALX Project</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
          <Link href="/users" className="hover:underline">Users</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
