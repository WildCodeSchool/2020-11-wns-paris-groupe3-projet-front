import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import NewAssignation from './pages/NewAssignation';
import NewTask from './pages/NewTask';

import './App.css';

const App = (): JSX.Element => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/task" component={NewTask} />
      <Route exact path="/assignation" component={NewAssignation} />
    </Router>
  );
};

export default App;
