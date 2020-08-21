import React from "react"
import Header from "./header"
import Nav from "./navbtn/nav"
import Footer from "./footer"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  background-color: #fefdf9;
  grid:
    "header" auto
    "main" minmax(40em, auto)
    "footer" 5em /
    1fr;

  header {
    color: #68b0ab;
    text-align: center;
    grid-area: header;
    border: 1px solid tomato;
    a {
      text-decoration: none;
    }
  }
  footer {
    grid-area: footer;
    border: 1px solid olive;
  }
  main {
    grid-area: main;
    border: 1px solid tan;
  }
  @media screen and (min-width: 600px) {
    /*May not need this breakpoint*/
    nav {
      grid-area: nav;
      border: 1px solid teal;
    }
    grid:
      ". header ." auto
      ". nav ." 5em
      ". main ." auto
      ". footer ." 5em;
    margin: 1em 1em 0 1em;
  }

  @media screen and (min-width: 815px) {
    grid:
      ". header ." 8em
      ". nav ." 6em
      ". main ." auto
      ". footer ." 5em /
      1fr minmax(740px, 950px) 1fr;
  }
`

export default function Layout({ children }) {
  return (
    <Grid>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </Grid>
  )
}
