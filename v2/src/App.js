import React, { Component } from 'react';
import './css/App.css';
import ImageBlock from './components/ImageBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="splash"></div>
          <div className="about">
            <ImageBlock text="About" url="/about" image="/imgs/IMG_1700.jpg" />
          </div>
          <div className="photography">
            <ImageBlock text="Photography" url="/photography" image="/imgs/IMG_1700.jpg" />
          </div>
          <div className="projects">
            <ImageBlock text="Projects" url="/projects" image="/imgs/IMG_4893.jpg" />
          </div>
          <div className="journal">
            <ImageBlock text="journal" url="/journal" image="/imgs/IMG_4632.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
