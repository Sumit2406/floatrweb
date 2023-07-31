import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './screens/App';
import reportWebVitals from './screens/reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import './assets/fonts/Proxima Nova Extrabold.otf';
import './assets/fonts/Proxima Nova Light.otf';
import './assets/fonts/Proxima Nova Regular.otf';
import './assets/fonts/Proxima Nova Semibold.otf';
import { Provider } from 'react-redux';
import { store } from './configureStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
