import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';

function MainContent() {
  return (
    <div className='mainContent'>
      <img src='./poster.png'/>

      <div className='experienceDescription'>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
      <div className='posters'>
        <Poster img="./poster-1.png" title="Life lesson with Ledi GaGa"/>
        <Poster img="./poster-2.png" title="How to become a millionere"/>
        <Poster img="./poster-3.png" title="How swimming help me to meditate"/>
      </div>
    </div>
  )
}

function Poster(props) {
  return (
    <div className="poster">
      <img src={props.img} alt=""/>
      <p>
        {props.title}
      </p>
      <p>{props.description}</p>
    </div>
  )
}

const page = (
  <div className="main">
    <Header />
    <MainContent />
  </div>
);


ReactDOM.render(
  page,
  document.getElementById('root')
);

reportWebVitals();
