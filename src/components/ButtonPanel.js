import React from 'react';
import Button from './Button';

const genKey = () => Math.floor(Date.now() * Math.random());

const renderGroup = group => (
  group.map(item => <Button name={item} key={genKey()} wide={item === '0'} />)
);

const ButtonPanel = () => {
  const groups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="button-panel">
      {groups.map(group => (
        <div className="button-row" key={genKey()}>
          {' '}
          {renderGroup(group)}
          {' '}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
