import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Navigation />
      <Header headerText="Hi" />
      <Header headerText="Dont contact me please" />
    </div>
  )
}
