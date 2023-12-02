import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Login from '../src/components/Login';
import Main from '../src/components/Main';
import Handlerio from '../src/components/Handlerio';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="" element={<App/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Main" element={<Handlerio Component={Main}/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
