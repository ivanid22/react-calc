import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result, operation } = props;
  return (
    <div className="display-container">
      {operation ? <span className="operator">{operation}</span> : null}
      <input className="display" type="text" value={result} readOnly />
    </div>
  );
};

Display.defaultProps = {
  result: '0',
  operation: null,
};

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
