import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import state from "./componets/redux/state";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state = {state}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
