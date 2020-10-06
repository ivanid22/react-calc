import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="display">
      <input type="text" value={result} />
    </div>
  );
};

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.number,
};

export default Display;
