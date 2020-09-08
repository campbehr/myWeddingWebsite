import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledGallery = styled.div`
  .portrait {
    margin: 2.5% 0 2.5% 0;
  }

  .landscape {
    margin: 2.5% 0 2.5% 0;
  }

  @media screen and (min-width: 600px) {
    .portrait {
      width: 45%;
      margin-right: 2.5%;
      margin-left: 2.5%;
      float: left;
    }

    .landscape {
      clear: left;
    }
  }
`

/* Sets classnames "landscape" & "portrait" according to aspect ratio of photos while mapping through query */
const ImageOrient = ({ aspectRatio, ...props }) => {
  let orientation
  if (aspectRatio > 1) {
    orientation = "landscape"
  } else {
    orientation = "portrait"
  }
  return <Img className={`${orientation}`} {...props} />
}

const Gallery = ({ data }) => (
  <div>
    <Layout>
      <StyledGallery>
        {data.images.nodes.map(images => (
          <ImageOrient
            key={images.id}
            aspectRatio={images.childImageSharp.fluid.aspectRatio}
            alt="Engagement photos of couple"
            fluid={images.childImageSharp.fluid}
          />
        ))}
      </StyledGallery>
    </Layout>
    <Footer />
  </div>
)

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1800) {
            aspectRatio
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Gallery
