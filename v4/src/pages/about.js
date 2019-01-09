import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const About = (props) => (
  <Layout>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} style={imageStyle} />
    <h2>Hi, I'm Nathan</h2>
    <p>
      So who am I? I claim to be a developer, adventurer, and a photographer, but realistically,
      I am probably just a guy with too many hobbies and too little time.
    </p>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "ski_2019.jpg" }) {
      ...fluidImage
    }
  }
`

const imageStyle = {
  maxWidth: "750px",
  margin: "0 auto"
}