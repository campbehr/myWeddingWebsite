import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  div {
    height: 1px;
    width: auto;
    background-color: rgb(29, 29, 29);
  }

  p {
    font-size: 0.7em;
    margin: 2em 0 3em 0;
    text-align: center;
    color: rgb(29, 29, 29);
  }

  a {
    color: rgb(29, 29, 29);
    text-decoration: underline;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <div></div>
      <p>
        Website by: Hunter Campbell |{" "}
        <a href={"https://taraandrenata.com/"}>Photography by: Tara & Renata</a>
      </p>
    </StyledFooter>
  )
}

// Due to design preferences the Footer is not included in the layout component.
// Instead it is added to the pages it is wanted on.
