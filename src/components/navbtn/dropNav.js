import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Ul = styled.ul`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`

export default function DropNav({ open }) {
  return (
    <Ul open={open}>
      <Link to="/">Home</Link>
      <Link to="/event/">Event</Link>
      <Link to="/RSVP/">RSVP</Link>
      <Link to="/party/">Wedding Party</Link>
      <Link to="/gallery/">Gallery</Link>
      <Link to="/registry/">Registry</Link>
    </Ul>
  )
}

// DropNav is imported into the Burger component
