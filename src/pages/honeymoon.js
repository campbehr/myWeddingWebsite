import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledHoneymoon = styled.div`
  display: flex;
  flex-direction: column;

  .right {
    order: 1;

    h2 {
      padding-left: 1rem;
    }

    p {
      padding-right: 1em;
    }
  }

  .left {
    align-self: center;
    display: flex;
    flex-direction: column;
    order: 2;

    Img {
      margin-top: 2em;
    }
  }

  @media screen and (min-width: 815px) {
    flex-direction: row;

    .right {
      order: 2;

      padding: 0 6em 0 6em;
    }

    .left {
      order: 1;

      Img {
        margin-top: 0;
        padding-bottom: 1em;
      }
    }
  }
`

export default function Honeymoon() {
  const data = useStaticQuery(graphql`
    query HoneymoonImages {
      honeymoonImg: allFile(
        filter: { relativeDirectory: { eq: "honeymoon" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fixed(quality: 100, width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <StyledHoneymoon>
          <div className="right">
            <h2>Honeymoon</h2>
            <p>
              We love to travel and we're looking forward to taking our first
              trip abroad as husband and wife. If you'd like to give a gift, we
              would appreciate a contribution to our travel fund.
            </p>
          </div>
          <div className="left">
            {data.honeymoonImg.nodes.map(images => (
              <Img
                key={images.id}
                fixed={images.childImageSharp.fixed}
                alt={`Photo of couple in ${images.name}`}
              />
            ))}
          </div>
        </StyledHoneymoon>
      </Layout>
      <Footer />
    </div>
  )
}
