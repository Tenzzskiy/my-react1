import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./../src/redux/state";


export let rerenderEntireTree = (state) =>{

ReactDOM.render(

  <React.StrictMode>
    <App state={state} addPost={addPost} />
  </React.StrictMode>
    ,
  document.getElementById('root')
);

}
reportWebVitals();



