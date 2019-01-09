import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const Photography = (props) => (
  <Layout>
    <div>Coming Soon!</div>  
  </Layout>
)

export default Photography

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "IMG_4004.jpg" }) {
      ...fluidImage
    }
  }
`