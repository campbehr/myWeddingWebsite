import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.min.css"

export default function HeroCarousel() {
  const data = useStaticQuery(graphql`
    query Hero {
      heroImg: allFile(
        filter: { relativeDirectory: { eq: "hero" } }
        sort: { fields: name, order: ASC }
      ) {
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

  // All styling for Carousel is through the imported Bootstrap css file
  return (
    <div style={{ opacity: ".99" }}>
      <Carousel slide="false" fade="true" nextIcon=">" prevIcon="<">
        {data.heroImg.nodes.map(images => (
          <Carousel.Item>
            <Img
              className="d-block w-100"
              alt="Engagement photos of couple"
              fluid={images.childImageSharp.fluid}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

// HeroCarousel comonent is imported into the index page
