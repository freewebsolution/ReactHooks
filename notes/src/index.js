import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const note = [
  {
    id:1,
    tema:'Appuntamento dal dentista',
    data:'2021-03-18T9:30.0981Z',
    giorno:'21/03/2021',
    ora:'9:30',
    important:true
  },
  {
    id: 2,
    tema: 'Appuntamento dal commercialista',
    data: '2021-03-18T9:30.0981Z',
    giorno: '21/03/2021',
    ora: '14:30',
    important:false
  },
  {
    id: 3,
    tema: 'Andare a scuola a prendere Giorgia',
    data: '2021-03-18T9:30.0981Z',
    giorno: '21/03/2021',
    ora: '15:30',
    important:true
  },
  
]
ReactDOM.render(
  <React.StrictMode>
    <App note= {note}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
