import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';
import posters from './posters';

function MainContent() {
  const postersElem = posters.map(poster => {
    return <Poster img={poster.image} title={poster.title}/>
  });
  
  return (
    <div className='mainContent'>
      <img src='./poster.png' /><div className='experienceDescription'>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
      <div className='posters'>
        {postersElem}
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
