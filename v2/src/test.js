import React, { Component } from 'react';
import ImageBlock from './components/ImageBlock';

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
