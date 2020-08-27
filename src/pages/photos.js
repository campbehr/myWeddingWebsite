import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Photos() {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <div>
      <Layout>
        <h2>Photos</h2>
        <div className="gallery">
          {data.images.nodes.map(image => (
            <Img
              style={{ marginTop: "5px" }}
              key={image.id}
              fluid={image.childImageSharp.fluid}
            />
          ))}
        </div>
      </Layout>
    </div>
  )
}
