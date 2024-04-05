import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  <div id="alerts">
    {alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        <p>{alert.msg}</p>
      </div>
    ))}
  </div>


alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateProps = state => ({
  alerts: state.alert
});

export default connect(mapStateProps, {})(Alert);
