import React from "react"
import Header from "./header"
import Nav from "./navbtn/nav"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  grid:
    "header" auto
    "main" minmax(40em, auto)
    "footer" 5em /
    1fr;

  header {
    text-align: center;
    grid-area: header;
    border: 0px solid tomato;
    a {
      text-decoration: none;
    }
  }
  footer {
    grid-area: footer;
    border: 0px solid olive;
  }
  main {
    grid-area: main;
    border: 0px solid tan;
  }
  @media screen and (min-width: 600px) {
    nav {
      grid-area: nav;
      border: 0px solid teal;
    }
    grid:
      ". header ." 8em
      ". nav ." 5em
      ". main ." auto
      ". footer ." 5em;
    margin: 1em 1em 0 1em;
  }

  @media screen and (min-width: 815px) {
    grid:
      ". header ." 9em
      ". nav ." 6em
      ". main ." auto
      ". footer ." 5em /
      1fr minmax(700px, 950px) 1fr;
  }
`

export default function Layout({ children }) {
  return (
    <Grid id="bootstrap_override">
      <Header />
      <Nav />
      <main>{children}</main>
    </Grid>
  )
}
