import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;

  return (
    <button
      type="button"
      className={`button button-${name} ${wide ? 'wide' : ''}`}
      style={{ backgroundColor: color }}
    >
      { name }
    </button>
  );
};

Button.defaultProps = {
  name: 'N/A',
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
