import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <input className="display" type="text" value={result} />
  );
};

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.number,
};

export default Display;
