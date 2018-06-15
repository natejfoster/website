import React, { Component } from 'react';
import './css/AppTest.css';
import ImageBlock from './components/ImageBlockTEST';

class AppTest extends Component {
  render() {
    return (
      <div className='bounding'>
        <ImageBlock text="About" url="/about" image="/imgs/profile.jpg" />
      </div>
    );
  }
}

export default AppTest;
