import React from 'react';
import PropTypes from 'prop-types';
import { v4 as genKey } from 'uuid';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const groups = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'X'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };

  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  const renderGroup = group => (
    group.map(item => <Button name={item} key={genKey()} wide={item === '0'} clickHandler={handleClick} />)
  );

  return (
    <div className="button-panel">
      {Object.entries(groups).map(([groupName, group]) => (
        <div className="button-row" key={groupName}>
          {renderGroup(group)}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
