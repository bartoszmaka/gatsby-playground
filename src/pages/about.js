import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Navigation from "../components/navigation"


export default function About({ data }) {
  return (
    <div style={{ color: `teal` }}>
      <Navigation />
      <Header headerText="About Gatsby" />
      <Header headerText="It's pretty cool" />
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>Such wow. Very React.</p>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
