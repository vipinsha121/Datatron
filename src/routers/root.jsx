import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import App from './App';

ReactGA.initialize('UA-86746056-1');

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
