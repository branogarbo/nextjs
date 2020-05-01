import Link from 'next/link'

export default function Home() {
  let demos = ['list','timer'];
  let listItems = demos.map(demo =>
    <Link href={`/demos/${demo}`}>
      <a><li>{project} demo</li></a>
    </Link>
  )

  return (
    <div className="container">
      <h1>Home</h1>
      <ol className="list">{listItems}</ol>
    </div>
  )
}