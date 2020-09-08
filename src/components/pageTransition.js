import React from "react"
import PageTransition from "gatsby-plugin-page-transitions"

const Transition = ({ children }) => <PageTransition>{children}</PageTransition>

export default Transition

// Gives the {main} of the grid the fade in and fade out effects.
