import React from "react"
import { Link } from "gatsby"
import navStyles from "../styles/navStyles/navStyles.module.css"

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
