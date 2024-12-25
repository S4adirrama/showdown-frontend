import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import global_ru from "./translations/ru/global.json";
import global_kz from "./translations/kz/global.json";
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next'; 

i18next.init({
  interpolation: { escapeValue: false }, 
  lng: "ru", 
  resources: {
    ru: {
      global: global_ru, 
    },
    kz: {
      global: global_kz, 
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
);
