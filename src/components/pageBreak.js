import React from "react"
import styled from "styled-components"

const StyledBreak = styled.span`
  display: none;
  text-align: center;
  font-size: 1em;
  color: rgb(157, 204, 201);

  @media screen and (min-width: 600px) {
    display: block;
  }

  @media screen and (min-width: 815px) {
    font-size: 1.75em;
  }
`

const PageBreak = () => {
  return <StyledBreak>&#10570; &#10571;</StyledBreak>
}

export default PageBreak

// Unicode page seperator visuals.
