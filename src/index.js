import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { LoginWithGoogle } from 'components/LoginWithGoogle/LoginWithGoogle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/rick_and_morty">
      {/* <App /> */}
      <LoginWithGoogle />
    </BrowserRouter>
  </React.StrictMode>
);
