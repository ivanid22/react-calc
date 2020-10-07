import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
