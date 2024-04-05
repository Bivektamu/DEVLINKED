import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// import Moment from 'react-moment';

const Experience = ({ experience }) => {
  const exp = experience.map(
    ({ company, from, to, status, description, current }, index) => {
      return (
        <div key={index}>
          <h3 className='text-dark'>{company}</h3>
          <p>
            {/* <Moment format='YYYY/MM/DD'>{from}</Moment>&nbsp;-&nbsp; */}
            {/* {current ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>} */}
          </p>
          <p>
            <strong>Position: </strong>
            {status}
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
    <div className='profile-exp bg-white p-2'>
      <h2 className='text-primary'>Experience</h2>
      {exp}
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default Experience;
