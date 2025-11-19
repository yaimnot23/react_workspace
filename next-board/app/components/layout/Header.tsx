import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
      <h1 className="text-xl font-bold">React Board</h1>
      <nav className="flex gap-4">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/board" className="hover:text-blue-600">
          Board
        </Link>
        <Link href="" className="hover:text-blue-600">
          Write
        </Link>
      </nav>
    </header>
  );
}