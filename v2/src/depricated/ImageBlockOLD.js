import React from 'react';

const ImageBlock = (props) => {
  return (
    <div key={props.text} className='imageBlock'>
      <a href={props.url}>
          <img className='background' src={props.image} alt='temp' isvertical={props.isVertical} />
          <h3 className='centered'>{props.text}</h3>
      </a>
    </div>
  )
}
 
export default ImageBlock;