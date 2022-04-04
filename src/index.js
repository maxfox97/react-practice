import './index.css';
import {store} from "./componets/redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
        store={store}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState);

store.subscribe(rerenderEntireTree);


