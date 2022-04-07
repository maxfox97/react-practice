import "./index.css";
import store from "./componets/redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
         state={state} 
         dispatch={store.dispatch.bind(store)}
         store={store}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

rerenderEntireTree(store.getState()); // точка входа

store.subscribe(()=> {
  
  let state = store.getState();
  rerenderEntireTree(state);
});


