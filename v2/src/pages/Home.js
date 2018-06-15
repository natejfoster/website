import React from 'react';
import ImageBlock from '../components/ImageBlockTEST';

const Home = () => {
  return (
    <div className='container'>
      <div className='splash'>
        
      </div>
      <div className='about'>
        <ImageBlock text='About' url='/about' image='/imgs/profile.jpg' isVertical='true'/>
      </div>
      <div className='photography'>
        <ImageBlock text='Photography' url='/photography' image='/imgs/IMG_1700.jpg' />
      </div>
      <div className='projects'>
        <ImageBlock text='Projects' url='/projects' image='/imgs/IMG_4893.jpg' />
      </div>
      <div className='journal'>
        <ImageBlock text='Journal' url='/journal' image='/imgs/IMG_4632.jpg' />
      </div>
    </div>
  )
}
 
export default Home;