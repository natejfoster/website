import React from 'react';

const ImageBlock = (props) => {
  var style = {
    backgroundImage: 'url(' + props.image + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div key={props.text} className='imageBlock' style={style}>
      <a href={props.url}>
          <h3 className='test'>{props.text}</h3>
      </a>
    </div>
  )
}
 
export default ImageBlock;