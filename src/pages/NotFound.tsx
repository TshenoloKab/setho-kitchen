import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </section>
  )
}