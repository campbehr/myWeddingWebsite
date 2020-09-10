import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledRegistry = styled.div`
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
      margin: 0;
      padding: 0;

      h4 {
        margin-left: 1em;
        text-align: justify;
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
        <StyledRegistry>
          <div className="right">
            <h4>
              Dear Family and Friends,
              <br />
              <br />
              As you know, we <u>love</u> to travel and we're looking forward to
              taking our first trip abroad as husband and wife! So, instead of
              creating a registry, we are graciously accepting any contribution
              you would like to make to our honeymoon/travel fund.
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
        </StyledRegistry>
      </Layout>
      <Footer />
    </div>
  )
}
