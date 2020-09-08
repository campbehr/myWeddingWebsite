import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import styled from "styled-components"
import PageBreak from "../components/pageBreak"

const Honor = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 1em;
  }

  @media screen and (min-width: 600px) {
    display: flex;
    flow-direction: row;
    justify-content: space-evenly;
  }

  div {
    align-self: center;
  }
`

const StyledParty = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 1em;
  }
  @media screen and (min-width: 600) {
  }
`

const Party = () => (
  <div>
    <Layout>
      <Honor>
        <div>
          <h2>
            Matron
            <br /> of Honor
          </h2>
          <p>Erica Nalbone</p>
        </div>
        <div>
          <h2>Best Man</h2>
          <p>Benton Wise</p>
        </div>
      </Honor>
      <PageBreak />
      <StyledParty>
        <h2>Bridesmaids</h2>
        <p>Haley Campbell</p>
        <p>Alexis Almeida</p>
        <p>Brittain Torgerson</p>
        <p>Gabrielle Ganal</p>
        <p>Leah Levendusky</p>
      </StyledParty>
      <PageBreak />
      <StyledParty>
        <h2>Groomsmen</h2>
        <p>Alec Goebel</p>
        <p>Coy Little</p>
        <p>Jacob Mided</p>
        <p>Nathan Kuhns</p>
        <p>Steven Bodie</p>
      </StyledParty>
    </Layout>
    <Footer />
  </div>
)

export default Party
