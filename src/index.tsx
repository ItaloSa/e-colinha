import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from "react-ga4";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


ReactGA.initialize("G-1JNS70J25V");
ReactGA.send("pageview");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
