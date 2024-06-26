import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dashboard from '../dashboard/Dashboard';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    <Navigate to={Dashboard} />
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Linked!</h1>
          <p className='lead'>
            Create a developer profile/portfolio, share posts, help or get help
            from other developers
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
