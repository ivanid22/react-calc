import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;

  return (
    <button type="button" className="calc-button">
      { name }
    </button>
  );
};

Button.defaultProps = {
  name: 'N/A',
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
