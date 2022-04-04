import './index.css';
import state, { subscribe } from "./componets/redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {addMessage, addPost, updateNewMessage, updateNewPostText} from "./componets/redux/state";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
        state = {state} 
        addPost={addPost} 
        rerenderEntireTree={rerenderEntireTree} 
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessage={updateNewMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);


