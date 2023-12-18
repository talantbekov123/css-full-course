import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';
import posters from './travelData';

function MainContent() {
  const postersElem = posters.map(poster => {
    return <Poster {...poster}/>
  });

  return (
    postersElem
  )
}

function Poster(props) {
  return (
    <div class="poster">
      <img src={props.image} alt="Poster Image" />
      <div class="text">
            <p className='country'>{props.country}</p>
            <p><a href={props.link}>View on Google Maps</a></p>
            <h1><strong>{props.location}</strong></h1>
            <p><strong>{props.dates}</strong></p>
            <p>{props.description}</p>
        </div>
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
