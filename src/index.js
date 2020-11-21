import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<Routes />, rootElement);
} else {
  ReactDOM.render(<Routes />, rootElement);
}