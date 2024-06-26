import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';

function Experience({ experience, deleteExperience }) {
  const experiences = experience.map(exp => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        {/* <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '} */}
        {exp.to === null ? (
          'Now'
        ) : (
          asdf
          // <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteExperience(exp.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  if (experiences.length === 0) return '';
  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
    </Fragment>
  );
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
