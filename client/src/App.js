import React, { Fragment } from 'react';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Route exact path='/' component={Landing} />
  </Router>
);

export default App;
