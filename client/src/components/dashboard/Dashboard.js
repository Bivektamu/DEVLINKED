import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import { Link } from 'react-router-dom';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (loading && profile === null) return <Spinner />;

  return (
    <section>
      <div className='container'>
        <h1 className='large text-primar'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>&nbsp;Welcome {user && user.name}
        </p>

        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile. Please add some info.</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </Fragment>
        )}
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
