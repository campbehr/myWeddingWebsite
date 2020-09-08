import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import LocationLinks from "../components/locLinks"
import PageBreak from "../components/pageBreak"
import styled from "styled-components"

const WeddingInfo = styled.div`
  div {
    margin: 0 0 2em 6em;
  }

  h2 {
    margin-left: 0.5em;
    padding-bottom: 0.5em;
  }

  span {
    margin: 0.5em 0 2em 2em;
  }

  @media screen and (min-width: 600px) {
    div {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 0 0 10em;

      h2 {
        align-self: flex-start;
        margin-top: 0;
      }

      p {
        align-self: flex-start;
        text-align: left;
      }
    }

    @media screen and (min-width: 815px) {
      span {
        @media screen and (min-width: 815px) {
          margin-right: 2em;
          margin-left: 0;
        }
      }
    }
  }
`

const Event = () => (
  <div>
    <Layout>
      <WeddingInfo>
        <div>
          <h2>Location</h2>
          <LocationLinks
            link={
              "https://www.google.com/maps/place/800+Richland+St,+Columbia,+SC+29201/@34.0082779,-81.0460467,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8a4cdbe15880f:0x7cabeacf4d676aef!8m2!3d34.0082779!4d-81.0438527"
            }
            headerText={"The Lace House"}
            streetAddress={"800 Richland Street"}
            cityStateZip={"Columbia, SC 29201"}
          />
        </div>

        <PageBreak />

        <div>
          <h2>Rehearsal</h2>
          <p>
            <b>Date:</b> April 02, 2021
            <br />
            <b>Time:</b> TBD
          </p>
        </div>

        <PageBreak />

        <div>
          <h2>Ceremony</h2>
          <p>
            <b>Date:</b> April 03, 2021
            <br />
            <b>Time:</b> TBD
          </p>
        </div>

        <PageBreak />

        <div>
          <h2>Hotels</h2>

          <LocationLinks
            link={
              "https://www.hilton.com/en/hotels/caecchf-hilton-columbia-center/"
            }
            headerText={"Hilton"}
            streetAddress={"924 Senate Street"}
            cityStateZip={"Columbia, SC 29201"}
            phoneNum={"ph:(803) 744-7800"}
          />
        </div>
        <div>
          <h2></h2>
          <LocationLinks
            link={
              "https://www.hilton.com/en/hotels/caedthx-hampton-columbia-downtown-historic-district/"
            }
            headerText={"Hampton Inn"}
            streetAddress={"822 Gervais Street"}
            cityStateZip={"Columbia, SC 29201"}
            phoneNum={"ph:(803) 231-2000"}
          />
        </div>
        <div>
          <h2></h2>
          <LocationLinks
            link={
              "https://www.hilton.com/en/hotels/caecogi-hilton-garden-inn-columbia-harbison/"
            }
            headerText={"Hilton Garden Inn"}
            streetAddress={"434 Columbiana Dr"}
            cityStateZip={"Columbia, SC 29212"}
            phoneNum={"ph:(803) 407-6640"}
          />
        </div>
      </WeddingInfo>
    </Layout>
    <Footer />
  </div>
)

export default Event
