import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"

export default function HeroCarousel() {
  const data = useStaticQuery(graphql`
    query Hero {
      heroImg: allFile(filter: { relativeDirectory: { eq: "hero" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div style={{ opacity: ".99" }}>
      <Carousel slide="false" fade="true" nextIcon=">" prevIcon="<">
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={data.heroImg.nodes[0].childImageSharp.fluid}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={data.heroImg.nodes[1].childImageSharp.fluid}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={data.heroImg.nodes[2].childImageSharp.fluid}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={data.heroImg.nodes[5].childImageSharp.fluid}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={data.heroImg.nodes[3].childImageSharp.fluid}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={data.heroImg.nodes[4].childImageSharp.fluid}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
