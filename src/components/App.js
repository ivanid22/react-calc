import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
  <div>
    <Display result={1234} />
    <ButtonPanel />
  </div>
);

export default App;
