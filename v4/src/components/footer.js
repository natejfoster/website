import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <div>
      <span>Copyright &copy; {(new Date().getFullYear())} Nathan J. Foster</span>
    </div>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.div`
    height: 100px;
    display: flex;
    color: white;
    background: black;
    align-items: center;
    width: 100%;
    justify-content: center;
    text-align: center;
    z-index: 5;
`

