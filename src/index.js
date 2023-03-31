import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import 'styles/variables.scss';
import 'styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/bookstore">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
