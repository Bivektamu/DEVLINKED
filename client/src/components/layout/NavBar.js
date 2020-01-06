import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../actions/auth';

const NavBar = ({ auth: { isAuthenticated, loading }, logOut }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>&nbsp;
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a href='#!' onClick={logOut}>
          <i className='fas fa-sign-out-alt'></i>&nbsp;
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
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
