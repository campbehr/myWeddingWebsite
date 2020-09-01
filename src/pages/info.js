import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const WeddingInfo = styled.div`
  div {
    margin-left: 6em;
    h2 {
      margin-top: 2em;
    }
    p {
      margin-top: 1em;
    }
  }

  span {
    display: none;
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    div {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 5em 0 3em 5em;

      h2 {
        align-self: center;
        margin-top: 0;
      }

      p {
        align-self: center;
        text-align: center;
        margin-top: 0;
      }
    }

    span {
      display: block;
      font-size: 3rem;
      margin: 2em 0 2em 0;
      color: rgb(157, 204, 201);
    }
  }
`

export default function Info() {
  return (
    <div>
      <Layout>
        <WeddingInfo>
          <div>
            <h2>Location</h2>
            <a href="https://www.google.com/maps/place/800+Richland+St,+Columbia,+SC+29201/@34.0082779,-81.0460467,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8a4cdbe15880f:0x7cabeacf4d676aef!8m2!3d34.0082779!4d-81.0438527">
              <p>
                <u>
                  The Lace House
                  <br />
                  800 Richland Street
                  <br />
                  Columbia, SC 29201
                </u>
              </p>
            </a>
          </div>

          <span>&#10570; &#10571;</span>

          <div>
            <h2>Ceremony</h2>
            <p>
              <b>Time:</b> TBD
            </p>
          </div>

          <span>&#10570; &#10571;</span>

          <div>
            <h2>Rehearsal</h2>
            <p>
              <b>Time:</b> TBD
            </p>
          </div>

          <span>&#10570; &#10571;</span>

          <div>
            <h2>Hotels</h2>
            <p>
              Option 1
              <br />
              Option 2
              <br />
              Option 3
            </p>
          </div>
        </WeddingInfo>
      </Layout>
    </div>
  )
}
