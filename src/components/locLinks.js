import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  h3 {
    font-weight: bold;
    margin: 0 0 0 1em;
  }

  p {
    margin: 0;
    text-decoration: none;
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 1em;
  }
`

const LocationLinks = props => {
  return (
    <StyledLink href={props.link}>
      <h3>{props.headerText}</h3>
      <p>{props.streetAddress}</p>
      <p>{props.cityStateZip}</p>
      <p>{props.phoneNum}</p>
    </StyledLink>
  )
}

export default LocationLinks

// Used for creating busines address click throughs (hotels, venue, etc...)
