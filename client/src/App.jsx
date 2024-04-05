import React, { useEffect } from 'react';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Default from './components/Default';
import Dashboard from './components/dashboard/Dashboard';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PrivateRoute from './components/routing/PrivateRoute';
import store from './store';
import { Provider } from 'react-redux';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

// import logo from './logo.svg';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// PrivateRoute component
const PrivateRoute = ({ path, element }) => {
    // If not authenticated, redirect to login page
    <Navigate to="/login" replace />
};

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Alert />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/profiles' element={<Profiles />} />
          <Route exact path='/profile/:id' element={<Profile />} />
          <Route exact path='/dashboard' element={<PrivateRoute component={Dashboard}></PrivateRoute>} />
          {/* <PrivateRoute
            exact
            path='/create-profile'
            component={CreateProfile}
          />
          <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          <PrivateRoute
            exact
            path='/add-experience'
            component={AddExperience}
          />
          <PrivateRoute exact path='/add-education' component={AddEducation} />
          <PrivateRoute exact path='/posts' component={Posts} />
          <PrivateRoute exact path='/posts/:id' component={Post} /> */}
          <Route component={Default} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
