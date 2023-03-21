import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from "./App.jsx";
import { BrowserRouter  } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Login from  "./components/login/Login.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
 
);
