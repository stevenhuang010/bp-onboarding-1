import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href = "/counter">
        <a>Counter</a>
      </Link>
      <Link href = "/interval">
        <a>Interval Counter</a>
      </Link>
    </div>
  )
}

export default Home
