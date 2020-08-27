import React from "react"
import styled from "styled-components"
import Burger from "./burger"

const Navbar = styled.nav`
  @media screen and (min-width: 600px) {
    ul {
      transform: none;
    }
  }
`

export default function Nav() {
  return (
    <Navbar>
      <Burger />
    </Navbar>
  )
}
