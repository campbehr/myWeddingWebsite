import React from "react"
import styled from "styled-components"
import Burger from "./burger"

const Navbar = styled.nav`
  position: absolute;
  top: 0;

  @media screen and (min-width: 600px) {
    position: relative;

    ul {
      position: relative;
      height: auto;
      width: auto;
      transform: none;
      flex-flow: row;
      background-color: rgba(0, 0, 0, 0);
      padding: 1rem 0 0 0;
    }

    ul a {
      margin: 0 auto auto 0;
      font-size: 20px;
      padding: 0 0 1rem 0;
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
