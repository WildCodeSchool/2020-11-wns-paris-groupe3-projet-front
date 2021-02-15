import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Planning from './components/Planning';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/planning" component={Planning} />
    </Router>
  );
};

export default App;
