import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <HashRouter basename={window.location.pathname || ''}>
    <App />
  </HashRouter>
);

