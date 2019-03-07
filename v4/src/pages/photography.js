import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Photography = (props) => (
  <Layout>
    <p>
      Coming as soon as I have the time to work on it. In the meantime, here is a shot
      from the Enchantments I took in 2018. 
    </p>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} style={imageStyle} />
  </Layout>
)

export default Photography;

const imageStyle = {
  maxWidth: "750px",
  margin: "0 auto"
}

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "IMG_5467.jpg" }) {
      ...fluidImage
    }
  }
`