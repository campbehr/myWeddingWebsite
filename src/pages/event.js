import React from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"
import LocationLinks from "../components/locLinks"
import PageBreak from "../components/pageBreak"
import styled from "styled-components"

const WeddingInfo = styled.div`
  text-align: center;

  h2 {
    margin-left: 0;
  }

  h3 {
    margin: 1.5em 0 0 0;
  }

  h4 {
    margin: 1em 0 1em 0;
  }

  p {
    margin-top: 0.25em;
  }

  .inner-para {
    margin-top: 1em;
  }

  @media screen and (min-width: 600px) {
    div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      margin: 1em 0 1em 0;

      h2 {
        align-self: flex-start;
      }

      h3 {
        margin-top: 0;
      }

      h4 {
        margin: 0.5em 0 0.5em 0;
      }

      p {
        align-self: flex-start;
        text-align: center;
        margin-top: 0;
      }

      span {
        margin: 0.5em 0 2em 2em;
      }
    }

    @media screen and (min-width: 815px) {
      span {
        margin: 0;
      }
    }
  }
`

const Event = () => (
  <div>
    <Layout>
      <WeddingInfo>
        <div>
          <h2>Ceremony</h2>
        </div>
        <div>
          <LocationLinks
            link={
              "https://www.google.com/maps/place/800+Richland+St,+Columbia,+SC+29201/@34.0082779,-81.0460467,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8a4cdbe15880f:0x7cabeacf4d676aef!8m2!3d34.0082779!4d-81.0438527"
            }
            headerText={"The Lace House"}
            streetAddress={"800 Richland Street"}
            cityStateZip={"Columbia, SC 29201"}
          />
          <p>
            April 3, 2021
            <br />
            4:30 pm
          </p>
        </div>

        <div>
          <h4>
            Reception immediately to follow.
            <br />
            Black tie optional.
            <br />
            Parking at the venue will be limited to spots around the perimeter.
          </h4>
        </div>

        <PageBreak />

        <div>
          <h2>Travel Information</h2>
        </div>

        <div>
          <h4>
            Reservations for hotel rooms can be made at a reduced rate before
            March 3, 2021. Please click on a hotel for a direct link.
          </h4>
        </div>
        <div>
          <LocationLinks
            link={
              "http://www.hilton.com/en/hi/groups/personalized/C/CAECCHF-CWD-20210402/index.jhtml"
            }
            headerText={"Hilton"}
            streetAddress={"924 Senate Street"}
            cityStateZip={"Columbia, SC 29201"}
            phoneNum={"ph:(803) 744-7800"}
          />
          <LocationLinks
            link={
              "http://www.hilton.com/en/hi/groups/personalized/C/CAECCHF-CWD-20210402/index.jhtml"
            }
            headerText={"Hampton Inn"}
            streetAddress={"822 Gervais Street"}
            cityStateZip={"Columbia, SC 29201"}
            phoneNum={"ph:(803) 231-2000"}
          />
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
        <div>
          <LocationLinks
            link={"https://flycae.com/"}
            headerText={"Columbia Metro Airport"}
            streetAddress={"3250 Airport Blvd"}
            cityStateZip={"West Columbia, SC 29170"}
            phoneNum={"ph:(803) 822-5000"}
          />
        </div>
      </WeddingInfo>
    </Layout>
    <Footer />
  </div>
)

export default Event
