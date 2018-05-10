import React from 'react';

const ImageBlock = (props) => {
  return (
    <div key={props.text} className='imageBlock'>
      <a href={props.url}>
        <img className='background'src={props.image} alt='temp'/>
        <div className='centered'>{props.text}</div>
      </a>
    </div>
  )
}
 
export default ImageBlock;