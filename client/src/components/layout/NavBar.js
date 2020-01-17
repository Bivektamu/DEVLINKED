import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../actions/auth';

const NavBar = ({ auth: { isAuthenticated, loading }, logOut }) => {
  const navBar = document.querySelector('nav');

  const toggleNav = e => {
    console.log(navBar.classList.toggle('active_nav'));
  };

  const logOutUser = () => {
    console.log(navBar.classList.toggle('active_nav'));
    logOut();
  };

  const authLinks = (
    <ul>
      <li>
        <NavLink
          activeClassName='active'
          to='/dashboard'
          onClick={e => toggleNav(e)}
        >
          <i className='fas fa-user'></i>&nbsp;
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName='active'
          to='/profiles'
          onClick={e => toggleNav(e)}
        >
          Developers
        </NavLink>
      </li>

      <li>
        <NavLink
          activeClassName='active'
          to='/posts'
          onClick={e => toggleNav(e)}
        >
          Posts
        </NavLink>
      </li>

      <li>
        <a href='#!' onClick={() => logOutUser()}>
          <i className='fas fa-sign-out-alt'></i>&nbsp;
          <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <NavLink
          activeClassName='active'
          to='/profiles'
          onClick={e => toggleNav(e)}
        >
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName='active'
          to='/register'
          onClick={e => toggleNav(e)}
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName='active'
          to='/login'
          onClick={e => toggleNav(e)}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1 className='logo'>
        <Link to='/'>
          <i className='fas fa-code'></i> DevLinked
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
      <a href='#!' id='nav-toggle' onClick={e => toggleNav(e)}>
        <span></span>
      </a>
    </nav>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logOut })(NavBar);
