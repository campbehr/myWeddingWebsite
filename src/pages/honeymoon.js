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

    h4 {
      padding: 0 1em 0 1em;
    }
  }

  .left {
    align-self: center;
    display: flex;
    flex-direction: column;
    order: 2;

    Img {
      margin-top: 1em;
    }
  }

  @media screen and (min-width: 815px) {
    flex-direction: row;
    margin-top: 1em;

    .right {
      order: 2;
      margin: 0 0 0 1em;
      padding: 0;

      h4 {
        padding: 0 4em 0 4em;
      }
    }

    .left {
      order: 1;
      margin-left: 4em;

      Img {
        margin: 0;
        padding-bottom: 0.5em;
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
            fixed(quality: 100, width: 350) {
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
            <h4>
              Dear family and friends, as you know, we <b>LOVE</b> to travel and
              we're looking forward to taking our first trip abroad as husband
              and wife. Your presence at our wedding is the ultimate gift. If
              you would like to contribute more we would graciously accept a
              contribution to our honeymoon/travel fund.
              <br />
              <br />
              Love,
              <br />
              Kelly & Hunter
            </h4>
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
