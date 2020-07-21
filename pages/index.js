import Link from 'next/link'

const Index = () => (
  <div className="container bg-green page">
    <h1>Welcome to Steward Garden!</h1>
    <div>
      <Link href="/about">
        <a className="btn btn-light">About us</a>
      </Link>
    </div>
    <hr />
    <div>
      <Link href="/privacy"></Link>
        <a className="btn btn-light">Privacy</a>
      
    </div>
  </div>
)

export default Index
