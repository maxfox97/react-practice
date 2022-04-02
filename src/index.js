import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Nick" },
  { id: 5, name: "Anna" },
  { id: 6, name: "Oleh" },
];

const messagesData = [
  { id: 1, message: "Hi, how are you ?" },
  { id: 2, message: "What's up ?" },
  { id: 3, message: "Yo" },
];

const postsData = [
  { id: 1, message: "Hi, Max, What's up ?", likesCount: "12" },
  { id: 2, message: "Hi, Sveta, How are you ?", likesCount: "24" },
  { id: 3, message: "Hi, Nika", likesCount: "13" },
  { id: 3, message: "Hi", likesCount: "56" },
  { id: 3, message: "Yo", likesCount: "13" },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
