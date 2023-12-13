import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Header } from './Header';

function MainContent() {
  return (
    <div>
      <h1>Reasons i'm exited to react</h1>
      <ol>
        <li>It is popular library, so I will be able to fit in with the cool kids!</li>
        <li>I'm more likely will be better developer if I know react</li>
      </ol>
    </div>
  )
}

function Footer() {
  return (
    <div>
      MR. Kairat Beast, all rigth reserved
    </div>
  )
}


const page = (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);


ReactDOM.render(
  page,
  document.getElementById('root')
);

reportWebVitals();
