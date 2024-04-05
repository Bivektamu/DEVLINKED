import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function About({ profile }) {
  const {
    user: { name, avatar },
    bio,
    skills
  } = profile;
  return (
    <div className='profile-about bg-light p-2'>
      <h2 className='text-primary'>{name}'s Bio</h2>
      {bio && (
        <Fragment>
          <p>{bio}</p>
        </Fragment>
      )}

      <div className='line'></div>

      <h2 className='text-primary'>Skill Set</h2>
      <div className='skills'>
        {skills.map((skill, index) => (
          <div className='p-1' key={index}>
            <i className='fa fa-check'></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

About.propTypes = {
  profile: PropTypes.object.isRequired
};

export default About;
