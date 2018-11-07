import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components'
import Img from 'gatsby-image';

const Journal = (props) => (
  <Layout>
    <div>SOME CONTENT</div>  
  </Layout>
)

export default Journal

// export const fluidImage = graphql`
// fragment fluidImage on File {
//   childImageSharp {
//     fluid(maxWidth: 1240) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// `;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "IMG_4004.jpg" }) {
      ...fluidImage
    }
  }
`

const Splash = styled.div`
  position: relative;
  height: 100vh;

`;

const imageStyle = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100vh",
  zIndex: -1
}