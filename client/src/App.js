import React, { useEffect } from 'react';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Default from './components/Default';
import Dashboard from './components/dashboard/Dashboard';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import store from './store';
import { Provider } from 'react-redux';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// import logo from './logo.svg';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Route exact path='/' component={Landing} />
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
