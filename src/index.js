import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
);


// eslint-disable-next-line no-lone-blocks
{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}

// eslint-disable-next-line no-lone-blocks
{/* <BrowserRouter>
    <App />
  </BrowserRouter> */}