import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Experience from './Experience';
import Education from './Education';

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
  console.log(profile);

  return (
    <section>
      <div className='container'>
        <h1 className='large text-primar'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>&nbsp;Welcome {user && user.name}
        </p>

        {profile !== null ? (
          <Fragment>
            <div class='dash-buttons'>
              <Link to='/edit-profile' class='btn btn-light'>
                <i class='fas fa-user-circle text-primary'></i> Edit Profile
              </Link>
              <Link to='/add-experience' class='btn btn-light w250'>
                <i class='fab fa-black-tie text-primary'></i> Add Experience
              </Link>
              <Link to='/add-education' class='btn btn-light w250'>
                <i class='fas fa-graduation-cap text-primary'></i> Add Education
              </Link>
            </div>
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
          </Fragment>
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
