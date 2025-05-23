import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/poppins/100.css"; // Loads the semibold weight
import "@fontsource/poppins/200.css"; // Loads the semibold weight
import "@fontsource/poppins/300.css"; // Loads the semibold weight
import "@fontsource/poppins/400.css"; // Loads the semibold weight
import "@fontsource/poppins/500.css"; // Loads the semibold weight
import "@fontsource/poppins/600.css"; // Loads the semibold weight
import "@fontsource/poppins/700.css"; // Loads the semibold weight
import "@fontsource/poppins/800.css"; // Loads the semibold weight
import "@fontsource/poppins/900.css"; // Loads the semibold weight



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
