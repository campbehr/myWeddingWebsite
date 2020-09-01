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
const Underline = styled.div`
  height: 2px;
  width: 80%;
  margin: 0 auto;
  background-color: rgb(130, 130, 0);
`

export default function Nav() {
  return (
    <Navbar>
      <Burger />
      <Underline />
    </Navbar>
  )
}
