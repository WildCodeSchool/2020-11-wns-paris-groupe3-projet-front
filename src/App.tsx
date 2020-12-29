import React from 'react';
// import Planning from './components/Planning';
import TaskCard from './components/Cards/TaskCard';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div className="App">
      {/* <Planning /> */}
      <TaskCard />
    </div>
  );
};

export default App;
