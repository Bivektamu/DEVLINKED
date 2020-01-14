import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Banner from './Banner';

import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading, repos },
  match
}) => {
  console.log();
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  if (!profile || loading) return <Spinner />;

  return (
    <section>
      <div className='container'>
        <Link to='/profiles' class='btn btn-light'>
          Back To Profiles
        </Link>
        <Banner profile={profile} />
      </div>
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileById })(Profile);
