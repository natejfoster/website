import React from 'react';
import ImageBlock from '../components/ImageBlock';

const Home = () => {
  return (
    <div className='container'>
      <div className='splash'>
        <div className='centered'>
          <h1 className='splashName'>Nathan J Foster</h1>
          <h2 className='splashText'>Developer. Photographer. Adventurer.</h2>
        </div>
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