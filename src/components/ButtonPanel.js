import React from 'react';
import { v4 as genKey } from 'uuid';
import Button from './Button';

const renderGroup = group => (
  group.map(item => <Button name={item} key={genKey()} />)
);

const ButtonPanel = () => {
  const groups = {
    group1: ['AC', '+/-', '%', '÷'],
    group2: ['7', '8', '9', 'X'],
    group3: ['4', '5', '6', '-'],
    group4: ['1', '2', '3', '+'],
    group5: ['0', '.', '='],
  };

  return (
    <div className="button-panel">
      {Object.entries(groups).map(group => (
        <div className="button-row" key={genKey()}>
          {' '}
          {renderGroup(group[1])}
          {' '}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
