import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import Moment from 'react-moment';

const Education = ({ education }) => {
  education.reverse();
  const edu = education.map(
    (
      { school, from, to, current, degree, fieldofstudy, description },
      index
    ) => {
      return (
        <div key={index}>
          <h3>{school}</h3>
          {/* {
            from && to &&
            <p>
              <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
              {current ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
          } */}

          <p>
            <strong>Degree: </strong>
            {degree}
          </p>
          <p>
            <strong>Field Of Study: </strong>
            {fieldofstudy}
          </p>
          {description && (
            <Fragment>
              <p>
                <strong>Description: </strong>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                ipsam, sapiente suscipit dicta eius velit amet aspernatur
                asperiores modi quidem expedita fugit.
              </p>
            </Fragment>
          )}
        </div>
      );
    }
  );
  return (
    <div className='profile-edu bg-white p-2'>
      <h2 className='text-primary'>Education</h2>
      {edu}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired
};

export default Education;
