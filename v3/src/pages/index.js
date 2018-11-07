import React from 'react'
import Link from 'gatsby-link'
import ImageBlock from '../components/ImageBlock';
import profile from '../images/profile.jpg';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <ImageBlock text='About' url='/about' image={profile} isVertical='true'/>
  </div>
)

export default IndexPage
