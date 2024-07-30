import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/dashboard" className="p-2 flex">dashboard</Link>
      <Link href="/about" className="p-2 flex">about</Link>
    </main>
  )
}
