import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ImageBlock = (props) => {

  return (
    <Block key={props.text} className='imageBlock'>
      <StyledLink to={props.url}>
          <h3 className='imageCard'>{props.text}</h3>
      </StyledLink>
    </Block>
  )
}
 
export default ImageBlock;

const Block = styled.div`
  height: 100%;
  width: 100%;

  &:hover {
    opacity: .50;
    background-color: black;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%; 
  text-decoration: none;
`;