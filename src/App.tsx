import React from 'react';

import Planning from './components/Planning';
import CreationTask from './components/CreationTask';

import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Planning />
      <CreationTask />
    </div>
  );
};

export default App;
