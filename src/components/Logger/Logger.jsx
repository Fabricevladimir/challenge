import React from 'react';
import PropTypes from 'prop-types';

function Logger({logs}) {
  return logs.map((event) => <p>{event}</p>);
}

Logger.defaultProps = {
  logs: [],
};

Logger.propTypes = {
  logs: PropTypes.array.isRequired,
};

export default Logger;
