import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { UserProvider } from './context/UserContext';

import Planning from './components/Planning';
import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <Router>
      <UserProvider>
        <Route exact path="/" component={Home} />
        <Route exact path="/planning" component={Planning} />
      </UserProvider>
    </Router>
  );
};

export default App;
