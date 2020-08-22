import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <nav style={{ color: 'darkblue', display: 'flex' }}>
      <Link to="/">Home</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
    </nav>
  )
}
