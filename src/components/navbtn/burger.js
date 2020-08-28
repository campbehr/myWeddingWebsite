import React, { useState } from "react"
import styled from "styled-components"
import DropNav from "./dropNav"

const StyledBurger = styled.div`
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 2;
  height: 2rem;
  width: 2rem;

  div {
    margin-top: 5px;
    height: 0.25rem;
    width: 2rem;
    background-color: ${({ open }) =>
      open ? "rgb(254, 253, 249)" : "rgb(130, 130, 0)"};
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`

export default function Burger() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <DropNav open={open} />
    </div>
  )
}
