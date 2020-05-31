import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './components/Nav.css';
import 'tachyons';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

