import './fonts/Roboto-Medium.ttf';
import './fonts/Roboto-Medium.ttf';
import './fonts/Roboto-Bold.ttf';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/r_and_m">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
