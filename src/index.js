import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App_Ex1 from './App_Ex1_Component_Stateless';
import App_Ex2 from './App_Ex2_props';
import App_Ex3 from './App_Ex3_Event_Props';
import App_Ex4 from './App_Ex4_State';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <App_Ex1/> */}
    {/* <App_Ex2/> */}
    {/* <App_Ex3/> */}
    <App_Ex4/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
