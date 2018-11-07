import React from 'react';
import '../css/layout.css';
import '../css/test.css';
import ImageBlock from '../components/ImageBlock';
import Journal from '../images/IMG_4632.jpg';
import About from '../images/profile.jpg';
import Photography from '../images/IMG_1700.jpg';
import Projects from '../images/IMG_4893.jpg';

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
        <ImageBlock text='About' url='/about' image={About} isVertical='true'/>
      </div>
      <div className='photography'>
        <ImageBlock text='Photography' url='/photography' image={Photography} />
      </div>
      <div className='projects'>
        <ImageBlock text='Projects' url='/projects' image={Projects} />
      </div>
      <div className='journal'>
        <ImageBlock text='Journal' url='/journal' image={Journal} />
      </div>
    </div>
  )
}
 
export default Home;