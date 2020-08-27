import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Ul = styled.ul`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
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
