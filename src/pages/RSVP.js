import React, { useState } from "react"
import Footer from "../components/footer"
import Layout from "../components/layout"

import styled from "styled-components"

let Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 10px;

  input,
  select {
    background-color: rgb(222, 219, 209);
    border: none;
    &:focus {
      outline-color: rgb(130, 130, 0);
    }
  }

  input,
  label,
  select {
    height: 30px;
  }

  label {
    margin: 10px 0 0 0;
  }

  button {
    margin-top: 30px;
    height: 50px;
    color: rgb(130, 130, 0);
    background-color: rgb(255, 255, 255);
    border-style: none solid solid none;
    &:focus {
      outline: none;
    }
    &:active {
      border-style: none;
      background-color: rgb(245, 245, 245);
      transform: translateY(1px) translateX(1px);
    }
  }

  @media screen and (min-width: 600px) {
    input,
    label,
    select,
    button {
      align-self: center;
      width: 80%;
    }
  }
`

const RSVP = () => {
  let initialUser = {
    fName: "",
    lName: "",
    entree: "",
  }

  const [user, setUser] = useState(initialUser)

  const handleChange = e => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...user }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()

    console.log(user)

    setUser(initialUser)
  }

  return (
    <div>
      <Layout>
        <h2 style={{ textAlign: "center" }}>RSVP</h2>
        <h4
          style={{
            textAlign: "center",
            padding: "15px 0px",
            width: "80%",
            margin: "0 auto",
          }}
        >
          If you are able to join us, please enter your name below and select
          your entree for the reception by March 10, 2021.
        </h4>
        <Form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label name="fName">First Name</label>
          <input
            name="fName"
            type="text"
            value={user.fName}
            onChange={handleChange}
          />
          <label name="lName">Last Name</label>
          <input
            name="lName"
            type="text"
            value={user.lName}
            onChange={handleChange}
          />
          <label name="entree">Entree</label>
          <select name="entree" value={user.entree} onChange={handleChange}>
            <optgroup label="Chicken">
              <option value="coq au vin">Coq Au Vin</option>
            </optgroup>
            <optgroup label="Red Meat (gluten free)">
              <option value="short rib">Sous Vide Beef Short Rib</option>
            </optgroup>
            <optgroup label="Fish or Vegetarian">
              <option value="salmon">Blackened Salmon</option>
              <option value="vegetarian">Vegetarian</option>
            </optgroup>
          </select>

          <button type="submit">Submit</button>
        </Form>
      </Layout>
      <Footer />
    </div>
  )
}

export default RSVP
