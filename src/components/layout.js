import React from "react"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"
import layoutStyles from "../styles/layoutStyles.module.css"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.grid}>
      <Header />
      <Nav />
      <div className={layoutStyles.main}>{children}</div>
      <Footer />
    </div>
  )
}
