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
    margin-top: 4px;
    height: 0.25rem;
    width: 2rem;
    border-radius: 10px;
    background-color: ${({ open }) =>
      open ? "rgb(254, 253, 249)" : "rgb(130, 130, 0)"};

    :nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(45deg)translate(15%, 0)" : "rotate(0deg)"};
      transition-duration: 0.5s;
    }

    :nth-child(2) {
      display: ${({ open }) => (open ? "none" : "visible")};
      transition-duration: 0.5s;
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "rotate(315deg)translate(20%, 0)" : "rotate(0deg)"};
      transition-duration: 0.5s;
    }
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

// Burger component is imported into the Nav component
