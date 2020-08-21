import React from "react"
import { Link } from "gatsby"
import "../styles/fonts.css"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "Allura", cursive;
  color: #9dccc9;
  font-size: 5em;
  margin: 0.5em;

  @media screen and(min-width: 600px) {
    font-size: 80px;
    margin: 0em;
  }
`

export default function Header() {
  return (
    <header>
      <Link to="/">
        <Title>Kelly & Hunter</Title>
      </Link>
    </header>
  )
}
