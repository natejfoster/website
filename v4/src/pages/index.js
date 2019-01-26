import React from 'react'
import { graphql } from 'gatsby'
import ImageCard from '../components/imageCard'
import HomeLayout from '../components/homeLayout'
import Footer from '../components/footer'
import styled from 'styled-components'
import Img from 'gatsby-image'

const IndexPage = (props) => (
  <HomeLayout>
    <div className='container'>
      <Splash className='splash'>
        <div>
          <h1 className='splashName'>Nathan J Foster</h1>
          <h2 className='splashText'>Developer. Photographer. Adventurer.</h2>
        </div>
        <Img fluid={props.data.imageSplash.childImageSharp.fluid} style={imageSplash} />
      </Splash>
      <ImageWrapper className='about'>
        <ImageCard text='About' url='/about'/>
        <Img fluid={props.data.imageAbout.childImageSharp.fluid} style={imageStyle} />
      </ImageWrapper>
      <ImageWrapper className='photography'>
        <ImageCard text='Photography' url='/photography' />
        <Img fluid={props.data.imagePhotography.childImageSharp.fluid} style={imageStyle} />
      </ImageWrapper>
      <ImageWrapper className='projects'>
        <ImageCard text='Projects' url='/projects' />
        <Img fluid={props.data.imageProjects.childImageSharp.fluid} style={imageStyle} />
      </ImageWrapper>
      <ImageWrapper className='journal'>
        <ImageCard text='Journal' url='/journal' />
        <Img fluid={props.data.imageJournal.childImageSharp.fluid} style={imageStyle} />
      </ImageWrapper>
    </div>
    <Footer />
  </HomeLayout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageSplash: file(relativePath: { eq: "IMG_4004.jpg" }) {
      ...fluidImage
    }
    imageAbout: file(relativePath: { eq: "profile.jpg" }) {
      ...fluidImage
    }
    imagePhotography: file(relativePath: { eq: "IMG_1700.jpg" }) {
      ...fluidImage
    }
    imageJournal: file(relativePath: { eq: "IMG_4632.jpg" }) {
      ...fluidImage
    }
    imageProjects: file(relativePath: { eq: "IMG_4893.jpg" }) {
      ...fluidImage
    }
  }
`

const Splash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Stalemate', cursive !important;
  font-size: 150%;
  position: relative;
`

const ImageWrapper = styled.div`
  position: relative;
`

const imageStyle = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: -1
}

const imageSplash = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100vh",
  zIndex: -1
}
