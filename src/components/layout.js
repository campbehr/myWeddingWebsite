import React from "react"
import Header from "./header"
import Nav from "./navbtn/nav"
import Transition from "../components/pageTransition"
import styled from "styled-components"
import favicon from "../images/favicon.ico"
import { Helmet } from "react-helmet"
import { siteMetadata } from "../../gatsby-config"

// All styling for grid is done on this page through styled components
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
    margin-top: 4em;

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

  span {
    margin: 1.5em 0 1.5em 0;
  }

  @media screen and (min-width: 815px) {
    grid:
      ". header ." 9em
      ". nav ." 6em
      ". main ." auto
      ". footer ." 5em /
      1fr minmax(700px, 900px) 1fr;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
        <title>{siteMetadata.title}</title>
      </Helmet>
      <Grid id="bootstrap_override">
        <Header />
        <Nav />
        <main>
          <Transition>{children}</Transition>
        </main>
      </Grid>
    </>
  )
}
