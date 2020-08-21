import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;

  a {
    display: block;
    align-self: center;
    margin-top: 2rem;
    font-family: "Amatic SC", cursive;
    font-size: 25px;
    color: #9dccc9;
  }
  @media screen and(min-width: 600px) {
  }
`

export default function DropNav({ open }) {
  return (
    <Ul open={open}>
      <Link to="/">About</Link>
      <Link to="/info/">Info</Link>
      <Link to="/party/">Party</Link>
      <Link to="/photos/">Photos</Link>
      <Link to="/registry/">Registry</Link>
    </Ul>
  )
}
