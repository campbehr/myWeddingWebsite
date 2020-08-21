import React, { useState } from "react"
import styled from "styled-components"
import DropNav from "./dropNav"

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "white" : "black")};
    margin-top: 5px;
  }

  @media screen and (min-width: 600px) {
    display: none;
  }
`

export default function Burger() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <DropNav open={open} />
    </>
  )
}
