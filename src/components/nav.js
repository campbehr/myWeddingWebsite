import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">About</Link>
        <Link to="/info/">Info</Link>
        <Link to="/party/">Party</Link>
        <Link to="/photos/">Photos</Link>
        <Link to="/registry/">Registry</Link>
      </ul>
    </nav>
  )
}
