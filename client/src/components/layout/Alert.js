import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <section>
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    </section>
  ));

alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateProps = state => ({
  alerts: state.alert
});

export default connect(mapStateProps, {})(Alert);
