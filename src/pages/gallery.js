import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledGallery = styled.div`
  .portrait {
    margin: 0.5em 0 0.5em 0;
  }

  .landscape {
    margin-top: 0.5em;
  }

  @media screen and (min-width: 600px) {
    .portrait {
      width: 49%;
      margin-right: 0.5em;
      float: left;
    }

    .landscape {
      clear: left;
    }
  }
`
const ImageOrient = ({ aspectRatio, ...props }) => {
  let orientation
  if (aspectRatio > 1) {
    orientation = "landscape"
  } else {
    orientation = "portrait"
  }
  return <Img className={`${orientation}`} {...props} />
}

const Gallery = ({ data }) => {
  return (
    <div>
      <Layout>
        <StyledGallery>
          {data.images.nodes.map(images => (
            <ImageOrient
              key={images.id}
              aspectRatio={images.childImageSharp.fluid.aspectRatio}
              alt=""
              fluid={images.childImageSharp.fluid}
            />
          ))}
        </StyledGallery>
      </Layout>
    </div>
  )
}

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

// const StyledGallery = styled.div`
//   .gatsby-image-wrapper {
//     margin-top: 5px;
//   }
// `

// const Gallery = ({ data }) => {
//   return (
//     <div>
//       <Layout>
//         <StyledGallery>
//           {data.images.nodes.map(images => (
//             <Img key={images.id} fluid={images.childImageSharp.fluid} alt="" />
//           ))}
//         </StyledGallery>
//       </Layout>
//     </div>
//   )
// }

// export const query = graphql`
//   query ImagesForGallery {
//     images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
//       nodes {
//         id
//         childImageSharp {
//           fluid(maxWidth: 1800) {
//             aspectRatio
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

// export default Gallery
