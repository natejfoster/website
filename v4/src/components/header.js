import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import header from '../images/IMG_4004.jpg'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div>
      <h1 style={{ margin: 0 }}>
        <SiteTitle to="/">{siteTitle}</SiteTitle>
      </h1>
      <Navigation>
        <StyledLink to="about" activeClassName="curRoute">About</StyledLink>
        <StyledLink to="photography" activeClassName="curRoute">Photography</StyledLink>
        <StyledLink to="projects" activeClassName="curRoute">Projects</StyledLink>
        <StyledLink to="journal" activeClassName="curRoute">Journal</StyledLink>
      </Navigation>
    </div>
  </HeaderContainer>
)

export default Header

const HeaderContainer = styled.div`
    background-image: url(${header});
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: center;
    text-align: center;
    z-index: 5;
`

const Navigation = styled.div`
    height: 100%;
    text-align: center;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px;
  &.curRoute {
    border-bottom: white 1px solid;
  }
`;

const SiteTitle = styled(Link)`
  color: white;
  display: inline;
  text-align: center;
  text-decoration: none;
  margin: auto;
  font-family: 'Stalemate', cursive !important;
`;

