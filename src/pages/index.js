import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function About({ data }) {
  return (
    <div>
      <Layout style={{ gridTemplateAreas: "'header' 'nav' 'main'" }}>
        <Img fluid={data.heroImg.childImageSharp.fluid} alt="Happy couple" />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "home-img-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
