import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from "./View/landing"

document.body.style = 'background: #252525';

ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);
