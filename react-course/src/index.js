import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';

function MainContent() {
  return (
    <div>
      <img src='./poster.png'/>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </div>
  )
}

function Poster() {
  return (
    <div className="poster">
      <img src="./poster-1.png" alt=""/>
      <p>
        Life lessons with Katie Zaferes
      </p>
      <p>From $136 / person</p>
    </div>
  )
}

const page = (
  <div className="main">
    <Header />
    <MainContent />
    <div className='posters'>
       <Poster />
       <Poster />
       <Poster />

    </div>
  </div>
);


ReactDOM.render(
  page,
  document.getElementById('root')
);

reportWebVitals();
