import Link from 'next/link'

export default function Home() {
  let projects = ['list','timer'];
  let listItems = projects.map(project =>
    <Link href={`/demos/${project}`}>
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