import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Banner from './Banner';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import GithubRepos from './GithubRepos';

import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading, repos },
  match
}) => {
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
        <About profile={profile} />
        {profile.experience.length > 0 && (
          <Experience experience={profile.experience} />
        )}
        {profile.education.length > 0 && (
          <Education education={profile.education} />
        )}
        {profile.githubusername && (
          <GithubRepos githubusername={profile.githubusername} />
        )}
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
