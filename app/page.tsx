
import Link from 'next/dist/client/link'
import Image from 'next/image'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Next JS basics</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}
