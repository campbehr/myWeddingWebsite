import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import styled from "styled-components"
import PageBreak from "../components/pageBreak"

const StyledParty = styled.div`
  span {
    display: none;
  }
  @media screen and (min-width: 600px) {
    span {
      display: block;
      margin: 24px auto;
    }
  }
`

const Honor = styled.div`
  text-align: center;

  h3 {
    text-decoration: underline;
    margin-top: 1em;
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

const StyledGroup = styled.div`
  text-align: center;

  h3 {
    text-decoration: underline;
    margin-top: 1em;
  }

  @media screen and (min-width: 600px) {
    display: flex;
    flow-direction: row;
    justify-content: space-evenly;
  }

  div {
    align-self: center;
  }

  p {
    margin: 0;
  }
`

const Party = () => (
  <StyledParty>
    <Layout>
      <Honor>
        <div>
          <h3>
            Matron
            <br /> of Honor
          </h3>
          <h4>Erica Nalbone</h4>
        </div>
        <div>
          <h3>Best Man</h3>
          <h4>Benton Wise</h4>
        </div>
      </Honor>
      <PageBreak />
      <StyledGroup>
        <div>
          <h3>Bridesmaids</h3>
          <h4>Haley Campbell</h4>
          <h4>Alexis Almeida</h4>
          <h4>Brittain Torgerson</h4>
          <h4>Gabrielle Genal</h4>
          <h4>Leah Levendusky</h4>
        </div>
        <div>
          <h3>Groomsmen</h3>
          <h4>Alec Goebel</h4>
          <h4>Coy Little</h4>
          <h4>Jacob Mided</h4>
          <h4>Nate Kuhns</h4>
          <h4>Steven Bodie</h4>
        </div>
      </StyledGroup>
    </Layout>
    <Footer />
  </StyledParty>
)

export default Party
