import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const StyledPNF = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 2em;
  }
`

const PageNotFound = () => (
  <>
    <Layout>
      <StyledPNF>
        <h2>Page not found...</h2>
        <p>
          It appears that the page you are looking for no longer exist or has
          been relocated...
        </p>
      </StyledPNF>
    </Layout>
  </>
)

export default PageNotFound
