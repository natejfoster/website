import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <StyledLink to="about">About</StyledLink>
      <StyledLink to="photography">Photography</StyledLink>
      <StyledLink to="projects">Projects</StyledLink>
      <StyledLink to="journal">Journal</StyledLink>
    </div>
  </div>
)

export default Header

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding-right: 10px;
  margin: 0px;
`;